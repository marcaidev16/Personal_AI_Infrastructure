---
description: Transform YouTube video into 6-10 LinkedIn posts with visuals for Marc Bau
---

# Transform Video to LinkedIn Posts

## Purpose
Multi-phase process that transforms a YouTube video transcript into publication-ready LinkedIn content:
- Extracts video transcript
- Generates 6-10 LinkedIn posts (5 strategies)
- Creates visuals (infographics, carousels, mockups)
- Organizes everything in project directory
- Ready for scheduling/publishing

---

## Prerequisites Check (Phase 0)

Before starting, verify these dependencies are installed:

```bash
☐ YouTube MCP server (for transcript extraction)
☐ Nano Banana Pro / visualkit CLI (for image generation)
☐ Playwright (for carousel text overlay)
☐ Cloudinary API key (optional - for image hosting)
```

**If any missing:**
- See `Documentation/SETUP_GUIDE.md` for installation instructions
- Critical: YouTube MCP and Nano Banana Pro
- Optional: Cloudinary (can save files locally instead)

---

## Process Overview

```
┌─────────────────────────────────────────────────────────┐
│                   TRANSFORM VIDEO PROCESS                │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  PHASE 0: System Check                                   │
│    → Verify all tools installed                          │
│    → Check API keys configured                           │
│                                                           │
│  PHASE 1: Extract Content                                │
│    → Fetch YouTube transcript                            │
│    → Save to project directory                           │
│                                                           │
│  PHASE 2: Generate Posts                                 │
│    → Spawn LinkedInWriter agent                          │
│    → Agent generates 6-10 posts                          │
│    → Save posts to JSON + markdown                       │
│                                                           │
│  PHASE 3: Generate Visuals                               │
│    → Spawn VisualCreator agent (in parallel)             │
│    → Generate infographics/carousels/mockups             │
│    → Save images to project directory                    │
│                                                           │
│  PHASE 4: Review & Edit                                  │
│    → Display all generated posts                         │
│    → Allow user to request edits                         │
│    → Regenerate specific posts if needed                 │
│                                                           │
│  PHASE 5: Finalize                                       │
│    → Organize all files                                  │
│    → Generate posting calendar                           │
│    → Provide summary report                              │
│                                                           │
│  (Optional) PHASE 6: Publish                             │
│    → Schedule to Postis (if configured)                  │
│    → Or export for manual posting                        │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## Execution Steps

### PHASE 0: System Check

Run pre-flight checks:

```bash
# Check YouTube MCP
echo "Checking YouTube MCP server..."
# Verify connection to YouTube transcript extraction

# Check Nano Banana Pro
echo "Checking visualkit/Nano Banana Pro..."
which visualkit || echo "⚠️  visualkit not found"

# Check Playwright
echo "Checking Playwright..."
npx playwright --version || echo "⚠️  Playwright not found"

# Check Cloudinary (optional)
echo "Checking Cloudinary API key..."
[[ -n "$CLOUDINARY_API_KEY" ]] && echo "✅ Configured" || echo "⚠️  Not configured (will save locally)"
```

**If all pass:** Proceed to Phase 1
**If any fail:** Stop and show setup instructions

---

### PHASE 1: Extract Content

**Input required:** YouTube URL

```markdown
## Extracting video transcript...

Video URL: [user provided URL]
```

**Process:**
1. Use YouTube MCP to fetch transcript
2. Extract video title and metadata
3. Create project directory: `./content-projects/YYYY-MM-DD-[video-slug]/`
4. Save transcript to: `source-transcript.md`
5. Save metadata to: `metadata.json`

**Output:**
```
✅ Transcript extracted
✅ Project directory created: ./content-projects/2024-12-29-ai-correctness/
✅ Ready for content generation
```

---

### PHASE 2: Generate Posts

**Spawn LinkedInWriter agent:**

```markdown
## Generating LinkedIn posts...

