# Full Ad Unit Templates

This file contains ready-made ad unit structures for each platform. Each ad unit = visual prompt + all text elements — ready to upload to Ads Manager.

## Coding System

Each ad unit receives a code: `S[segment]-B[pain]-[STAGE]-[VARIATION]`

| Element | Meaning |
|---------|----------|
| S1, S2... | Segment number from DNA |
| B1, B2, B3 | Pain number (1-3 per segment) |
| COLD | Cold traffic (levels 0-1) |
| WARM | Warm traffic (levels 2-3) |
| HOT | Hot traffic (levels 4-5) |
| RT-1, RT-2, RT-3 | Retargeting stage |
| A, B, C | A/B variation |

**Example:** `S1-B2-COLD-A` = Segment 1, Pain 2, Cold traffic, Baseline variation

---

## Meta Ads (Facebook / Instagram)

### Feed (Desktop + Mobile)

```
═══════════════════════════════════════════════════
CODE: [S1-B1-COLD-A]
PLATFORM: Meta Feed
ANGLE: [Pain-agitate / Transformation / Myth-busting / Social proof / Trigger]
HUNT LEVEL: [0-5]
═══════════════════════════════════════════════════

CREATIVE (visual):
Format: 1:1 (1080×1080) for universal + 4:5 (1080×1350) for mobile feed
AI Prompt: [Full prompt for Midjourney/DALL-E/Nano Banana Pro]
Text on Visual: "[Headline on image, if applicable]"
Text Style: [Font, size, placement]

PRIMARY TEXT (3 length variants):

Short (< 125 characters, for mobile):
[Short text — 1-2 sentences. Pain + hint at solution]

Medium (125-250 characters, for desktop):
[Medium text — pain + solution + social proof/number]

Long (250-500 characters, for high intent):
[Long text — story + pain + solution + proof + CTA in text]

HEADLINE (< 40 characters):
[M-A-G-I-C formula or Value Equation from Hormozi]

DESCRIPTION (< 30 characters):
[Complement to headline — reinforcement or clarification]

CTA BUTTON: [Learn More / Sign Up / Get Offer / Book Now / Download / Contact Us]
LINK: [Landing page URL]

═══════════════════════════════════════════════════
```

### Stories / Reels

```
═══════════════════════════════════════════════════
CODE: [S1-B1-COLD-A]
PLATFORM: Meta Stories/Reels
═══════════════════════════════════════════════════

CREATIVE (video):
Format: 9:16 (1080×1920)
Duration: 15 sec (Stories) / 15-30 sec (Reels)
Script: [Reference to video script from video-creatives.md]
AI Prompt: [Prompt for Runway/Sora/Higgsfield]

TEXT OVERLAYS:
0-3 sec: "[Hook text — large, centered]"
3-8 sec: "[Problem/story — subtitles at bottom]"
8-13 sec: "[Solution — centered]"
13-15 sec: "[CTA — large + swipe up arrow]"

PRIMARY TEXT (< 125 characters):
[Short text for Stories]

HEADLINE: [For Reels]
CTA BUTTON: [Swipe Up / Learn More]
═══════════════════════════════════════════════════
```

### Carousel

```
═══════════════════════════════════════════════════
CODE: [S1-B1-WARM-A]
PLATFORM: Meta Carousel
═══════════════════════════════════════════════════

SLIDE 1 (Hook):
Visual: [AI prompt] — 1:1
Slide Text: "[Hook headline]"

SLIDE 2 (Problem):
Visual: [AI prompt]
Text: "[Pain in client language from DNA]"

SLIDE 3 (Solution):
Visual: [AI prompt]
Text: "[How it works — 1 sentence]"

SLIDE 4 (Proof):
Visual: [AI prompt or testimonial screenshot]
Text: "[Number/fact/client quote]"

SLIDE 5 (CTA):
Visual: [Logo + offer]
Text: "[Grand Slam Offer briefly + CTA]"

PRIMARY TEXT: [Medium — 125-250 characters]
HEADLINE: [M-A-G-I-C]
DESCRIPTION: [< 30 characters]
CTA BUTTON: [Learn More / Sign Up]
═══════════════════════════════════════════════════
```

