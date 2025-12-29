# Setup Guide - Marc's LinkedIn Content System

## Overview

This guide will help you set up the complete LinkedIn content generation system. You'll install:

1. **YouTube MCP Server** - Extract video transcripts
2. **Nano Banana Pro** - Generate stickman-style visuals
3. **Playwright** - Create carousel text overlays
4. **Cloudinary** (Optional) - Host images for scheduling
5. **Postis** (Optional) - Schedule posts to social media

**Total setup time:** ~30 minutes

---

## Prerequisites

Before starting, ensure you have:

```bash
☐ Node.js 18+ installed
☐ Python 3.8+ installed (for visualkit)
☐ Git installed
☐ Claude Code installed and configured
☐ Text editor (VS Code recommended)
```

**Check versions:**
```bash
node --version  # Should be v18 or higher
python --version  # Should be 3.8 or higher
git --version
```

---

## Part 1: YouTube MCP Server

The YouTube MCP allows Claude Code to extract transcripts from YouTube videos.

### Installation

```bash
# Install YouTube MCP server globally
npm install -g @modelcontextprotocol/server-youtube
```

### Configuration

Add to your Claude Code MCP config (`~/.claude/mcp.json`):

```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-youtube"]
    }
  }
}
```

### Verify Installation

```bash
# Test that the server starts
npx @modelcontextprotocol/server-youtube
# Should start without errors (Ctrl+C to stop)
```

**In Claude Code:**
```
Ask Claude: "Can you fetch the transcript from https://youtube.com/watch?v=dQw4w9WgXcQ"

If working, Claude will extract and show the transcript.
```

---

## Part 2: Nano Banana Pro (Visual Generation)

Nano Banana Pro generates images in the stickman aesthetic style.

### Option A: Via visualkit CLI (Recommended)

```bash
# Install visualkit globally
npm install -g visualkit

# Configure with your Gemini API key
visualkit config set GEMINI_API_KEY "your-gemini-api-key"
```

**Get Gemini API Key:**
1. Go to https://ai.google.dev/
2. Sign in with Google account
3. Click "Get API Key"
4. Copy key and paste above

### Option B: Direct Nano Banana Pro API

```bash
# Set environment variable
export NANO_BANANA_API_KEY="your-nano-banana-key"
```

**Get API Key:**
1. Go to https://nanobanana.pro/
2. Sign up / Sign in
3. Navigate to API section
4. Generate API key

### Verify Installation

```bash
# Test visualkit (if using Option A)
visualkit generate "simple stickman figure in office environment"

# Should generate and save an image
# Check current directory for output.png
```

---

## Part 3: Playwright (Carousel Creation)

Playwright is used to add text overlays to carousel images.

### Installation

```bash
# Install Playwright
npm install -D @playwright/test

# Install browser binaries
npx playwright install
```

### Verify Installation

```bash
# Check version
npx playwright --version
# Should show version number (e.g., Version 1.40.0)
```

---

## Part 4: Cloudinary (Optional - Image Hosting)

Cloudinary hosts generated images to get URLs for social media scheduling.

**Note:** This is optional. You can save images locally and upload manually.

### Setup

1. **Create account:**
   - Go to https://cloudinary.com/
   - Sign up (free tier is sufficient)

2. **Get credentials:**
   - Dashboard → Settings → Access Keys
   - Copy: Cloud Name, API Key, API Secret

3. **Configure environment:**

```bash
# Add to ~/.bashrc or ~/.zshrc
export CLOUDINARY_CLOUD_NAME="your-cloud-name"
export CLOUDINARY_API_KEY="your-api-key"
export CLOUDINARY_API_SECRET="your-api-secret"

# Reload shell
source ~/.bashrc  # or source ~/.zshrc
```

### Verify Setup

```bash
# Test credentials are set
echo $CLOUDINARY_CLOUD_NAME
# Should output your cloud name
```

---

## Part 5: Postis (Optional - Publishing)

Postis schedules and publishes posts to LinkedIn, Twitter, Instagram, etc.

**Note:** This is optional. You can export posts and publish manually.

### Setup Options

**Option A: Cloud Version (Recommended)**
1. Go to https://postiz.com/
2. Sign up for account
3. Connect social media accounts
4. Get API key from settings

**Option B: Self-Hosted (Free)**
```bash
# Clone and run locally
git clone https://github.com/gitroomhq/postiz-app.git
cd postiz-app
docker-compose up -d
```

### Configuration

```bash
# Add to environment
export POSTIS_API_KEY="your-postis-api-key"
export POSTIS_BASE_URL="https://app.postiz.com"  # or http://localhost:3000 if self-hosted
```

### Connect Social Accounts

1. Log into Postis dashboard
2. Go to Settings → Integrations
3. Connect:
   - ✅ LinkedIn (personal profile or company page)
   - ✅ Twitter/X (optional)
   - ✅ Instagram (optional)

---

## Part 6: Verify Complete Setup

Run this checklist in Claude Code:

