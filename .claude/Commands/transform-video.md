---
description: Transform YouTube video into 6-10 LinkedIn posts with visuals for Marc Bau
---

# Transform Video to LinkedIn Posts

**IMPORTANT:** This command orchestrates the entire content generation process. It will:
1. Extract YouTube transcript using yt-dlp
2. Call LinkedInWriter agent to generate posts
3. Call VisualCreator agent to generate images
4. Organize everything in a project folder

---

## Quick Start

```
/transform-video https://youtube.com/watch?v=VIDEO_ID
```

---

## Prerequisites

Before running this command, ensure you have:

✅ **yt-dlp installed** (for transcript extraction)
```bash
# Windows:
pip install yt-dlp

# Mac:
brew install yt-dlp

# Linux:
pip install yt-dlp
```

✅ **GEMINI_API_KEY configured** (for image generation)
```bash
# Add to your environment:
export GEMINI_API_KEY="your-key-here"
```

✅ **Node.js packages installed**
```bash
npm install
```

---

## How It Works

### PHASE 0: System Check

Verify dependencies:
- yt-dlp for transcript extraction
- Node.js scripts for image generation
- GEMINI_API_KEY for visuals

### PHASE 1: Extract Transcript

Use the extract-transcript script:
```bash
node .claude/Tools/extract-transcript.mjs "VIDEO_URL" transcript.json
```

This will:
- Download video transcript/subtitles
- Extract metadata (title, duration, channel)
- Save to JSON file with cleaned transcript text

### PHASE 2: Generate Posts

Spawn the **LinkedInWriter** agent with instructions:

```markdown
You are the LinkedInWriter agent. Generate 6-10 LinkedIn posts from this transcript.

TRANSCRIPT:
[transcript text here]

REQUIREMENTS:
1. Extract 2-4 themes relevant to Marc's ICP (mid-market B2B executives)
2. Generate posts using the 5 strategies (Historia, Educativo, Contrarian, Caso, Lead Magnet)
3. Follow WRITING_CORE.md principles
4. Each post must pass the quality checklist
5. Output as structured JSON

REFERENCES:
- Load .claude/Skills/Writing/WRITING_CORE.md
- Load .claude/Skills/Writing/POST_STRATEGIES.md
- Load .claude/Skills/LinkedIn/SKILL.md

OUTPUT FORMAT:
{
  "video_title": "...",
  "themes": ["theme1", "theme2", ...],
  "posts": [
    {
      "number": 1,
      "theme": "...",
      "strategy": "Historia Personal | Educativo | Contrarian | Caso | Lead Magnet",
      "hook": "First 2 lines...",
      "body": "Full post text...",
      "visual_instruction": "Description of visual needed",
      "cta": "Call to action",
      "word_count": 200
    },
    ...
  ]
}
```

### PHASE 3: Generate Visuals

For each post requiring a visual, use the generate-image script:

```bash
node .claude/Tools/generate-image.mjs "prompt" output.png
```

