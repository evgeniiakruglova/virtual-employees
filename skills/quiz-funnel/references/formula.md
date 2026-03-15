# Quiz Funnel Pattern Formula v2.0

Reverse-engineered from NeuroSamurai, Noom, Focus & Flow, Done., BedGear, and 15+ other high-converting quiz funnels. Supplemented with ADHD-UX, gamification, and interactive landing page research.

## 10 Patterns of a High-Converting Quiz

### 1. "Chat buddy, not a questionnaire"
The quiz imitates a messenger conversation. Chat bubbles before questions create a feeling of talking to someone who understands. Reduces the feeling of "being tested," increases answer honesty.

Implementation: ChatBubble component before the first 3 screens. Gray background, rounded corners, first-person text.

### 2. "Techno-framing"
The quiz is presented as a diagnostic/scan/analysis. Subheadings change: "Initializing...", "Assessing level...", "Analyzing...", "Calibrating...". Turns a survey into a "medical procedure" and increases perceived value.

Implementation: heading in caps + changing subheading + progress bar with percentage.

### 3. Severity Color Scale
Each answer option is marked with a colored dot (🟢🟡🟠🔴💀). Visually shows the "degree of damage." Automatically strengthens problem awareness without lengthy explanations.

Implementation: 12px colored circle to the left of the option text.

### 4. Alternating Question Types
- Single-select with 4 options (6 questions) — fast, not overwhelming
- Multi-select with 6-10 options (2 questions) — deeper engagement, the person "self-diagnoses"
- Breathing-room inserts between blocks — validation + fact + hope

Implementation: 3 types of question components + InsightScreen.

### 5. Emotional Arc
The screen order creates a managed emotional trajectory:
1. Curiosity (entry)
2. Self-recognition (first questions)
3. Growing discomfort (symptoms, losses)
4. Hope (mid-point insert with scientific fact)
5. Deep awareness (damage calculator)
6. Number shock (490 DAYS)
7. Decision / way out (product as salvation)

### 6. Personalized Damage Calculator
The answer to the quantitative question is used to calculate:
- Time loss: hours/day → weeks → months → years → days of life
- Money loss: hours × target audience rate → per year → per 5 years
- Alternatives: "what you could have done with that time"

These are THEIR PERSONAL numbers, not abstract statistics.

### 7. Qualifying Final Question
The last question segments leads by "temperature":
- 🔥 Hot → push urgency
- ⚡ Warm → show the path
- 🌊 Needs hope → focus on support
- 🤔 Cold → retargeting

### 8. "Problem Mirror" (NEW)
Questions serve not to collect data, but to help the user REALIZE their problem. When they answer "yes, I lose focus every 10 minutes" — they lock the problem into consciousness. Before the quiz, the problem is abstract. After — concrete and measurable.

Noom uses this principle in their 67-step quiz with $500M+ revenue.

Implementation: formulate each question as a "mirror" — the user sees themselves in the answer options.

### 9. Cadence 3:1 (NEW, Noom-style)
Every 3 questions — 1 motivational insert:
- Social proof ("89% of people with these symptoms...")
- Progress graph ("You're already at 60% — almost there")
- Guilt relief ("It's not laziness — it's neurochemistry")
- Mini-insight ("Did you know that...")

Creates a feeling of dialogue, not an interrogation. Contradicts the advice "make it shorter" — a long funnel converts BETTER if each step is simple.

Implementation: InsightScreen every 3 questions. Different insert types alternate.

### 10. "Yes Ladder" (NEW, Noom-style)
Question order by increasing engagement:
1. Easy / neutral (age, format, experience)
2. Personal / about the problem
3. Emotional / about pain and losses
4. About readiness / about money and actions

Each "yes" makes the next "yes" easier. By the paywall, the user has already invested 5-15 minutes → sunk cost effect.

---

## Full Screen Map: Format A (Diagnostics)