---

## TikTok Ads

```
═══════════════════════════════════════════════════
CODE: [S1-B1-COLD-A]
PLATFORM: TikTok In-Feed
═══════════════════════════════════════════════════

CREATIVE (video):
Format: 9:16 (1080×1920)
Duration: 15-60 sec (optimal 21-34 sec)
Style: UGC / native (NOT promotional)
AI Prompt: [Higgsfield — UGC style]

SCRIPT:
0-3 sec (Hook): "[Large text — question or shock fact]"
3-10 sec (Body): "[Native storytelling — subtitles]"
10-20 sec (Reveal): "[Solution/insight]"
20-30 sec (CTA): "[Call to action — text + voice]"

AD TEXT (< 100 characters):
[Text under video — emojis acceptable, conversational style]

DISPLAY NAME: [Account name]
CTA BUTTON: [Learn More / Shop Now / Sign Up / Download]

MUSIC: [Trending track or ambient — see video-creatives.md]
═══════════════════════════════════════════════════
```

### TikTok Spark Ads

```
═══════════════════════════════════════════════════
CODE: [S1-B1-WARM-A]
PLATFORM: TikTok Spark Ads
═══════════════════════════════════════════════════

FORMAT: Organic post promoted as an ad
CREATIVE: Film like a regular TikTok — no ad styling
DURATION: 30-60 sec

STRUCTURE:
Hook (0-3): "[Conversational — 'Here's what nobody tells you about...']"
Story (3-20): "[Personal story or client case study]"
Reveal (20-25): "[Aha moment]"
CTA (25-30): "[Soft — 'Link in bio']"

CAPTION: [< 150 characters, with hashtags]
CTA: [Native in video, no button]
═══════════════════════════════════════════════════
```

---

## Google Ads

### Display Network (GDN)

```
═══════════════════════════════════════════════════
CODE: [S1-B1-COLD-A]
PLATFORM: Google Display
═══════════════════════════════════════════════════

HEADLINES (up to 5, each < 30 characters):
1: "[Short M-A-G-I-C]"
2: "[Value Equation — result]"
3: "[Number + result]"
4: "[Pain question]"
5: "[Offer + urgency]"

LONG HEADLINE (< 90 characters):
"[Expanded M-A-G-I-C with details]"

DESCRIPTIONS (up to 5, each < 90 characters):
1: "[Pain + solution]"
2: "[Social proof + number]"
3: "[Grand Slam Offer briefly]"
4: "[Guarantee + CTA]"
5: "[Urgency + result]"

IMAGES:
Landscape (1.91:1 — 1200×628): [AI prompt]
Square (1:1 — 1200×1200): [AI prompt]
Portrait (preferred): [AI prompt, if platform supports]

LOGO: [Square 1:1 + landscape 4:1]
BUSINESS NAME: [< 25 characters]
CTA: [Automated / Learn More / Sign Up / Get Quote]
FINAL URL: [URL]
═══════════════════════════════════════════════════
```

### YouTube Ads (In-Stream / Discovery)

```
═══════════════════════════════════════════════════
CODE: [S1-B1-WARM-A]
PLATFORM: YouTube
═══════════════════════════════════════════════════

CREATIVE (video):
Format: 16:9 (1920×1080)
Duration: 15 sec (bumper) / 30 sec (skippable pre-roll) / 60+ sec (in-stream)

SCRIPT (30 sec skippable):
0-5 sec (Hook — before Skip button): "[Strongest hook — determines everything]"
5-15 sec (Problem + Solution): "[Pain → solution]"
15-25 sec (Proof + Offer): "[Proof + offer]"
25-30 sec (CTA): "[Direct call to action]"

AI Prompt: [Runway/Sora — cinematic style]

COMPANION BANNER (300×60):
Text: "[Short offer]"
CTA: "[Button]"

HEADLINE (for Discovery): [< 100 characters]
DESCRIPTION 1: [< 35 characters]
DESCRIPTION 2: [< 35 characters]
═══════════════════════════════════════════════════
```

