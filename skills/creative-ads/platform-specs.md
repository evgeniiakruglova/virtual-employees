# Platform Specifications

Up-to-date sizes, formats, and requirements for all advertising platforms. Use when generating prompts for AI tools.

## Size Reference Table

### Meta (Facebook / Instagram)

| Placement | Aspect Ratio | Size (px) | Format | --ar (Midjourney) |
|-----------|-------------|-------------|--------|-------------------|
| Feed (desktop) | 1:1 | 1080×1080 | JPG/PNG/MP4 | --ar 1:1 |
| Feed (mobile) | 4:5 | 1080×1350 | JPG/PNG/MP4 | --ar 4:5 |
| Stories | 9:16 | 1080×1920 | JPG/PNG/MP4 | --ar 9:16 |
| Reels | 9:16 | 1080×1920 | MP4 | --ar 9:16 |
| Right Column | 1.91:1 | 1200×628 | JPG/PNG | --ar 191:100 |
| Marketplace | 1:1 | 1080×1080 | JPG/PNG | --ar 1:1 |
| Carousel (each slide) | 1:1 | 1080×1080 | JPG/PNG/MP4 | --ar 1:1 |
| In-Stream Video | 16:9 | 1920×1080 | MP4 | --ar 16:9 |

**Meta Text Limits:**
| Element | Limit | Recommendation |
|---------|-------|--------------|
| Primary Text | 125 characters (before "See More") | Up to 125 for mobile |
| Headline | 40 characters | 27 characters for mobile |
| Description | 30 characters | 27 characters |
| Image text | < 20% of area | Minimize text on visuals |

**Meta Video:**
| Parameter | Value |
|----------|----------|
| Feed Duration | 1-240 sec (recommended 15-30) |
| Stories Duration | Up to 15 sec |
| Reels Duration | 15-90 sec |
| Max File Size | 4 GB |
| Codec | H.264 |
| Audio | AAC, 128 kbps+ |

---

### TikTok

| Placement | Aspect Ratio | Size (px) | Format | --ar |
|-----------|-------------|-------------|--------|------|
| In-Feed | 9:16 | 1080×1920 | MP4/MOV | --ar 9:16 |
| TopView | 9:16 | 1080×1920 | MP4 | --ar 9:16 |
| Brand Takeover | 9:16 | 1080×1920 | JPG/MP4 | --ar 9:16 |

**TikTok Text Limits:**
| Element | Limit |
|---------|-------|
| Ad Text | 100 characters |
| Display Name | 20 characters |

**TikTok Video:**
| Parameter | Value |
|----------|----------|
| Duration | 5-60 sec (recommended 21-34) |
| Max Size | 500 MB |
| Resolution | Min. 720×1280 |
| Bitrate | 516 kbps+ |

---

### Google Ads

#### Display Network (GDN)

| Format | Aspect Ratio | Size (px) | --ar |
|--------|-------------|-------------|------|
| Landscape | 1.91:1 | 1200×628 | --ar 191:100 |
| Square | 1:1 | 1200×1200 | --ar 1:1 |
| Portrait | 4:5 | 960×1200 | --ar 4:5 |
| Logo (square) | 1:1 | 1200×1200 | — |
| Logo (landscape) | 4:1 | 1200×300 | — |

**GDN Text Limits (Responsive Display):**
| Element | Limit | Quantity |
|---------|-------|--------|
| Headline | 30 characters | Up to 5 |
| Long Headline | 90 characters | 1 |
| Description | 90 characters | Up to 5 |
| Business Name | 25 characters | 1 |

#### YouTube

| Format | Aspect Ratio | Size (px) | --ar |
|--------|-------------|-------------|------|
| In-Stream (skippable) | 16:9 | 1920×1080 | --ar 16:9 |
| In-Stream (non-skip) | 16:9 | 1920×1080 | --ar 16:9 |
| Bumper (6 sec) | 16:9 | 1920×1080 | --ar 16:9 |
| Discovery | 16:9 | 1280×720 (min.) | --ar 16:9 |
| Shorts | 9:16 | 1080×1920 | --ar 9:16 |
| Companion Banner | — | 300×60 | — |

