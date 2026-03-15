# Narcissist Communication Expert (Standalone)

**An autonomous skill for safe communication with people with Narcissistic Personality Disorder (NPD).**

---

## What it does:

- Analyzes draft messages for dangerous trigger phrases
- Identifies the situation type (request, refusal, negotiation, conflict)
- Adapts the message based on built-in NPD psychology
- Provides ready-to-send text + detailed explanation
- Predicts DARVO and provides prepared responses

---

## Differences from narcissist-communication:

| Feature | narcissist-communication | narcissist-standalone |
|---------|-------------------------|----------------------|
| NotebookLM | Required | Not required |
| Knowledge base | External NotebookLM | Built-in |
| Speed | Slower (API requests) | Faster |
| Autonomy | Depends on NotebookLM | 100% autonomous |

---

## Usage:

### Check a draft:

```bash
/narcissist-standalone Check message: "Andrew, why aren't you responding about the money?"
```

### Adapt a message:

```bash
/narcissist-standalone Adapt: "I'm sick of your manipulations!"
```

### Help in conflict:

```bash
/narcissist-standalone How to respond if he accuses me of destroying the family?
```

### Analyze a received message:

```bash
/narcissist-standalone Andrew wrote: "You're selfish! The children are suffering because of you!" How to respond?
```

---

## Knowledge Base (built-in):

### 1. Forbidden Phrases (9 categories)
- Empathy and understanding
- Transferring control
- Demanding admission of guilt
- Demanding honesty
- Expressing pain/emotions
- Diagnosis/labeling
- Accusations and "why" questions
- Absolutist statements
- Excuses

### 2. Golden Rules
- What to do: facts, calmness, pauses, appeal to grandiosity, illusion of control
- What not to do: excuses, explanations, emotions, attempts to change

### 3. Situation Patterns
- **Request:** [Compliment] + [Request as an opportunity]
- **Refusal:** [Firm "no"] + [Fact]
- **Negotiation:** [Past fact] + [Present fact] + [Proposal]
- **Conflict:** [Name the manipulation] + [Stay calm] + [Return to topic]

### 4. Communication Techniques
- **Grey Rock** — minimum emotions
- **BIFF** (Brief, Informative, Friendly, Firm) — short firm responses
- **Broken Record** — repeating one question

### 5. Special Topics
- Financial manipulation (5 signs + tactics)
- Manipulation through children (4 signs + defense tactics)
- DARVO tactics (Deny-Attack-Reverse) — recognition + defense

---

## Response Format:

The skill always responds in a structured format:

```
WARNING - WHAT'S DANGEROUS IN THE DRAFT:
- [dangerous element] → [why it's a trigger]

SITUATION TYPE: [Request/Refusal/Negotiation/Conflict]

ADAPTED MESSAGE:
[ready-to-send text]

WHY THIS WORKS:
- [psychological explanation]

ALTERNATIVE VERSION:
[harder/softer version]

IF DARVO OCCURS:
[prediction + prepared response]
```

---

## Installation:

The skill is already installed in `~/.claude/skills/narcissist-standalone/`

If you don't see it in the skills list:

1. Restart Claude Code
2. Check in Settings → Skills

---

## Examples:

### Example 1: Financial Control

**Input:**
```
/narcissist-standalone Andrew wrote: "I help however I can. If you need something for the children — write what exactly. I'll decide whether to transfer or not."
```

**Output:**
```
WARNING - WHAT'S DANGEROUS:
- "I help" → child support = obligation, not help
- "I'll decide" → financial control
- "What exactly" → demanding a report

SITUATION TYPE: Negotiation (financial manipulation)

ADAPTED MESSAGE:
"Andrew, child support is not help — it's your obligation. What is the minimum amount you can transfer monthly? I expect a number by March 25."

WHY THIS WORKS:
- Establishes fact (obligation, not help)
- Specific question (no room for evasion)
- Deadline + consequence (control is in your hands)
```

---

### Example 2: DARVO

**Input:**
```
/narcissist-standalone Andrew accuses me of destroying the family. How to respond?
```

**Output:**
```
WARNING - WHAT'S HAPPENING:
- DARVO tactic: Deny-Attack-Reverse Victim/Offender
- Goal: to make you defend yourself

SITUATION TYPE: Conflict (DARVO)

ADAPTED MESSAGE:
"I'm not discussing the past. We're discussing child support. I expect the amount by March 25."

WHY THIS WORKS:
- Refusing to defend (no fuel)
- Returning to topic (ignoring provocation)
- Deadline (keeping control)

IF THEY KEEP PUSHING:
Broken Record:
"We're discussing child support. I expect the amount by March 25."
"We're discussing child support. I expect the amount by March 25."
"We're discussing child support. I expect the amount by March 25."
```

---

## Safety Checklist:

Before sending any message to a narcissist, check:

- [ ] No forbidden phrases?
- [ ] No emotions?
- [ ] No excuses?
- [ ] Has a specific question or demand?
- [ ] Has a deadline?
- [ ] Has consequences for violation?
- [ ] Message is short (< 5 sentences)?
- [ ] Tone is neutral (BIFF)?

---

## Goal:

**Not to change the narcissist (probability < 5%), but to protect yourself.**

---

## Support:

If the skill doesn't work:

1. Check installation: `ls -la ~/.claude/skills/narcissist-standalone/`
2. Restart Claude Code
3. Check logs: `~/.claude/logs/`

---

## License:

MIT License — use freely.

---

**Author:** Yakov Yasko
**GitHub:** https://github.com/yasikvlad/narcissist-communication-skill
