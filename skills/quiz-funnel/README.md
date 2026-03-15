# Quiz Funnel v2.0 — Quiz Funnel Generator for Claude Code

A skill that analyzes a product and audience, recommends the optimal quiz format from 4 options, and generates a complete technical specification for a personalized quiz landing page.

The formula is reverse-engineered from 15+ high-converting quiz funnels (NeuroSamurai, Noom, Focus & Flow, Done., BedGear, RANAVAT, etc.), supplemented with ADHD-UX and gamification research.

The output is a markdown file that can be given to Claude Code to produce a working Next.js quiz.

## 4 Quiz Formats

| Format | Screens | Time | Best for |
|--------|---------|------|----------|
| **A. Diagnostic** | 20+ | 3-5 min | Courses, sprints, challenges |
| **B. Typology** | 12-15 | 2-3 min | Blogs, info-products, digital |
| **C. Ultra-screening** | 5-7 | 1 min | Consulting, SaaS, services |
| **D. Calculator-shocker** | 8-12 | 1-2 min | Detox, productivity, finance |

The skill automatically recommends a format based on product and audience analysis.

## Formula of 10 Patterns

| # | Pattern | What it does |
|---|---------|--------------|
| 1 | Chat-friend | Quiz mimics a messenger dialogue, not a form |
| 2 | Techno-framing | Presented as "system scanning," not as a test |
| 3 | Color scale | Each answer marked 🟢🟡🟠🔴 — visual impact |
| 4 | Question mix | Single-select + multi-select + hopeful inserts |
| 5 | Emotional arc | Curiosity → recognition → shock → hope → decision |
| 6 | Damage calculator | Personal numbers: how much time and money you're losing |
| 7 | Lead qualification | Final question sorts hot/warm/cold |
| 8 | Problem mirror | Questions as mirror — user realizes the problem |
| 9 | Cadence 3:1 | Every 3 questions — 1 motivational insert (Noom) |
| 10 | Yes Ladder | Questions in escalating engagement (Noom) |

## What It Does

You describe your product. The skill:

1. Asks clarifying questions (target audience, price, format, CTA)
2. Recommends the optimal quiz format from 4 options
3. Generates audience DNA (pain points, triggers, archetypes, transformation)
4. Creates a complete quiz structure using the 10-pattern formula with ADHD-friendly UX
5. Designs scoring, calculator, archetypes (depending on format)
6. Assembles everything into one spec — ready for implementation

## Usage

```
/quiz-funnel Create a quiz for my 21-day productivity marathon
/quiz-funnel Typological quiz for an ADHD blog
/quiz-funnel Procrastination cost calculator for an app
/quiz-funnel Quick screening for booking a consultation
```

## Output

A markdown file with a complete spec:

- Chosen quiz format with justification
- Design system (4 options: dark, calm wellness, energy business, nature)
- Stack (Next.js 14+ / Tailwind / Framer Motion / Vercel)
- JSON structure of all screens with full texts
- Scoring formulas (numerical / archetype / traffic light / calculator)
- Cost-of-inaction calculator with formulas
- ADHD-friendly UX: no timers, chunking, progressive disclosure, instant feedback
- Conversion mechanics: waitlist, milestone rewards, early bird, social proof
- First-person CTA library
- Components: SliderInput, ArchetypeCard, ShareButton, StickyCtaBar, CounterBadge, etc.
- Navigation, state, and auto-save in localStorage specification
- Form integration

## 5 Skill Phases

1. **Information gathering** — dialogue about product, audience, price, format, CTA
2. **Format selection** — automatic A/B/C/D recommendation with justification
3. **Audience DNA** — pain points, triggers, archetypes, transformation
4. **Quiz generation** — screens, questions, inserts using the 10-pattern formula
5. **Spec assembly** — complete markdown file, ready for implementation

## Skill Files

| File | Purpose |
|------|---------|
| `SKILL.md` | Description, triggers, allowed-tools |
| `PROMPT.md` | Complete quiz generation instructions (5 phases) |
| `references/formula.md` | 10 patterns, screen maps for all formats, design reference |
| `references/formats.md` | Detailed specifications for formats B/C/D + hybrids |
| `references/knowledge-base.md` | CTA library, conversion mechanics, ADHD-UX, design systems, case studies |

## Origins

Formula v2.0 is reverse-engineered from 15+ high-converting quiz funnels:
- **NeuroSamurai** — full reverse engineering (Format A: Diagnostic)
- **Noom** — 67-step quiz, $500M+ revenue, cadence 3:1, yes ladder
- **Focus & Flow** — typological quiz, ADHD archetypes (Format B)
- **Done.** — 1-minute screening, 60,000+ users (Format C)
- **BedGear** — calculator + scrollytelling (Format D)
- **RANAVAT, Warby Parker, Helix Sleep** — interactive e-commerce quizzes

Supplemented with ADHD-UX research, Octalysis Framework (gamification), and conversion mathematics.

## License

MIT