```bash
# In Claude Code, ask:

"Can you verify my LinkedIn content system setup?

1. Test YouTube transcript extraction
2. Test image generation with visualkit
3. Check Playwright installation
4. Verify Cloudinary credentials (if configured)
5. Check Postis connection (if configured)"
```

Claude will run through each check and report status.

---

## Recommended Directory Structure

```
~/Personal_AI_Infrastructure/
├── .claude/
│   ├── Agents/
│   │   ├── LinkedInWriter.md
│   │   └── VisualCreator.md
│   ├── Commands/
│   │   └── transform-video.md
│   └── Skills/
│       ├── LinkedIn/
│       │   ├── SKILL.md
│       │   └── QUICK_REFERENCE.md
│       └── Writing/
│           ├── WRITING_CORE.md
│           └── POST_STRATEGIES.md
├── Documentation/
│   ├── 01_SYSTEM_CONTEXT.md
│   ├── 02_VENTAS_B2B_PLAYBOOK.md
│   ├── 03_LINKEDIN_STRATEGY.md
│   ├── 04_NEGOCIACION_TACTICAS.md
│   ├── 05_SCRIPTS_TEMPLATES.md
│   ├── 06_AI_STRATEGY_FRAMEWORK.md
│   ├── 07_LINKEDIN_PROFILE_OPTIMIZATION.md
│   └── SETUP_GUIDE.md (this file)
└── content-projects/
    └── [generated by /transform-video]
```

---

## Environment Variables Summary

Add these to your `~/.bashrc` or `~/.zshrc`:

```bash
# Nano Banana Pro / visualkit
export GEMINI_API_KEY="your-gemini-api-key"
# OR
export NANO_BANANA_API_KEY="your-nano-banana-key"

# Cloudinary (optional)
export CLOUDINARY_CLOUD_NAME="your-cloud-name"
export CLOUDINARY_API_KEY="your-api-key"
export CLOUDINARY_API_SECRET="your-api-secret"

# Postis (optional)
export POSTIS_API_KEY="your-postis-api-key"
export POSTIS_BASE_URL="https://app.postiz.com"
```

**After adding, reload:**
```bash
source ~/.bashrc  # or source ~/.zshrc
```

---

## Troubleshooting

### YouTube Transcript Fails

**Error:** "Could not extract transcript"

**Solutions:**
1. Check video has captions/transcript available
2. Verify MCP config in `~/.claude/mcp.json`
3. Test MCP server: `npx @modelcontextprotocol/server-youtube`
4. Restart Claude Code

### Visual Generation Fails

**Error:** "visualkit command not found"

**Solutions:**
1. Reinstall: `npm install -g visualkit`
2. Check PATH includes npm global bin: `npm config get prefix`
3. Try direct path: `$(npm config get prefix)/bin/visualkit generate "test"`

**Error:** "Invalid API key"

**Solutions:**
1. Verify key: `echo $GEMINI_API_KEY`
2. Reconfigure: `visualkit config set GEMINI_API_KEY "new-key"`
3. Check key is active at https://ai.google.dev/

### Playwright Issues

**Error:** "Browser not found"

**Solutions:**
1. Install browsers: `npx playwright install`
2. Install system dependencies: `npx playwright install-deps`
3. Verify: `npx playwright --version`

### Cloudinary Upload Fails

**Error:** "Invalid credentials"

**Solutions:**
1. Verify env vars set: `echo $CLOUDINARY_API_KEY`
2. Check credentials match dashboard
3. Test with direct upload: `curl -X POST ...` (see Cloudinary docs)

---

## Testing Your Setup

Once everything is installed, test the full pipeline:

```bash
# In Claude Code:
/transform-video https://youtube.com/watch?v=SHORT_TEST_VIDEO

# This will:
# 1. Extract transcript (tests YouTube MCP)
# 2. Generate posts (tests LinkedInWriter agent)
# 3. Generate visuals (tests Nano Banana Pro + Playwright)
# 4. Organize files

# If successful, you'll see:
# ✅ All phases complete
# 📁 Files in content-projects/YYYY-MM-DD-video-title/
```

---

## Getting Help

**If setup fails:**

1. **Check logs:**
   - Claude Code logs: `~/.claude/logs/`
   - MCP errors: Usually shown in Claude Code terminal

2. **Common issues:**
   - API keys not set → Verify environment variables
   - Command not found → Check PATH, reinstall tools
   - Permission denied → Use `sudo` or fix npm permissions

3. **Resources:**
   - YouTube MCP: https://github.com/modelcontextprotocol/servers
   - Nano Banana Pro: https://nanobanana.pro/docs
   - Playwright: https://playwright.dev/docs/intro
   - Cloudinary: https://cloudinary.com/documentation
   - Postis: https://postiz.com/docs

---

## Next Steps

After setup is complete:

1. ✅ Run test: `/transform-video [short-youtube-url]`
2. ✅ Review generated content
3. ✅ Upload a personal photo to test manual uploads
4. ✅ Read through generated posts
5. ✅ Make edits if needed
6. ✅ Schedule your first batch of posts!

**You're ready to transform videos into LinkedIn content! 🚀**

---

*Setup guide for Marc Bau's LinkedIn Content System*
*Last updated: December 2024*