Agent: LinkedInWriter
Task: Transform transcript into 6-10 posts using 5 strategies
References: Loading WRITING_CORE, POST_STRATEGIES, SKILL.md
```

**Agent process** (autonomous):
1. Read transcript
2. Extract 2-4 themes
3. Filter for ICP relevance
4. Map theme × strategy combinations
5. Generate posts (6-10 total)
6. Quality check each post
7. Output results

**Output files:**
- `posts.json` - Structured data (for programmatic use)
- `posts.md` - Human-readable posts (for review)
- `visual-requirements.json` - Visual generation tasks for Phase 3

**Progress indicator:**
```
Analyzing transcript... ✓
Extracting themes... ✓
Filtering for relevance... ✓
Generating posts... [1/10] [2/10] [3/10] ... ✓
Quality checking... ✓
Saving output... ✓
```

---

### PHASE 3: Generate Visuals

**Spawn VisualCreator agent** (in parallel with or after Phase 2):

```markdown
## Generating visuals...

Agent: VisualCreator
Task: Create visuals for posts requiring images
Input: visual-requirements.json from Phase 2
```

**Agent process** (autonomous):
1. Read visual requirements
2. For each required visual:
   - If "personal photo" → Skip (user uploads manually)
   - If "infographic/carousel" → Generate with Nano Banana Pro
   - If "mockup" → Generate with Nano Banana Pro
3. For carousels: Add text overlays with Playwright
4. Save images to `./visuals/` directory
5. (Optional) Upload to Cloudinary
6. Return file paths/URLs

**Output files:**
- `./visuals/post-1-personal.md` - Instruction for user to upload photo
- `./visuals/post-2-framework.png` - Generated infographic
- `./visuals/post-5-leadmagnet.png` - Generated mockup
- `./visuals/post-8-results.png` - Generated numbers visual

**Progress indicator:**
```
Parsing visual requirements... ✓
Generating infographic (Post 2)... ✓
Generating mockup (Post 5)... ✓
Generating results visual (Post 8)... ✓
Uploading to Cloudinary... ✓ (optional)
Saving file paths... ✓
```

---

### PHASE 4: Review & Edit

**Display generated content:**

```markdown
## Generated Content - Ready for Review

Total posts: 10
Posts with visuals: 6
Posts needing personal photos: 2

---

### POST 1/10
**Theme:** Defining "correct" before building
**Strategy:** Historia Personal
**Visual:** 📸 Foto personal requerida (subir manualmente)

[Full post text displayed]

---

### POST 2/10
**Theme:** Defining "correct" before building
**Strategy:** Educativo/Framework
**Visual:** ✅ Generated → ./visuals/post-2-framework.png

[Full post text displayed]

---

[... continue for all posts ...]
```

**Allow edits:**

User can request:
- "Regenerate post 3 with different hook"
- "Make post 7 shorter"
- "Change post 5 strategy to Contrarian"
- "Regenerate visual for post 2"

**Process edits:**
- Re-run LinkedInWriter for specific posts
- Re-run VisualCreator for specific visuals
- Update files accordingly

---

### PHASE 5: Finalize

**Organize project directory:**

```
content-projects/2024-12-29-ai-correctness/
├── metadata.json
├── source-transcript.md
├── posts.json
├── posts.md
├── visual-requirements.json
├── calendar.md
├── summary-report.md
└── visuals/
    ├── post-1-personal.md (instruction)
    ├── post-2-framework.png
    ├── post-5-leadmagnet.png
    └── post-8-results.png
```

**Generate posting calendar:**

```markdown
# Posting Calendar - [Video Title]

## Week 1 (Jan 1-7, 2025)
- **Mon, Jan 1**: Post 1 (Historia Personal) - Upload personal photo
- **Wed, Jan 3**: Post 3 (Contrarian) - No visual
- **Fri, Jan 5**: Post 6 (Lead Magnet) - Use mockup

## Week 2 (Jan 8-14, 2025)
- **Mon, Jan 8**: Post 2 (Framework) - Use infographic
- **Wed, Jan 10**: Post 5 (Caso/Resultado) - Use numbers visual
- **Fri, Jan 12**: Post 9 (Historia Personal) - Upload personal photo

## Week 3 (Jan 15-21, 2025)
- **Mon, Jan 15**: Post 4 (Educativo) - Use diagram
- **Wed, Jan 17**: Post 7 (Contrarian) - No visual
- **Fri, Jan 19**: Post 10 (Lead Magnet) - Use mockup

## Week 4 (Jan 22-28, 2025)
- **Mon, Jan 22**: Post 8 (Caso/Resultado) - Use results visual
```

**Generate summary report:**

```markdown
# Summary Report

