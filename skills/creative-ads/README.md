# Creative Ads — Claude Code Skill

A generator for advertising creatives (static, video, animation) with ready-made AI prompts for Midjourney / DALL-E / Nano Banana Pro / Higgsfield / Runway for all advertising platforms.

## What It Does

Transforms target audience analysis into launch-ready advertising materials:

- **Static creatives** — banners with AI prompts (Midjourney, DALL-E, NBP) + copy + CTA
- **Video creatives** — frame-by-frame scripts with AI prompts (Runway, Higgsfield) + subtitles
- **Webinar Reels/TikTok** — hooks, scripts, text descriptions for promoting webinars and live shows
- **Full ad units** — ready-to-upload in Ads Manager (primary text, headline, description, CTA)
- **Retargeting sequences** — 3 stages with separate creatives at each
- **A/B variations** — 3 variations per creative (hook / image / CTA tests)

## Methodologies

The skill combines three frameworks:

| Methodology | What It Provides |
|---|---|
| **Client DNA** (Vlad Yasko) | Deep segments, pain points, inner monologue, client language, triggers |
| **Ben Hunt's Ladder** | 5 awareness levels → different creative types at each |
| **Alex Hormozi ($100M Offers)** | Value equation, Grand Slam Offer, value stacking, scarcity |

## File Structure

```
creative-ads/
├── SKILL.md                  # Main file — 8-step algorithm
├── role.md                   # Agent system role
├── guidelines.md             # General generation rules
├── awareness-ladder.md       # Ben Hunt's Ladder (5 levels)
├── creative-strategy.md      # Creative strategy and angles
├── hormozi-offer.md          # Hormozi framework for copy
├── static-creatives.md       # Static creative generation
├── video-creatives.md        # Video creative generation
├── webinar-video-reels.md    # Reels/TikTok for webinars and live shows
├── ad-unit-templates.md      # Full ad unit templates
├── platform-specs.md         # Platform specifications (Meta, TikTok, YouTube)
├── prompt-engineering.md     # Prompt engineering for AI generation
└── retargeting-sequences.md  # Retargeting sequences (3 stages)
```

## Workflow Algorithm (8 Steps)

1. **Data collection** — pulls Client DNA (or initiates analysis)
2. **Awareness level** — determines cold / warm / hot traffic
3. **Creative strategy** — generates angles for each segment x pain x level combination
4. **Static creatives** — AI prompts + copy + composition (3 A/B variations)
5. **Video / animation** — frame-by-frame scripts + AI prompts for video generation
6. **Full ad units** — ready-to-upload ad units for each platform
7. **Retargeting** — 3 stages (viewed → clicked → visited landing page)
8. **Platform adaptation** — sizes, formats, specifics of each platform

## Module: Webinar Reels (webinar-video-reels.md)

A specialized workflow for creating promotional Reels/TikTok for webinars and live shows:

- **12 hook types** — provocation, identification, numeric shock, contrast, and more
- **4 CTA categories** — lead magnet, FOMO, curiosity, direct challenge
- **FOMO system** through ignorance of specific tools (not "use AI" but "you don't know THESE 7 tools")
- **Dymshakov format** — video with a hook headline + structured text description + CTA
- **Generation matrix** — automatic creation from Client DNA data (segment x pain x hook)

Built on Deep Research (13 sources, 2025-2026): hook rate benchmarks, FOMO statistics, short video trends, Hook-Story-Offer and PAS frameworks.

## Installation

```bash
# Clone to Claude Code skills folder
git clone https://github.com/yasikvlad/creative-ads.git ~/.claude/skills/creative-ads
```

## Related Skills

- [client-dna](https://github.com/yasikvlad/client-dna) — Client DNA (automatically invoked when audience data is missing)
- [quiz-funnel](https://github.com/yasikvlad/quiz-funnel) — Quiz funnels
- [vsl-high-ticket](https://github.com/yasikvlad/vsl-high-ticket-skill) — VSL scripts
- [sales-assistant](https://github.com/yasikvlad/sales-assistant) — Sales assistant

## Usage

Call in Claude Code:
```
/creative-ads
```

Or simply ask:
> "Create creatives for my course"
> "I need ad banners for a webinar"
> "Generate reels for promoting a masterclass"

## Author

**Vlad Yasko** — marketer, producer, creator of AI-Ark

## License

MIT
