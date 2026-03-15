# Detailed Quiz Funnel Format Specifications

## Format A: DIAGNOSTICS (NeuroSamurai-style)

### References
- NeuroSamurai: 21-day dopamine reset — 20+ screens, score 0-10, inaction cost calculator
- Noom: 67-step quiz, cadence 3:1, yes ladder, $500M+ revenue
- Conversion power: maximum (sunk cost + personalization + shock numbers)

### Screen Map (20+ screens)

ENTRY (3 screens):
- Screen 1 — Qualifying filter question:
  - Chat bubble at top: informal greeting (5-8 words). Example: "Hey, I've been waiting for you!"
  - Question: soft qualification. "Do you have [problem] or do you suspect that [problem]?"
  - 3 options: "Yes, definitely" / "I suspect, but not sure" / "No, just want to understand"
  - Normalizes the problem

- Screen 2 — Validation + empathy:
  - Chat bubble: "Don't worry, this is normal"
  - 1-2 empathy phrases with metaphor
  - Green button: "Got it →"

- Screen 3 — Diagnostics framing:
  - Chat bubble: energetic ("Alright, let's figure this out!")
  - Heading: NOT "test" and NOT "survey". Options: "What's happening with your [X]", "Diagnostics of your [Y]", "Scanning your [Z] system"
  - Subheading: "Answer without thinking — first thing that comes to mind. That's the most accurate."
  - Button: "Let's go →"

DIAGNOSTICS (8 questions + 1 insert):

UI for each question:
- Heading: "[PROCESS NAME]" (caps) + progress percentage
- Subheading: technical phrase
- Counter: X/8
- "← Back" button

- Question 1 — Daily behavior (single-select, 4 options, 🟢🟡🟠🔴)
- Question 2 — Quantitative marker (single-select, 4-5 options, 🟢🟡🟠🔴💀) ← for calculator
- Question 3 — Symptom inventory (MULTI-SELECT, 7-10 options) + counter "Selected: X"

INSERT after question 3: Validation + scientific fact + hope
- Compliment on awareness
- "Even 1-2 [items] is already a signal"
- Green card with scientific fact providing HOPE for reversibility
- Button: "Continue →"

- Question 4 — Motivation to act (single-select, 4 options, 🟢🟡🟠🔴)
- Question 5 — Loss inventory (MULTI-SELECT, 5-7 options) + counter "Lost: X"
- Question 6 — Provocative scenario (single-select, 4 options, 🟢🟡🟠🔴)
- Question 7 — Current emotional state (single-select, 4 options, 🟢🟡🟠🔴)
- Question 8 — Readiness / lead qualification (single-select, 4 options):
  - 🔥 "I'm ready RIGHT NOW"
  - ⚡ "Pumped, show me how"
  - 🌊 "I see the problem, don't see the solution"
  - 🤔 "Not a priority yet"

RESULTS (4 screens):
- Personal map (dashboard):
  - Badge category by score
  - Main score: [NAME] SCORE: X.X / 10
  - 3 sub-metrics: XX% | XX% | XX%
  - Recommendation: "RECOMMENDED DURATION: [product duration]"
  - Button: "See what you'll get →"

- Inaction cost calculator:
  - TIME: answer to question 2 → day/week/month/year → DAYS OF LIFE
  - MONEY: time × target audience rate → per year → per 5 years
  - Specific examples of what was missed

- Quality of life impact:
  - 4-5 specific consequences with emojis
  - "And each day this becomes the new normal."

- Shock number:
  - GIANT text: "[XXX] DAYS"
  - Green card: "In that time you could have:" + 4 alternatives

PRODUCT (2-3 screens):
- Transformation promise:
  - "Your path: from [problem] — to [result]"
  - 4 promises with emojis
  - Button: "Why will this work? →"

- Proof:
  - Name of key mechanism
  - Large number: XX% of participants [result]
  - 3-4 statistics
  - One WARNING + why our solution is different

CONVERSION (2 screens):
- Final CTA:
  - Logo/emoji + name
  - First-person slogan
  - Subheading: "[Duration], [format], [promise]"
  - Large green button
  - Scarcity: "🎁 First [N] participants get a bonus" or live counter

- Registration form:
  - Minimum fields: Name + [chosen contact method]
  - First-person button

### Scoring

Answer weights:
- Single-select (questions 1, 2, 4, 6, 7): 🟢=3, 🟡=2, 🟠=1, 🔴=0, 💀=0
- Multi-select (questions 3, 5): each item = +1 to "problem depth"
- Question 8 (qualification): does not participate in scoring — for segmentation

Main score: `score = (single_select_sum / 15) * 10` → 0.0 - 10.0

