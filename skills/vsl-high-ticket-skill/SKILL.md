---
name: vsl-high-ticket
description: |
  Creates VSL scripts (Video Sales Letters) for high-ticket products.
  15-block structure based on analysis of the best sales presentations.
  Adapts style to the price segment: accessible or premium.
allowed-tools:
  - Read
  - Write
  - Edit
  - AskUserQuestion
---

# VSL High Ticket - Sales Video Script Generator

## What the skill does:

Creates complete VSL scripts for high-ticket products and services using a proven 15-block sales presentation structure.

### Automatically:
- Determines the price segment (accessible / premium)
- Selects the positioning strategy
- Generates a complete script across 15 blocks
- Adapts techniques to the product type

## Usage:

```bash
/vsl-high-ticket Create a VSL for a course on AI, price 50,000 RUB, target audience - entrepreneurs
```

```bash
/vsl-high-ticket Write a sales video for mentorship at 1.5M RUB
```

```bash
/vsl-high-ticket Create a VSL for a launch intensive, 3 tiers: 30K / 70K / 150K
```

## Two operating modes:

### "Accessible" mode (up to ~200K RUB):
- Empathetic positioning ("I was just like you")
- Emotional reactions and natural speech
- Time contrasts (3 hours vs 10 minutes)
- Fear of replacement as a motivator
- 3 tiers with middle tier recommendation
- Unusual results guarantee

### "Premium" mode (from ~200K RUB):
- Positioning through achievements
- Status names and specific numbers
- Quality contrasts and transformations
- Exclusivity and personal selection
- 1 premium tier
- Quality guarantee through selection

## Files:

- `SKILL.md` - this description
- `PROMPT.md` - full prompt with 15-block structure and knowledge base