## Video Processed
- Title: [video title]
- URL: [youtube URL]
- Duration: [duration]
- Transcript length: [word count]

## Content Generated
- Posts: 10
- Themes extracted: 3
- Strategies used:
  - Historia Personal: 2 posts
  - Educativo/Framework: 3 posts
  - Contrarian: 2 posts
  - Caso/Resultado: 2 posts
  - Lead Magnet: 1 post

## Visuals Generated
- Infographics: 3
- Mockups: 1
- Numbers visuals: 2
- Personal photos needed: 2

## Next Steps
1. Review all posts in `posts.md`
2. Upload personal photos for Posts 1, 6
3. Schedule posts using `calendar.md` as guide
4. (Optional) Use /publish command to schedule to Postis

## Files
All content saved to: ./content-projects/2024-12-29-ai-correctness/
```

---

### PHASE 6: Publish (Optional)

**If Postis is configured:**

```markdown
Would you like to schedule these posts to Postis now?

- All posts will be scheduled according to calendar.md
- Visuals will be uploaded automatically
- You can review/edit in Postis dashboard after scheduling

[Yes / No / Let me review first]
```

**If Yes:**
- Upload all generated images to Postis
- Schedule posts according to calendar
- Return Postis URLs for each scheduled post

**If No or not configured:**
- Provide export instructions
- Show how to manually post each piece

---

## Usage

```bash
# Basic usage
/transform-video https://youtube.com/watch?v=VIDEO_ID

# With options (future enhancement)
/transform-video https://youtube.com/watch?v=VIDEO_ID --posts 8 --no-publish
```

---

## Error Handling

**If YouTube transcript fails:**
```
❌ Could not extract transcript from video
Possible reasons:
- Video has no captions/transcript
- URL is incorrect
- YouTube MCP server not configured

Solutions:
- Check video has auto-generated or manual captions
- Verify URL format
- See Documentation/SETUP_GUIDE.md for MCP setup
```

**If visual generation fails:**
```
⚠️  Visual generation failed for Post 2
Reason: [error message]

Options:
- Continue without visual (post as text-only)
- Retry generation
- Skip this post
```

**If agent errors:**
```
❌ LinkedInWriter agent encountered an error
Error: [details]

This usually means:
- Writing references not loaded correctly
- Transcript format unexpected
- Agent configuration issue

Try:
- Verify .claude/Skills/Writing/ files exist
- Check .claude/Agents/LinkedInWriter.md
- Rerun command
```

---

## What This Command Does NOT Do

- ❌ Does not automatically publish (requires user approval)
- ❌ Does not edit videos or create video content
- ❌ Does not generate captions for videos without transcripts
- ❌ Does not translate content (Spanish only)
- ❌ Does not generate personal photos (user must upload)

---

## Example Output

After running `/transform-video https://youtube.com/watch?v=ABC123`:

```
🎬 Transform Video to LinkedIn Posts
=====================================

✅ Phase 0: System Check - All dependencies verified
✅ Phase 1: Content Extraction - Transcript saved (2,847 words)
✅ Phase 2: Post Generation - 10 posts created
✅ Phase 3: Visual Generation - 6 visuals created
✅ Phase 4: Review - Ready for your review
✅ Phase 5: Finalized - All files organized

📁 Project: ./content-projects/2024-12-29-ai-correctness/

📊 Summary:
- Posts generated: 10
- Visuals created: 6
- Personal photos needed: 2
- Estimated posting calendar: 4 weeks

📋 Next Steps:
1. Review posts: cat content-projects/2024-12-29-ai-correctness/posts.md
2. Upload personal photos for Posts 1, 6
3. Schedule posts (see calendar.md)

🚀 Optional:
- Run /publish to schedule to Postis
- Run /edit-post [number] to modify specific posts
```

---

## Related Commands

- `/edit-post [number]` - Edit a specific generated post
- `/regenerate-visual [number]` - Regenerate visual for a post
- `/publish` - Schedule posts to Postis
- `/export` - Export posts for manual posting

---

## Notes

- First time running may take 5-10 minutes (agent setup)
- Subsequent runs are faster (~2-3 minutes)
- Review all posts before publishing
- Visuals can be regenerated without regenerating posts
- All files are saved locally (safe to iterate)

---

*Command for Marc Bau's LinkedIn content automation*
*Last updated: December 2024*