---

## Telegram Ads

```
═══════════════════════════════════════════════════
CODE: [S1-B1-COLD-A]
PLATFORM: Telegram Ads
═══════════════════════════════════════════════════

TEXT (< 160 characters, no formatting):
"[Pain + solution + CTA — maximally compressed]"

CTA BUTTON: [Button text < 30 characters]
LINK: [URL or @channel]

Note: Telegram Ads — text only, no visuals.
Key focus: every word must count.
═══════════════════════════════════════════════════
```

---

## VK Ads

```
═══════════════════════════════════════════════════
CODE: [S1-B1-COLD-A]
PLATFORM: VK Ads
═══════════════════════════════════════════════════

CREATIVE (visual):
Format: 1080×607 (16:9, for feed) or 600×600 (1:1, for universal)
AI Prompt: [Full prompt]

HEADLINE (< 33 characters):
"[M-A-G-I-C adapted]"

DESCRIPTION (< 70 characters):
"[Pain + solution]"

AD TEXT (< 220 characters):
"[Expanded text — pain + solution + proof + CTA]"

CTA BUTTON: [Go / Learn More / Sign Up / Get]
LINK: [URL]
═══════════════════════════════════════════════════
```

---

## Copy Writing Rules by Level

### Levels 0-1 (COLD) — Primary Text

**Focus:** Pain and identification ("this is about me")

| Element | Rule |
|---------|---------|
| First sentence | Question or statement from DNA pain scenario |
| Body | Pain description in client language (quotes from DNA) |
| Solution | A hint, not a sale. "There's a way..." |
| CTA | Soft: "Learn more", "Get the guide" |
| Tone | Empathetic, understanding |

### Levels 2-3 (WARM) — Primary Text

**Focus:** Education and differentiation from competitors

| Element | Rule |
|---------|---------|
| First sentence | Myth or false solution from DNA |
| Body | Why old approaches don't work + the right path |
| Solution | System/method — specifics |
| CTA | Medium: "Learn about the program", "Sign up for the webinar" |
| Tone | Expert, confident |

### Levels 4-5 (HOT) — Primary Text

**Focus:** Offer and objection removal

| Element | Rule |
|---------|---------|
| First sentence | Result (number) or Grand Slam Offer |
| Body | What you get (Value Stack) + proof |
| Solution | Specific offer with value |
| CTA | Direct: "Sign up now", "Reserve your spot" |
| Tone | Confident, sales-oriented |

---

## Headline per M-A-G-I-C

| Component | What It Is | Example |
|-----------|---------|--------|
| **M**agnetic reason | Compelling reason | "How", "The secret", "The method" |
| **A**vatar | Who you are | "for women 30+", "for entrepreneurs" |
| **G**oal | Dream result | "sleep peacefully", "earn 500K" |
| **I**nterval | How long | "in 7 days", "in 2 weeks" |
| **C**ontainer | Format | "program", "guide", "course" |

**Formula:** `[M] [A] [G] [I] [C]`
**Example:** "How Women 30+ Can Restore Peaceful Sleep in 7 Days — 'Anchor Point' Program"

**For short headlines (< 40 characters)** use the shortened formula:
- M + G: "The Secret to Peaceful Sleep"
- G + I: "Peaceful Sleep in 7 Days"
- M + G + I: "How to Fall Asleep in 7 Days"

---

## Pre-Publication Checklist

For each ad unit, check:

- [ ] Code assigned (S-B-STAGE-VARIATION)
- [ ] Visual matches platform dimensions
- [ ] AI prompt is complete and ready to copy-paste
- [ ] Primary Text matches the Hunt level
- [ ] Headline follows M-A-G-I-C or Value Equation
- [ ] CTA matches the level (soft/medium/direct)
- [ ] Character limits respected
- [ ] Client language from DNA (not marketing jargon)
- [ ] Hormozi Value Equation applied (result x likelihood / time x effort)
- [ ] A/B variations: clear what's being tested
