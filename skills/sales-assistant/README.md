# Sales Assistant — A Skill for Claude Code

AI assistant for sales managers in messaging. Analyzes conversations, suggests response options, handles objections, guides to payment.

Sofia Dobrynina's methodology + SPIN selling + analysis of 50+ real conversations.

---

## What It Can Do

- **Help respond to a client** — determines the sales stage, lead temperature, suggests 3 response options (soft / confident / direct)
- **Analyze conversations** — finds mistakes, shows where things stalled, suggests reactivation
- **Create scripts** — templates with variables for any niche
- **Handle objections** — "too expensive," "I'll think about it," silence, "I need to check with someone"
- **Guide to payment** — step-by-step deal closing sequence

---

## Response Format

```
📍 STAGE: Qualification
🌡 TEMPERATURE: Warm — asks specific questions, reviewed content

🔍 PAIN ANALYSIS:
- Identified: needs results fast, already tried on their own
- To find out: budget, timeline, who makes decisions
- Triggers: case from their niche, limited spots

💬 OPTION 1 — Soft:
[text]

💬 OPTION 2 — Confident:
[text]

💬 OPTION 3 — Direct:
[text]

📝 WHY THIS APPROACH:
Applying SPIN question type P (problem) + alternative question

⚡ NEXT STEP:
In 1 day, if silent: case study on their topic
```

---

## What's Inside

| File | Content |
|------|---------|
| `SKILL.md` | Skill core — role, SPIN, temperature, qualification, format, checklist |
| `01_МЕТОДОЛОГИЯ_ПРОДАЖ.md` | Complete methodology: 13 parts, stages, psychology, 20 anti-patterns, phrase library |
| `02_ПРАВИЛА_ОБЩЕНИЯ.md` | Guidelines: emotional tone, 3-second rule, message structure |
| `03_УСПЕШНЫЕ_ПЕРЕПИСКИ.md` | 4 analyzed cases (B2B, B2C, reactivation, consulting) with techniques |
| `04_ИНСТРУКЦИЯ_АССИСТЕНТА.md` | Work scenarios, SPIN, temperature, qualification, follow-up timing |

---

## Key Techniques

### Messaging Formula
**Goal → Questions → Solution → Action**

### SPIN Questions
| Type | Purpose |
|------|---------|
| **S** — Situation | Understand context |
| **P** — Problem | Identify the pain |
| **I** — Implication | Amplify awareness |
| **N** — Need-Payoff | Client articulates value themselves |

### Lead Temperature
| Temperature | Strategy |
|-------------|----------|
| Cold | Provide value, don't push, light question |
| Warm | Qualification, personalized offer |
| Hot | Don't delay, close quickly |

### Iron Rules
- Question at the end of EVERY message
- Maximum one phone screen
- Talk about the CLIENT, not about yourself
- Value → Cost → Question
- Lightness, lively language

---

## Installation

### Option 1: Copy to Project
```bash
# Clone
git clone https://github.com/yasikvlad/sales-assistant.git

# Copy to your project
cp -r sales-assistant/ your-project/.claude/skills/sales-assistant/
```

### Option 2: Global Installation (for all projects)
```bash
cp -r sales-assistant/ ~/.claude/skills/sales-assistant/
```

### Adapting to Your Business

Create files in the skill folder:

| File | Purpose |
|------|---------|
| `ПРОДУКТ_И_ОФФЕР.md` | **Required.** Product, prices, plans, advantages |
| `TONE_OF_VOICE.md` | Brand communication style (formal/informal, emojis, phrases) |
| `ЭТАПЫ_ПРОДАЖ_БИЗНЕСА.md` | Unique funnel stages |
| `ПРАВИЛА_ДИАГНОСТИКИ.md` | Qualification criteria for high-ticket |

---

## How to Use

Claude automatically picks up the skill. Just say:

```
Help me respond to a client: "How much does your course cost?"
```

```
Analyze this conversation: [screenshot or text]
```

```
Create a script for handling the "too expensive" objection in the online education niche
```

```
The client has been silent for 5 days after I sent the price. What should I write?
```

---

## Methodology

Synthesized from:
- Sofia Dobrynina's messaging sales methodology
- Expert materials from Vitaliy Govorukhin, Alexander Matsko
- SPIN Selling (Neil Rackham)
- Analysis of 50+ real conversations from various niches (B2B, B2C, info products, services)

---

## Author

**Vladislav Yasko** — AI marketer, producer

---

## License

MIT