**YouTube Video:**
| Parameter | Value |
|----------|----------|
| Bumper | 6 sec |
| Skippable in-stream | 12 sec - 3 min (recommended 30 sec) |
| Non-skippable | 15-20 sec |
| Shorts | Up to 60 sec |

---

### Telegram Ads

| Parameter | Value |
|----------|----------|
| Format | Text only |
| Text Length | Up to 160 characters |
| CTA Button | Up to 30 characters |
| Visual | None (channel/bot avatar) |

---

### VK Ads

| Placement | Aspect Ratio | Size (px) | --ar |
|-----------|-------------|-------------|------|
| Feed (universal) | 16:9 | 1080×607 | --ar 16:9 |
| Feed (square) | 1:1 | 600×600 | --ar 1:1 |
| Stories | 9:16 | 1080×1920 | --ar 9:16 |
| Carousel | 1:1 | 600×600 | --ar 1:1 |
| Sidebar | — | 145×85 | — |

**VK Text Limits:**
| Element | Limit |
|---------|-------|
| Headline | 33 characters |
| Description | 70 characters |
| Ad Text | 220 characters |

**VK Video:**
| Parameter | Value |
|----------|----------|
| Duration | Up to 120 sec |
| Max Size | 2 GB |
| Format | MP4, AVI, MOV |

---

## --ar Mapping by Platform

Quick reference table for AI prompts. Add to the end of each prompt.

### Midjourney

```
--ar 1:1    → Meta Feed, Google Square, VK square, Carousel
--ar 4:5    → Meta Feed Mobile, Google Portrait
--ar 9:16   → Stories, Reels, TikTok, YouTube Shorts, VK Stories
--ar 16:9   → YouTube, Google Landscape, VK feed
--ar 191:100 → Google Display Landscape, Meta Right Column
```

### DALL-E

```
1024×1024  → 1:1 (Meta Feed, Google Square)
1024×1792  → ~9:16 (Stories, Reels, TikTok)
1792×1024  → ~16:9 (YouTube, Google Landscape)
```

### Nano Banana Pro

```
Specify format/size in the prompt:
"[description], square format 1:1" → for Feed
"[description], vertical format 9:16" → for Stories/Reels
"[description], widescreen format 16:9" → for YouTube
```

---

## Multi-Platform Adaptation

When generating creatives for multiple platforms simultaneously:

### One Visual → Multiple Sizes

```
BASE PROMPT: [scene description, style, lighting]

Meta Feed:     [base prompt] --ar 1:1 --v 6.1
Meta Stories:  [base prompt], more vertical composition --ar 9:16 --v 6.1
Google:        [base prompt], wider frame --ar 191:100 --v 6.1
YouTube:       [base prompt], cinematic wide --ar 16:9 --v 6.1
TikTok:        [base prompt], vertical UGC feel --ar 9:16 --v 6.1
```

### Adaptation Rules

| Platform | Visual Style | Text Style |
|-----------|--------------|--------------|
| Meta Feed | Clean, professional | Medium length, structured |
| Meta Stories | Bright, dynamic | Short, large font |
| TikTok | UGC, native, non-promotional | Conversational, with emojis |
| YouTube | Cinematic, high quality | Long, detailed |
| Google Display | Clean, text-focused | Multiple short variations |
| Telegram | — (text only) | Maximally concise, every word counts |
| VK | Similar to Meta, slightly simpler | Medium, no anglicisms |

### Safe Zone (text zones)

| Platform | Safe Zone for Text |
|-----------|--------------------------|
| Meta Feed | Center of image, not below 80% height |
| Stories/Reels | Top 60% (bottom has UI elements) |
| TikTok | Top 50% (bottom has caption, UI) |
| YouTube | Center (bottom 20% has progress bar) |
| Google Display | Center or left side |
