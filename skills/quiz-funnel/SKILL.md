---
name: quiz-funnel
description: |
  Personalized quiz funnels for any product. 4 formats: Diagnostics (scoring, calculator), Typology (archetypes, share cards), Ultra-screening (1 minute, traffic light), Shock Calculator (sliders, shock numbers). Ready-made technical spec for Next.js landing with ADHD-friendly UX.
  Use when: quiz, funnel, quiz funnel, lead magnet, qualification test, personalized test, landing with test, quiz landing page, pre-registration via quiz, lead collection via test, typology test, calculator, screening, waitlist, interactive landing.
  Do NOT use for: regular forms without quiz, A/B tests, unit tests, surveys without a sales component.
allowed-tools:
  - Read
  - Write
  - Edit
  - AskUserQuestion
  - Glob
  - Grep
  - WebFetch
  - Agent
---

# Quiz Funnel v2.0 — Quiz Funnel Generator

The skill analyzes a product, its audience, and creates a complete technical specification for a personalized quiz landing page. The formula is based on analysis of 15+ high-converting quiz funnels (NeuroSamurai, Noom, Focus & Flow, Done., BedGear, RANAVAT, etc.), ADHD-UX research, and gamification.

## What It Does

1. Collects product information through dialogue
2. Recommends the optimal quiz format from 4 options
3. Analyzes the audience (pain points, triggers, archetypes, transformations)
4. Generates a complete quiz structure with ADHD-friendly UX
5. Outputs a ready-made technical spec in markdown — can be immediately handed to Claude Code for implementation

## 4 Quiz Formats

| Format | Screens | Time | Best For |
|--------|---------|------|----------|
| **A. Diagnostics** | 20+ | 3-5 min | Courses, sprints, challenges |
| **B. Typology** | 12-15 | 2-3 min | Blogs, info-products, digital |
| **C. Ultra-screening** | 5-7 | 1 min | Consulting, SaaS, services |
| **D. Calculator** | 8-12 | 1-2 min | Detox, productivity, finance |

## Usage

```
/quiz-funnel Create a quiz for my 21-day productivity course
/quiz-funnel Typology quiz for an ADHD blog
/quiz-funnel Procrastination cost calculator for an app
/quiz-funnel Quick screening for consultation booking
```

## How It Works

The skill follows 5 phases (details in PROMPT.md):
- **Phase 1**: Product information collection (interactive)
- **Phase 1.5**: Format recommendation and selection
- **Phase 2**: Audience DNA analysis (pain points, triggers, archetypes)
- **Phase 3**: Quiz structure generation using the 10-pattern formula
- **Phase 4**: Scoring and calculator design
- **Phase 5**: Full technical spec assembly into a markdown file

## Knowledge Base

- `PROMPT.md` — complete quiz generation instructions
- `references/formula.md` — 10-pattern formula and screen maps for all formats
- `references/formats.md` — detailed specifications for 4 formats
- `references/knowledge-base.md` — conversion patterns, ADHD-UX, design systems, CTA library, case studies with metrics
