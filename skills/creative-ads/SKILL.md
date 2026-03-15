---
name: "creative-ads"
description: "Generation of advertising creatives (static, video, animation) with ready-made AI prompts for Midjourney/DALL-E/Nano Banana Pro/Higgsfield/Runway for all platforms. Works in conjunction with Client DNA. Use when the user mentions: creatives, ad banners, prompts for ads, video ads, reels, stories for ads, creative ads, ad creatives, ad layouts, ad generation, prompts for Midjourney, ad prompts."
---

# Advertising Creative Generator

A skill for creating ready-to-use advertising creatives (static, video, animation) with AI prompts and full ad units for all platforms.

Based on three methodologies:
- **Client DNA** (Vlad Yasko) — deep target audience analysis, micro-segmentation
- **Ben Hunt's Ladder** — 5 awareness levels → different creatives at each
- **Alex Hormozi ($100M Offers)** — value equation, Grand Slam Offer, scarcity

## System Role

Read and fully adopt the role described in [role.md](role.md) before starting generation.

## Workflow Algorithm (8 Steps)

### Step 1: Data Collection + Auto-Invocation of Client DNA

Check whether Client DNA data (segments, pains, micro-DNA, offers) is present in the current context.

**If DNA data IS in the context:**
- Briefly summarize the found segments and pains
- Confirm with the user: "I see Client DNA data. Shall we use it for creative generation?"
- After confirmation — proceed to Step 2

**If DNA data is NOT present:**
1. Search project files (files containing "DNA", "audience", "segments")
2. If not found — suggest to the user:
   - "To generate creatives, we need target audience data. Let's first run a Client DNA analysis."
   - Read and execute the full process from [../client-dna/SKILL.md](../client-dna/SKILL.md)
   - After DNA is complete — automatically continue with Step 2
3. Or the user can provide a brief manually (audience description, pains, client language)

**Step result:** List of segments x pains with micro-DNA and offers

### Step 2: Determine Awareness Level (Ben Hunt's Ladder)

Read [awareness-ladder.md](awareness-ladder.md) and determine the level for each segment.

Ask the user:
- "What type of traffic are you planning: cold (new audience), warm (subscribers), or hot (already knows the product)?"
- "Do you need creatives for all levels or a specific one?"

Assign each segment a level (0-5):
- **Levels 0-1 (cold):** Awakening, pain-agitate, FOMO
- **Levels 2-3 (warm):** Education, myth-busting, transformation
- **Levels 4-5 (hot):** Social proof, guarantee, urgency, offer

**Result:** Matrix of "segment x pain x level"

### Step 3: Creative Strategy + Angles

Read [creative-strategy.md](creative-strategy.md) and [hormozi-offer.md](hormozi-offer.md).

For each "segment x pain x level" combination:
1. Determine 3-5 creative angles (depend on the level)
2. For each angle, extract from micro-DNA: portrait, monologue, fears, myths, transformation, trigger
3. Apply the Hormozi Value Equation to the text portion

Show the user the angle matrix for confirmation:

```
| # | Segment | Pain | Level | Angle | Description |
|---|---------|------|---------|------|----------|
| 1 | ...     | ...  | COLD    | Pain-agitate | ... |
| 2 | ...     | ...  | COLD    | FOMO | ... |
| ... |
```

**DO NOT** proceed without confirmation.

### Step 4: Static Creative Generation

Read [static-creatives.md](static-creatives.md) and [prompt-engineering.md](prompt-engineering.md).

For each confirmed angle, generate **3 A/B variations**:
- **Variation A** — baseline variant
- **Variation B** — different headline (testing hook)
- **Variation C** — different visual (testing image)

Each variation includes:
1. AI prompt (Midjourney + DALL-E + Nano Banana Pro) — ready to copy-paste
2. Headline text (M-A-G-I-C formula or from DNA inner monologue)
3. Subheadline text
4. CTA (matches the awareness level)
5. Visual composition + color palette

Indicate: "Testing: [hook/image/CTA]"

Deliver one segment at a time. Ask for confirmation.

### Step 5: Video/Animation Generation

**For webinar/live show creatives (Reels, TikTok, Stories):**
Read [webinar-video-reels.md](webinar-video-reels.md) — a specialized workflow with 12 hook types, 4 CTA categories, FOMO system through tool ignorance, "Reel + text description" format (Dymshakov style), and a generation matrix based on Client DNA.

**For other video creatives:**
Read [video-creatives.md](video-creatives.md).

