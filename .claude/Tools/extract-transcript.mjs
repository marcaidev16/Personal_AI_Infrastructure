#!/usr/bin/env node

/**
 * YouTube Transcript Extractor
 * Uses yt-dlp to extract transcripts from YouTube videos
 * Falls back to manual input if yt-dlp is not available
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';

const execAsync = promisify(exec);

async function checkYtDlp() {
    try {
        await execAsync('yt-dlp --version');
        return true;
    } catch (error) {
        return false;
    }
}

async function extractTranscript(videoUrl, outputPath = './transcript.txt') {
    const hasYtDlp = await checkYtDlp();

    if (!hasYtDlp) {
        console.error('❌ yt-dlp is not installed');
        console.error('');
        console.error('Please install yt-dlp:');
        console.error('  Windows: pip install yt-dlp');
        console.error('  Mac: brew install yt-dlp');
        console.error('  Linux: pip install yt-dlp');
        console.error('');
        console.error('Or install with npm:');
        console.error('  npm install -g yt-dlp-wrap');
        console.error('');
        process.exit(1);
    }

    console.log('🎬 Extracting transcript from YouTube...');
    console.log('📝 Video URL:', videoUrl);

    // Extract video ID
    const videoIdMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (!videoIdMatch) {
        console.error('❌ Invalid YouTube URL');
        process.exit(1);
    }
    const videoId = videoIdMatch[1];

    try {
        // Get video metadata
        console.log('📊 Fetching video metadata...');
        const { stdout: metadataJson } = await execAsync(
            `yt-dlp --dump-json --no-warnings "${videoUrl}"`,
            { maxBuffer: 10 * 1024 * 1024 }
        );
        const metadata = JSON.parse(metadataJson);

        console.log('✅ Video found:', metadata.title);
        console.log('⏱️  Duration:', Math.floor(metadata.duration / 60), 'minutes');

        // Try to get subtitles/transcript
        console.log('📥 Downloading transcript...');

        const tempDir = path.dirname(outputPath);
        const tempBase = path.join(tempDir, 'temp_transcript');

        try {
            // Try auto-generated subtitles first
            await execAsync(
                `yt-dlp --skip-download --write-auto-subs --sub-lang en --convert-subs txt -o "${tempBase}" "${videoUrl}"`,
                { maxBuffer: 10 * 1024 * 1024 }
            );
        } catch (autoSubError) {
            // Try manual subtitles
            try {
                await execAsync(
                    `yt-dlp --skip-download --write-subs --sub-lang en --convert-subs txt -o "${tempBase}" "${videoUrl}"`,
                    { maxBuffer: 10 * 1024 * 1024 }
                );
            } catch (manualSubError) {
                console.error('❌ No transcript available for this video');
                console.error('');
                console.error('This video does not have:');
                console.error('  - Auto-generated captions');
                console.error('  - Manual subtitles');
                console.error('');
                console.error('Please try a different video or provide transcript manually.');
                process.exit(1);
            }
        }

        // Find the transcript file
        const transcriptFile = fs.readdirSync(tempDir)
            .find(f => f.startsWith('temp_transcript') && f.endsWith('.txt'));

        if (!transcriptFile) {
            console.error('❌ Transcript file not found after download');
            process.exit(1);
        }

        // Read and clean transcript
        const transcriptPath = path.join(tempDir, transcriptFile);
        let transcript = fs.readFileSync(transcriptPath, 'utf8');

        // Remove timestamp lines and clean up
        transcript = transcript
            .split('\n')
            .filter(line => !line.match(/^\d{2}:\d{2}:\d{2}\.\d{3}/)) // Remove timestamps
            .filter(line => line.trim().length > 0) // Remove empty lines
            .join('\n');

        // Save cleaned transcript
        const output = {
            videoId,
            title: metadata.title,
            duration: metadata.duration,
            channel: metadata.channel,
            uploadDate: metadata.upload_date,
            url: videoUrl,
            transcript: transcript
        };

        fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

        // Clean up temp file
        fs.unlinkSync(transcriptPath);

        console.log('✅ Transcript saved to:', outputPath);
        console.log('📝 Word count:', transcript.split(/\s+/).length);
        console.log('✨ Done!');

        return output;

    } catch (error) {
        console.error('❌ Error extracting transcript:', error.message);
        throw error;
    }
}

// CLI usage
const videoUrl = process.argv[2];
const outputPath = process.argv[3] || './transcript.json';

if (!videoUrl) {
    console.error('Usage: node extract-transcript.mjs <youtube-url> [output-path]');
    console.error('Example: node extract-transcript.mjs "https://youtube.com/watch?v=VIDEO_ID" transcript.json');
    process.exit(1);
}

extractTranscript(videoUrl, outputPath)
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('Failed:', err);
        process.exit(1);
    });
