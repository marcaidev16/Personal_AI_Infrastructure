#!/usr/bin/env node

import { GoogleGenAI } from '@google/genai';
import * as fs from 'node:fs';

async function generateImage(prompt, outputPath = 'output.png') {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error('❌ Error: GEMINI_API_KEY not set');
        process.exit(1);
    }

    console.log('🎨 Generating image with Nano Banana Pro...');
    console.log('📝 Prompt:', prompt);

    const client = new GoogleGenAI({ apiKey });

    try {
        const response = await client.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: prompt,
        });

        // Extract image data
        for (const part of response.candidates[0].content.parts) {
            if (part.text) {
                console.log('📄 Text response:', part.text);
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                const buffer = Buffer.from(imageData, 'base64');
                fs.writeFileSync(outputPath, buffer);
                console.log('✅ Image saved to:', outputPath);
                return outputPath;
            }
        }

        console.log('⚠️  No image generated. Response:', JSON.stringify(response, null, 2));
    } catch (error) {
        console.error('❌ Error generating image:', error.message);
        if (error.response) {
            console.error('Response:', JSON.stringify(error.response, null, 2));
        }
        throw error;
    }
}

// CLI usage
const prompt = process.argv[2] || 'simple stickman figure working at desk, minimal style, professional business aesthetic';
const outputPath = process.argv[3] || 'output.png';

generateImage(prompt, outputPath)
    .then(() => console.log('✨ Done!'))
    .catch(err => {
        console.error('Failed:', err);
        process.exit(1);
    });