For each angle:
1. Frame-by-frame script with timing (15-60 sec)
2. Hook — 3 variants of the first 3 seconds (for A/B)
3. AI video prompt (Runway/Sora + Higgsfield) — for each scene
4. Text overlays (subtitles, CTA)
5. Music/mood description

The video framework depends on the level (see [video-creatives.md](video-creatives.md)).

### Step 6: Full Ad Units

Read [ad-unit-templates.md](ad-unit-templates.md).

For each creative, assemble a full ad unit:
- **Primary text** (3 lengths: short/medium/long)
- **Headline** (M-A-G-I-C formula)
- **Description**
- **CTA Button**
- Everything adapted for the specific platform

Full ad unit = prompt + text on image + ad copy = **ready to upload to Ads Manager**.

### Step 7: Retargeting Sequences

Read [retargeting-sequences.md](retargeting-sequences.md).

For each segment x pain, create 3 retargeting stages:
- **RT-1** (viewed, didn't click): different angle, +1 Hunt level
- **RT-2** (clicked, didn't convert): social proof + Hormozi guarantee
- **RT-3** (visited landing page): Grand Slam Offer + scarcity

Each stage = a separate set of creatives (static + video) + full ad unit.

### Step 8: Platform Adaptation + Final Matrix

Read [platform-specs.md](platform-specs.md).

Adapt all prompts to the dimensions of each platform (correct `--ar` parameters).

Deliver the final matrix of all creatives:

```
═══════════════════════════════════════════
CODE LEGEND:
  S = Segment (S1, S2, S3...)
  B = Pain (B1, B2, B3...)
  COLD = Cold traffic | WARM = Warm | HOT = Hot
  RT-1/RT-2/RT-3 = Retargeting stages 1-3
  A/B/C = A/B testing variation
═══════════════════════════════════════════

| Code | Stage | Angle | Format | Platform |
|-----|------|------|--------|-----------|
| S1-B1-COLD-A | Cold | Pain-agitate | Static 1:1 | Meta Feed |
| S1-B1-COLD-B | Cold | Pain-agitate | Static 1:1 | Meta Feed |
| S1-B1-RT1-A | RT-1 | Myth-bust | Static 9:16 | Stories |
| ... |
```

Suggest:
- Deep-diving into any creative
- Refining the copy
- Adding platforms
- Creating additional A/B variations

## Output Format for Each Creative

```
━━━ [CODE] | [Format] | [Platform] [Aspect Ratio] ━━━
Segment: [name]
Pain: [name]
Stage: [COLD/WARM/HOT/RT-1/RT-2/RT-3]
Angle: [angle name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AI PROMPT (Midjourney):
[full prompt with --ar --v --style --no]

AI PROMPT (DALL-E):
[adapted prompt]

AI PROMPT (Nano Banana Pro):
[adapted prompt]

TEXT ON IMAGE:
Headline: [text]
Subheadline: [text]
CTA: [text]

FULL AD UNIT (Meta):
Primary text (short): [text]
Primary text (medium): [text]
Headline: [text]
Description: [text]
CTA Button: [button type]

A/B TEST: Variation [A/B/C] — Testing: [what exactly]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Behavioral Rules

- **Conversational style** — guide the user through the process, don't dump everything at once
- **In portions** — deliver one segment at a time, ask for confirmation
- **Maximum detail** — NEVER abbreviate prompts. Every prompt is complete, self-contained, ready to copy-paste
- **Segment language** — all texts strictly in the language of the specific segment from DNA
- **Hormozi in every text** — the value equation is embedded in every headline and description
- **Correct dimensions** — every prompt includes the correct aspect ratio for the platform

## Examples

### Example 1: Starting from Scratch

Request: "Create creatives for my course"

Actions:
1. No DNA data → suggest running DNA analysis
2. Read [../client-dna/SKILL.md](../client-dna/SKILL.md) and execute full DNA
3. After DNA → ask about traffic type → determine level
4. Generate angles → confirm → generate creatives

### Example 2: Starting After DNA

Request: "Now create the creatives" (after completing DNA in the same session)

Actions:
1. DNA data is in context → summarize, confirm
2. Ask about traffic type → determine level
3. Generate angles → confirm
4. Generate static → video → ad units → retargeting → adaptation

### Example 3: With a Ready Brief

Request: "Create creatives. Target audience — women 30-45, problem — anxiety, product — online support club"

Actions:
1. Accept the brief as input (without full DNA)
2. Clarify details: client language, pains, triggers, myths
3. Determine level → angles → generate