Sub-metrics:
- Metric 1 (questions 1, 6): behavior / dependency
- Metric 2 (questions 4, 7): motivation / state
- Metric 3 (question 2 + count(multi-select 3)): load / overload
- Formula: (earned / group maximum) × 100%

Categories:
| Score | Badge | Color | Label |
|------|-------|------|---------|
| 8.0-10.0 | [All good] | 🟢 | System in balance |
| 5.0-7.9 | [Warning] | 🟡 | There are signals. Best time to start |
| 3.0-4.9 | [Serious] | 🟠 | System overloaded — but the way out is near |
| 0.0-2.9 | [Critical] | 🔴 | Urgent reboot needed |

Inaction cost calculator:
```
loss_per_day = answer_value
loss_per_year = loss_per_day * 365
days_of_life = loss_per_year / 24
money_per_year = loss_per_day(hours) * target_audience_rate * 365
money_over_5_years = money_per_year * 5
days_over_10_years = days_of_life * 10
```

---

## Format B: TYPOLOGY (Focus & Flow-style)

### References
- Focus & Flow: "What's Your ADHD Style?" — 3-minute quiz, 3 archetypes (Hyperfocus Burner, Scattered Starter, Chronic Overwhelmer)
- Monetization through Notion template ($25) and affiliate programs
- Archetype approach: gives the user a "name" for their problem, instantly reduces shame

### Screen Map (12-15 screens)

ENTRY (2 screens):
- Screen 1: Hook + promise ("Find your [X] style in 3 minutes")
  - Chat bubble: friendly greeting
  - Heading: "What's your [X] style?"
  - Subheading: "5 questions → your personal profile → strategy tailored to you"
  - Button: "Find my type →"
- Screen 2: Framing
  - "There are no right or wrong answers. Choose what feels closest."
  - Button: "Let's go →"

QUESTIONS (5-6 total):
- Each question = one situation, 3-4 answer options
- Options describe BEHAVIORAL STYLE, not severity level
- No severity color markers (🟢🟡🟠🔴) — instead unique emojis for each style
- Each option secretly adds points to one or more archetypes

Question template examples:
1. "How do you usually start your workday?" — about organizational style
2. "When a task doesn't interest you, you..." — about focus and motivation
3. "How do you react to a deadline?" — about stress and working under pressure
4. "What happens when you're interested?" — about hyperfocus
5. "What does your ideal day off look like?" — about recovery
6. (optional) "How do you make decisions?" — about impulsivity

INSERT after question 3:
- "Great awareness! We can already see a pattern..."
- Processing animation (1-2 seconds)

RESULT (3-4 screens):
- Screen — Reveal (archetype reveal):
  - Appearance animation
  - Large archetype emoji symbol
  - Title: "You are a [Archetype Name]!"
  - 2-3 sentences "this is about you"
  - Button: "Learn more →"

- Screen — Archetype Profile:
  - Strengths (3 items with ✅)
  - Blind spots / risks (3 items with ⚠️)
  - "Your superpower: [one phrase]"
  - "Your trap: [one phrase]"
  - Button: "Get your strategy →"

- Screen — Personal Strategy:
  - "3 steps for [Archetype Name]:"
  - Step 1, 2, 3 — specific recommendations
  - "Want the full strategy? →"

- Screen — Share + CTA:
  - Share card for Stories/social media (visually appealing)
  - "Share your result"
  - Divider
  - E-mail capture: "Get the full guide for [your type] via e-mail"
  - Field: E-mail
  - Button: "Send my guide →"
  - Or: CTA to product, adapted to archetype

### Typology Scoring

Each answer option has weights for each archetype:
```
variant: {
  text: "I dive headfirst into the task, forget about everything",
  scores: { hyperfocus: 3, scattered: 0, overwhelmed: 1 }
}
```

Final archetype = maximum total score.
In case of a tie — show "mixed type" (primary + subtype).

### Archetype Requirements

Each archetype must contain:
- A vivid, memorable name (not clinical!)
- Emoji symbol
- "You tell yourself: '[characteristic phrase]'"
- Description in 2-3 sentences
- 3 strengths
- 3 blind spots
- Personal strategy (3 steps)
- Recommended product/module
- Share card (text for social media)

---

## Format C: ULTRA-SCREENING (Done.-style)

### References
- Done.: 1-minute ADHD test based on ASRS/Barkley
- MHA (Mental Health America): DSM-5 screening, free, no paywall
- Minimal friction — a threshold that even someone in a state of procrastination can overcome

### Screen Map (5-7 screens)

ENTRY (1 screen):
- Heading: "[Problem]? Find out in 1 minute"
- Subheading: "3 questions. No registration. Results instantly."
- Button: "Start →"
- Social proof at bottom: "Already taken by: 12,847 people"

QUESTIONS (3-4 total):
- Each on a single screen
- 3-4 options, maximally specific
- Quick selection — no overthinking
- Progress bar clearly shows "you're almost done"

