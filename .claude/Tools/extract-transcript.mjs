#!/usr/bin/env node

/**
 * YouTube Transcript Extractor
 * Uses youtube-transcript npm package - much more reliable than yt-dlp
 * Works cross-platform without external dependencies
 */

import { YoutubeTranscript } from 'youtube-transcript';
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
        console.log('📥 Fetching transcript...');

        // Fetch transcript using youtube-transcript package
        const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);

        if (!transcriptData || transcriptData.length === 0) {
            console.error('❌ No transcript available for this video');
            console.error('');
            console.error('This video may not have:');
            console.error('  - Auto-generated captions');
            console.error('  - Manual subtitles');
            console.error('');
            console.error('Please try a different video or provide transcript manually.');
            process.exit(1);
        }

        // Convert transcript array to clean text
        const transcript = transcriptData
            .map(item => item.text)
            .join(' ')
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim();

        // Calculate duration from last timestamp
        const duration = transcriptData[transcriptData.length - 1]?.offset || 0;

        console.log('✅ Transcript fetched successfully');
        console.log('📝 Word count:', transcript.split(/\s+/).length);
        console.log('⏱️  Duration:', Math.floor(duration / 60000), 'minutes');

        // Prepare output
        const output = {
            videoId,
            url: videoUrl,
            duration: Math.floor(duration / 1000), // Convert to seconds
            transcript: transcript,
            extractedAt: new Date().toISOString(),
            segments: transcriptData.length
        };

        // Save to file
        fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
        console.log('✅ Transcript saved to:', outputPath);
        console.log('✨ Done!');

        return output;

    } catch (error) {
        console.error('❌ Error extracting transcript:', error.message);
        console.error('');

        if (error.message.includes('Could not find') || error.message.includes('Transcript is disabled')) {
            console.error('This video does not have transcripts enabled.');
            console.error('');
            console.error('Possible reasons:');
            console.error('  - Owner disabled captions');
            console.error('  - Video is too new (captions not generated yet)');
            console.error('  - Video is age-restricted or private');
            console.error('');
        }

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
        console.error('Failed to extract transcript');
        process.exit(1);
    });
