# Knowledge Base: Conversion Patterns, ADHD-UX, and Design Systems

## 1. CTA Formula Library

### First-Person CTAs (increase CTR)
Using first person creates agency — "I'm making a decision," not "they're selling to me."

**Templates:**
- "Start my reboot" (first person + action)
- "See my recovery plan" (curiosity + personalization)
- "Reserve my spot for free" (zero risk + exclusivity)
- "Unlock my result" (gamification + curiosity gap)
- "Get my strategy" (ownership + value)
- "Join [N] participants" (social proof + action)
- "Start free test" (low friction)
- "Show my plan" (curiosity)
- "Sign up first" (exclusivity + urgency)
- "Claim my bonus" (value + ownership)

### Anti-patterns (DO NOT use):
- "Submit" — faceless
- "Register" — too formal
- "Buy" — premature
- "Subscribe" — association with obligations

### Verbatim Repetition
Repeating the headline's key message on the CTA button increases conversion by 10+ percentage points.
Example: Headline "Reboot your brain" → Button "Start my reboot"

---

## 2. Conversion Mechanics

### Waitlist with Queue Position (Robinhood model)
- After signup show: "You're #347 in line"
- "Invite a friend — move up"
- Creates a viral loop (Robinhood: 1M+ waitlist)
- Tools: LaunchList, Prefinery, Waitlister, QueueForm

### Milestone Rewards (Duolingo model)
- "Invited 3 friends → free month"
- "10 friends → lifetime access"
- Badges increase referrals by 116%

### Early Bird
- "First 500 get 50% off forever" with a real counter
- Creates urgency + exclusivity
- Counter must be REAL (not fake — audiences are sensitive)

### Countdown Timer
- "Pre-registration closes in 48:00:00"
- WARNING: for ADHD audiences, timers can trigger anxiety
- Use a soft version: "Enrollment until [date]" instead of countdown

### Post-Quiz Achievement
- "You've unlocked [Name] status!"
- Stories sharing — virality driver
- "Save your Score and track progress" (endowment effect)

### Social Proof (patterns)
- Live counter: "Already signed up: 1,247" (updates)
- Participant quotes (1-2 short ones)
- Logos (if B2B): "Trusted by: [logos]"
- Number: "60,000+ users" (Done.)
- Rating: "4.8/5 satisfaction"

### Lead Capture After Engagement (ADDA model)
- E-mail is requested AFTER completing the test, when the user wants to see the result
- Increases conversion to 30%+
- "We'll send the full result to your e-mail" — exchanging value for contact info

---

## 3. ADHD-Friendly UX Principles

### Critical Rules (ALWAYS apply for wellness/mental health niche)

| Principle | Implementation | Why it works |
|---------|-----------|-----------------|
| One question per screen | Typeform-style | 60% higher response rate |
| Progress bar always visible | Sticky top bar | +14-42% conversion |
| Chunking (max 7 items) | Miller's Law | Netflix/Etsy limit to 6 |
| Progressive disclosure | Information as needed | Reduces cognitive load |
| Instant feedback | Animation + haptic on selection | Micro-dopamine for each action |
| Minimal text | One sentence per screen | Reduces visual fatigue |
| Calm visuals | Pastel tones, minimal animations | Overstimulation is the enemy of ADHD |
| No timers | Self-paced | Timers trigger anxiety |
| Auto-save | Can return later | Completion time -50% |
| Sticky CTA | Button always visible | +10% conversion, 2x pages/session |
| < 3 sec to first interaction | First element without scrolling | 53% leave at >3 sec load time |
| One CTA per page | One goal | Hick's Law: many options = paralysis |

### What NOT to do for ADHD audiences
- Strict timers/deadlines — increase anxiety
- Harsh punishment (HP loss, dying trees) — demotivates
- Overloaded UI (many elements, flashing animations)
- Highly competitive leaderboards — stress from rejection sensitivity
- Too many options at once — choice paralysis
- Passive content without interaction

### Elements Ideal for ADHD
- Instant visual feedback (every 15 minutes = micro-animation)
- Visual timeline (ring timer, radial progress)
- Personalized rewards (user defines their own "prizes")
- Novelty and unpredictability (random bonuses, seasonal events)
- Flexible pacing without fail state ("Freeze" streak without losing progress)

---

## 4. Design Systems for Quiz Landing Pages

### System A: Dark High-Contrast (NeuroSamurai-style)
- Background: #000000 or #0A0A0A
- Accent: #00FF88 (bright green)
- Negative metrics: #FF4444 (red), #FF8800 (orange)
- Warnings: #FFD700 (yellow)
- Text: #FFFFFF (primary), #999999 (secondary)
- Cards: #1A1A2E or #111827, border 1px solid #333
- Selected card: border-color: #00FF88, glow: box-shadow 0 0 20px rgba(0,255,136,0.3)
- Green card (insight): background #00FF8820, border #00FF88
- CTA button: background #00FF88, text #000, radius 12px, glow: 0 0 30px rgba(0,255,136,0.4)
- Font: Inter, system-ui, -apple-system
- Best for: tech, biohacking, detox, ADHD, gamification