RESULT (1-2 screens):
- Screen — Result:
  - Traffic light: 🟢 / 🟡 / 🔴
  - Large text: "[Problem] probability: [Low/Medium/High]"
  - 2-3 sentences of explanation
  - Button: "[CTA] →"

- Screen — CTA:
  - "Next step:"
  - Product description (2 lines)
  - Button + form (name + contact)

### Ultra-screening Scoring

Simple cumulative score:
- Each question: option 1 = 0, option 2 = 1, option 3 = 2, option 4 = 3
- Total: 0-3 = green, 4-7 = yellow, 8+ = red

---

## Format D: SHOCK CALCULATOR

### References
- Piwik PRO Marketing ROI Calculator: baseline → growth with conversion increase
- LogicCore Landing Page ROI Calculator: "how much money you're leaving on the table"
- "Dopamine Audit" mechanics from research (5-7 questions → Dopamine Depletion Score)
- Double Denim Marketing + Typeform: ROI calculator → $3.67M in sales

### Screen Map (8-12 screens)

ENTRY (1-2 screens):
- Screen 1: Hook
  - Heading: "How much does your [problem] cost?"
  - Subheading: "Move the sliders — the calculator will show you the truth"
  - Button: "Calculate →"

SLIDERS (1 screen with 3 sliders OR 3 separate screens):

Variant A — All on one screen:
- Slider 1: "[What we're measuring]" (range, step)
  Example: "Hours per day on social media" (0.5 - 8, step 0.5)
- Slider 2: "[Second parameter]"
  Example: "Your age" (18 - 60, step 1)
- Slider 3: "[Third parameter]"
  Example: "Hourly income ($)" (10 - 200, step 5)
- Live recalculation with each slider movement
- Result preview at bottom of screen (updates instantly)
- Button: "Show full calculation →"

Variant B — One per screen (ADHD-friendly):
- One slider per screen
- Large current value display
- "Next →" button after each

RESULT — SHOCK (2-3 screens):
- Screen — 3 shock numbers:
  - 📅 DAYS OF LIFE: "[XXX] days you'll spend on [problem]"
  - 💰 MONEY: "$XX,XXX in lost productivity"
  - 🧠 NEURO-EFFECT: "[X]+ hours of screen time increases symptoms by [Y]%"
  - Each number animated (count-up from 0)

- Screen — Before/After:
  - Left: "Your brain now" (chaos visualization)
  - Right: "Your brain in 30 days" (order visualization)
  - Text: "The difference — just [product duration]"

- Screen — Alternatives:
  - "In [XXX] days you could have:"
  - 4 specific alternatives relevant to the target audience
  - Button: "Start your reboot →"

SCROLLYTELLING (optional, 5-6 steps):
- Scroll animation block "Reboot in 30 days":
  1. "Now" — chaotic visualization
  2. "Day 3" — you start noticing triggers
  3. "Day 7" — sleep quality improves
  4. "Day 14" — you hold attention longer
  5. "Day 30" — new reality
  6. CTA: "Start your reboot"

CTA + FORM (2 screens):
- Standard conversion screens (same as Format A)

### Calculator Formulas

Define formulas based on sliders:
```
slider1_value = hours_per_day (float)
slider2_value = age (int)
slider3_value = hourly_income (float)

// Shock numbers
days_of_life = (slider1_value * 365 * (80 - slider2_value)) / 24
money_lost = slider1_value * slider3_value * 365
neuro_effect = if slider1_value > 4 then "increases symptoms by 25%" else "slows recovery"

// Alternatives (calculate what could be done with lost hours)
hours_per_year = slider1_value * 365
```

Adapt sliders and formulas to the specific product.

---

## Hybrid Combinations

Formats can be combined:

**A + D**: Diagnostics with calculator (current NeuroSamurai — already works this way)
**B + D**: Typology + calculator ("You're a Hyperfocus Burner — and here's what it costs: $23,400/year")
**C + B**: Quick screening → if result is yellow/red → transition to typology
**Noom-hybrid**: Long quiz (15-20 questions) with cadence 3:1 (3 questions → 1 motivational screen). For high-ticket products where maximum sunk cost is needed.

### Cadence 3:1 (Noom-style)

Every 3 questions — an insert:
- Motivational page with social proof
- Or progress graph
- Or guilt relief / normalization
- Or mini-insight

This creates a feeling of dialogue, not an interrogation. By the paywall, the user has invested time → sunk cost effect.

### "Yes Ladder" (Noom)

Question order based on increasing engagement:
1. Easy / neutral (age, gender, format)
2. Personal / about the problem
3. Emotional / about pain
4. About readiness / about money

Each "yes" makes the next "yes" easier.