```
PHASE 1: ENTRY (2-3 screens)
├── Screen 1: Qualifying filter question (chat bubble + 3 options)
├── Screen 2: Validation + empathy (response to answer)
└── Screen 3: Preparation for "scanning"

PHASE 2: DIAGNOSTICS (8 questions + 1-2 inserts)
├── Question 1: Daily behavior (single, 4 options)
├── Question 2: Quantitative marker (single, 4-5 options) ← for calculator
├── Question 3: Symptoms (multi, 7-10 options)
├── INSERT: Validation + scientific fact + hope
├── Question 4: Motivation to act (single, 4 options)
├── Question 5: Losses over the year (multi, 5-7 options)
├── [INSERT (opt.): Social proof / mini-statistics]
├── Question 6: Provocative scenario (single, 4 options)
├── Question 7: Current state (single, 4 options)
└── Question 8: Readiness / qualification (single, 4 options)

PHASE 3: RESULTS (4 screens)
├── Dashboard: score + 3 metrics + recommendation
├── Calculator: time + money + examples
├── Quality of life: 5 consequences
└── Shock number: X DAYS over 10 years

PHASE 4: PRODUCT (2-3 screens)
├── Transformation: "from X — to Y" + 4 promises
├── Proof: method + statistics
└── [Social proof (opt.): reviews / counter]

PHASE 5: CONVERSION (2-3 screens)
├── Final CTA: logo + slogan + button + scarcity
├── Form: 2 fields + button
└── [Achievement (opt.): "You've unlocked [X] status!" + share]
```

---

## Full Screen Map: Format B (Typology)

```
ENTRY (2 screens)
├── Hook: "What's your [X] style?" + "Find out in 3 minutes"
└── Framing: "No right answers"

QUESTIONS (5-6 total)
├── Question 1: Organizational style
├── Question 2: Focus and motivation
├── Question 3: Stress response
├── [INSERT: "We see a pattern..." + processing animation]
├── Question 4: Hyperfocus / recovery
├── Question 5: Decision making
└── [Question 6 (opt.): Social behavior]

RESULT (3-4 screens)
├── Reveal: "You are a [Archetype]!" + animation
├── Profile: strengths + blind spots
├── Strategy: 3 personal steps
└── Share + CTA: social media card + e-mail capture / product

CONVERSION (1-2 screens)
├── Offer adapted to archetype
└── Form
```

---

## Full Screen Map: Format C (Ultra-screening)

```
ENTRY (1 screen)
└── "[Problem]? Find out in 1 minute" + social proof

QUESTIONS (3-4 total)
├── Question 1: main symptom
├── Question 2: frequency / intensity
├── Question 3: impact on life
└── [Question 4 (opt.): readiness to act]

RESULT (1-2 screens)
├── Traffic light: 🟢🟡🔴 + recommendation
└── CTA + form
```

---

## Full Screen Map: Format D (Shock Calculator)

```
ENTRY (1 screen)
└── "How much does your [problem] cost?"

SLIDERS (1-3 screens)
├── Slider 1: main parameter
├── Slider 2: age/time
└── Slider 3: money parameter

RESULT — SHOCK (2-3 screens)
├── 3 shock numbers (animated count-up)
├── Before/After visualization
└── Alternatives: "In that time you could have..."

[SCROLLYTELLING (opt., 5-6 steps)]
├── "Now" → "Day 3" → "Day 7" → "Day 14" → "Day 30" → CTA

CONVERSION (2 screens)
├── CTA + scarcity
└── Form
```

---

## Design Reference (default)

- Background: #000000 or #0A0A0A
- Accent: #00FF88 (bright green)
- Negative metrics: #FF4444 (red), #FF8800 (orange)
- Warnings: #FFD700 (yellow)
- Text: #FFFFFF (primary), #999999 (secondary)
- Cards: #1A1A2E or #111827 with border 1px solid #333
- Selected card: border-color: #00FF88, glow: box-shadow 0 0 20px rgba(0,255,136,0.3)
- Green card (insight): background #00FF8820, border #00FF88
- CTA button: background #00FF88, text #000000, border-radius 12px, glow: 0 0 30px rgba(0,255,136,0.4)
- Container: max-width 640px, margin auto, padding 20px
- Font: Inter, system-ui, -apple-system
- Progress bar: height 4px, position fixed top, gradient green, transition 0.3s
- Transition animations: Framer Motion — fade + slideUp, duration 0.3-0.5s
- Stagger children: delay 0.05-0.1s between elements

Alternative design systems — see `knowledge-base.md` section 4.