### System B: Calm Wellness (Headspace/Calm-style)
- Background: #F8F6F4 (warm white) or #FAFAFA
- Accent: #6C63FF (soft purple) or #5B86E5 (calm blue)
- Positive: #4CAF50 (green)
- Negative: #FF6B6B (soft red)
- Text: #2D3436 (near black), #636E72 (gray)
- Cards: #FFFFFF, radius 16px, shadow: 0 2px 12px rgba(0,0,0,0.08)
- Selected card: border 2px solid accent, light shadow
- CTA button: gradient or solid accent, radius 24px (pill-shape)
- Font: DM Sans, Nunito, or Inter
- Best for: therapy, meditation, self-care, female audience

### System C: Energy Business (finance/productivity)
- Background: #0F0F1A (deep navy)
- Accent: #FFD700 (gold) or #FF6B35 (orange)
- Gradients: linear-gradient(135deg, #667eea 0%, #764ba2 100%) for cards
- Text: #FFFFFF, #A0A0B0
- Cards: rgba(255,255,255,0.05), backdrop-blur, border rgba(255,255,255,0.1)
- Glassmorphism: backdrop-filter: blur(10px)
- CTA button: gold gradient, font-weight 700
- Best for: business, finance, productivity, male audience

### System D: Nature/Organic (eco/wellness)
- Background: #F5F0EB (beige)
- Accent: #2D6A4F (dark green)
- Secondary: #95D5B2 (mint)
- Text: #1B4332, #52796F
- Cards: #FFFFFF, border-radius 12px
- Illustrations: line-art, botanical motifs
- Font: Lora (serif) for headings, Inter for body text
- Best for: ecology, health, nutrition, natural products

### Common Components (for all systems)

**Progress Bar:**
- Height: 4px, position: fixed top
- Gradient or solid accent
- Animation: transition width 0.3s ease

**Chat Bubble:**
- Background: rgba(255,255,255,0.1) for dark themes or #F0F0F0 for light themes
- Border-radius: 18px 18px 4px 18px (tail on right)
- Padding: 12px 16px
- Font: 2px smaller than body

**Option Card:**
- Min-height: 56px
- Padding: 16px
- Border-radius: 12px
- Transition: all 0.2s ease
- On selection: scale(1.02), border-color: accent, glow

**CTA Button:**
- Width: 100% (within container)
- Height: 56px minimum
- Border-radius: 12px (or 28px for pill)
- Font-weight: 600-700
- Letter-spacing: 0.5px
- Glow effect: box-shadow with accent color, opacity 0.3-0.4

**Animations (Framer Motion):**
- Screen transitions: fade + slide up (duration 0.3-0.5s)
- Element appearance: stagger children (0.05-0.1s between elements)
- Option selection: scale(1.02) + border glow
- Shock numbers: count-up animation from 0 to value (1.5-2s)
- Progress bar: spring animation

---

## 5. Psychology of the "Aha Moment"

### What Creates an Aha Moment
- "First win in 60 seconds" — complete an action and receive value before data is requested
- "Problem mirror" — the user REALIZES their problem through questions ("yes, I lose focus every 10 minutes")
- "Personalized result" — not "our product is great," but "here's what's going on with YOU and how to change it"
- "Reframing" — before the quiz, the problem is abstract; after — concrete and measurable

### Nudge After the Aha Moment
Immediately after the aha moment — clear CTA. Even a 1-screen delay reduces conversion.
Example: Shock number → immediate button "Start your reboot"

---

## 6. Case Studies with Metrics

| Case | Mechanic | Result |
|------|----------|-----------|
| Noom | 67-step quiz, 3:1 cadence | $500M+ revenue |
| BedGear PillowID | Quiz-matcher | +490% conversion |
| Peak Wellness | Sauna quiz-matcher | 37X ROI |
| RANAVAT | "Find Your Royal Ritual" quiz | +294% conversion, 16% of revenue |
| Double Denim + Typeform | ROI calculator | $3.67M in sales |
| Obvi | Quiz redesign | 45% → 80% completion rate |
| Robinhood | Waitlist with position | 1M+ signups before launch |
| Duolingo | Streaks + badges + leagues | Retention 12% → 55% |
| Focus & Flow | Typological ADHD quiz | Monetization through $25 planner |
| Done. | 1-min screening | 60,000+ users |

---

## 7. Conversion Math

- Average landing page conversion: 2.35%
- Quiz landing page: up to 23% conversion (10x)
- Lead capture after engagement: up to 30%+
- Progress bar: +14% (Baymard), +42% (HubSpot)
- Sticky CTA: +10% conversion
- First-person CTA: +10 pp CTR
- Interactive landing page: up to 3x better than static
- Verbatim repetition on CTA: +10 pp
- Conversational pre-lander: +52% opt-in

---

## 8. Implementation Tools

| Task | Tools |
|--------|------------|
| Quiz funnels | Typeform, Heyflow, Interact, ScoreApp, Marquiz |
| Scrollytelling | Framer (no-code, scroll-triggered) |
| Gamified waitlist | LaunchList, Prefinery, Waitlister, QueueForm |
| Calculators | Typeform Logic, Outgrow, ConvertCalculator |
| A/B testing | Unbounce, Swipe Pages |
| Full custom (Next.js) | Next.js + Tailwind + Framer Motion + Vercel |