Visual types by strategy:
- **Historia Personal**: Note to upload personal photo (don't generate)
- **Educativo**: Generate infographic with stickman style
- **Contrarian**: Usually no visual needed
- **Caso/Resultado**: Generate numbers visualization
- **Lead Magnet**: Generate mockup of resource

### PHASE 4: Organize Project

Create project structure:
```
content-projects/YYYY-MM-DD-video-title/
├── metadata.json          # Video metadata
├── transcript.txt         # Raw transcript
├── posts.json            # Structured posts data
├── posts.md              # Human-readable posts
├── calendar.md           # 4-week posting schedule
├── summary.md            # Project summary
└── visuals/              # Generated images
    ├── post-2-framework.png
    ├── post-5-leadmagnet.png
    └── ...
```

### PHASE 5: Present Results

Show user:
1. All generated posts (posts.md)
2. Visual requirements and what was generated
3. Posting calendar suggestion
4. Summary of themes and strategies used

---

## Step-by-Step Execution

When user runs `/transform-video URL`, you should:

**1. Check dependencies**
```bash
# Check yt-dlp
yt-dlp --version || echo "❌ Please install: pip install yt-dlp"

# Check GEMINI_API_KEY
if [ -z "$GEMINI_API_KEY" ]; then
    echo "❌ GEMINI_API_KEY not set"
    echo "Set it with: export GEMINI_API_KEY='your-key'"
fi

# Check node packages
[ -d "node_modules" ] || echo "⚠️ Run: npm install"
```

**2. Create project directory**
```bash
# Extract video ID and date
VIDEO_ID="extracted-from-url"
DATE=$(date +%Y-%m-%d)
PROJECT_NAME="content-projects/${DATE}-${VIDEO_TITLE_SLUG}"

mkdir -p "${PROJECT_NAME}/visuals"
```

**3. Extract transcript**
```bash
node .claude/Tools/extract-transcript.mjs "${VIDEO_URL}" "${PROJECT_NAME}/transcript.json"
```

**4. Generate posts (spawn LinkedInWriter agent)**

Read the transcript JSON and pass it to the LinkedInWriter agent. The agent will:
- Load writing references
- Analyze transcript
- Extract themes
- Generate 6-10 posts
- Output structured JSON

**5. Generate visuals**

For each post that needs a visual:
```bash
# Example for Framework post:
node .claude/Tools/generate-image.mjs \
  "Minimalist stickman infographic showing 3 steps for AI implementation..." \
  "${PROJECT_NAME}/visuals/post-2-framework.png"
```

**6. Create calendar**

Generate a 4-week posting schedule distributing the posts strategically.

**7. Show results**

Display to user:
```markdown
✅ Content Generated Successfully!

📁 Project: content-projects/2024-12-29-video-title/

📊 Summary:
- Video: "Video Title Here"
- Themes: 3
- Posts: 10
- Visuals: 6 generated, 2 personal photos needed

📝 Posts:
[Show all posts in readable format]

📅 Calendar:
[Show 4-week schedule]

🎨 Visuals Generated:
- post-2-framework.png
- post-5-leadmagnet.png
- ...

📸 Personal Photos Needed:
- Post 1: Upload photo of you working
- Post 6: Upload selfie at office

Next Steps:
1. Review posts in: posts.md
2. Upload personal photos
3. Schedule posts following calendar.md
```

---

## Error Handling

**If yt-dlp not installed:**
```
❌ yt-dlp not found

Install it:
  Windows: pip install yt-dlp
  Mac: brew install yt-dlp
  Linux: pip install yt-dlp

Then re-run the command.
```

**If no transcript available:**
```
❌ This video has no transcript/subtitles

Options:
1. Try a different video with captions
2. Manually paste transcript and I'll generate posts
```

**If GEMINI_API_KEY missing:**
```
❌ GEMINI_API_KEY not configured

Get your key:
1. Go to: https://aistudio.google.com/apikey
2. Create API key
3. Set it: export GEMINI_API_KEY="your-key"

Then re-run the command.
```

**If image generation fails:**
```
⚠️ Visual generation failed for Post X

Options:
1. Continue without visual (text-only post)
2. Retry generation
3. Generate manually later
```

---

## Example Output Structure

After running `/transform-video https://youtube.com/watch?v=ABC123`:

```
content-projects/
└── 2024-12-29-implementing-ai-correctly/
    ├── transcript.json         # Video data + transcript
    ├── posts.json             # Structured posts
    ├── posts.md               # Readable format
    ├── calendar.md            # Posting schedule
    ├── summary.md             # Overview
    └── visuals/
        ├── post-2-framework.png
        ├── post-4-numbers.png
        ├── post-5-mockup.png
        └── post-1-personal.md  # Instruction to upload
```

---

## Performance Tips

- First run: ~5-10 minutes (includes transcript extraction + generation)
- Subsequent posts from same video: ~2-3 minutes (transcript cached)
- Most time is spent in:
  - Transcript extraction: 1-2 min
  - Post generation (AI): 2-3 min
  - Visual generation: 1-2 min per visual

---

## Customization

You can adjust the generation by editing:
- `.claude/Skills/Writing/WRITING_CORE.md` - Writing style
- `.claude/Skills/Writing/POST_STRATEGIES.md` - Post formats
- `.claude/Agents/LinkedInWriter.md` - Generation logic
- `.claude/Agents/VisualCreator.md` - Visual style

---

*Command for Marc Bau's LinkedIn Content System*
*Last updated: December 2024*
