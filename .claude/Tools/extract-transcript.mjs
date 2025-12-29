#!/usr/bin/env node

/**
 * YouTube Transcript Extractor
 * Uses youtubei.js - most robust library that mimics official YouTube client
 * Works cross-platform without external dependencies
 */

import { Innertube } from 'youtubei.js';
import * as fs from 'fs';

async function extractTranscript(videoUrl, outputPath = './transcript.json') {
    console.log('🎬 Extracting transcript from YouTube...');
    console.log('📝 Video URL:', videoUrl);

    // Extract video ID
    const videoIdMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (!videoIdMatch) {
        console.error('❌ Invalid YouTube URL');
        console.error('');
        console.error('Expected format:');
        console.error('  https://youtube.com/watch?v=VIDEO_ID');
        console.error('  https://youtu.be/VIDEO_ID');
        process.exit(1);
    }
    const videoId = videoIdMatch[1];

    try {
        console.log('🔄 Initializing YouTube client...');
        const youtube = await Innertube.create();

        console.log('📥 Fetching video info and transcript...');
        const info = await youtube.getInfo(videoId);

        // Get video metadata
        const title = info.basic_info.title;
        const duration = info.basic_info.duration;
        const channel = info.basic_info.author;

        console.log('✅ Video found:', title);
        console.log('👤 Channel:', channel);
        console.log('⏱️  Duration:', Math.floor(duration / 60), 'minutes');

        // Get transcript
        console.log('📝 Fetching transcript...');
        const transcriptData = await info.getTranscript();

        if (!transcriptData || !transcriptData.transcript) {
            console.error('❌ No transcript available for this video');
            console.error('');
            console.error('This video does not have captions enabled.');
            console.error('');
            console.error('Possible reasons:');
            console.error('  - Owner disabled captions');
            console.error('  - Video is too new (captions not generated yet)');
            console.error('  - Video is age-restricted or private');
            console.error('');
            process.exit(1);
        }

        // Extract and clean transcript text
        const segments = transcriptData.transcript.content.body.initial_segments;

        if (!segments || segments.length === 0) {
            console.error('❌ Transcript is empty');
            process.exit(1);
        }

        const transcript = segments
            .map(segment => segment.snippet.text)
            .join(' ')
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim();

        console.log('✅ Transcript fetched successfully');
        console.log('📝 Word count:', transcript.split(/\s+/).length);
        console.log('📊 Segments:', segments.length);

        // Prepare output
        const output = {
            videoId,
            url: videoUrl,
            title: title,
            channel: channel,
            duration: duration,
            transcript: transcript,
            extractedAt: new Date().toISOString(),
            segments: segments.length,
            wordCount: transcript.split(/\s+/).length
        };

        // Save to file
        fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
        console.log('✅ Transcript saved to:', outputPath);
        console.log('✨ Done!');

        return output;

    } catch (error) {
        console.error('❌ Error extracting transcript');
        console.error('');
        console.error('Error details:', error.message);

        if (error.message.includes('This video does not have a transcript')) {
            console.error('');
            console.error('This video does not have captions enabled.');
            console.error('Please try a different video that has captions/subtitles.');
        } else if (error.message.includes('Video unavailable')) {
            console.error('');
            console.error('This video is unavailable (private, deleted, or age-restricted).');
        }

        console.error('');
        throw error;
    }
}

// CLI usage
const videoUrl = process.argv[2];
const outputPath = process.argv[3] || './transcript.json';

if (!videoUrl) {
    console.error('Usage: node extract-transcript.mjs <youtube-url> [output-path]');
    console.error('');
    console.error('Example:');
    console.error('  node extract-transcript.mjs "https://youtube.com/watch?v=VIDEO_ID" transcript.json');
    console.error('');
    process.exit(1);
}

extractTranscript(videoUrl, outputPath)
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('');
        console.error('❌ Failed to extract transcript');
        process.exit(1);
    });
