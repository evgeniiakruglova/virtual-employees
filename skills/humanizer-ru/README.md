# Humanizer RU

A skill for Claude Code that removes signs of AI generation from Russian text, making it lively and human.

## Installation

### Recommended Method

```bash
git clone https://github.com/smixs/humanizer-ru.git ~/.claude/skills/humanizer-ru
```

### Manual Installation

```bash
mkdir -p ~/.claude/skills/humanizer-ru
curl -o ~/.claude/skills/humanizer-ru/SKILL.md https://raw.githubusercontent.com/smixs/humanizer-ru/main/SKILL.md
```

## Usage

In Claude Code:

```
/humanizer-ru

[paste your text]
```

Or simply ask:

```
Humanize this text: [your text]
```

## 21 Patterns of AI Text

### Bureaucratic Language
1. Verbal nouns instead of verbs
2. Chains of genitive cases
3. Copula Avoidance (avoiding "is"/"are")
4. Passive constructions instead of active ones
5. Foreign words where native equivalents exist

### AI Vocabulary and Padding
6. Overloaded words (AI Vocabulary)
7. Inflating significance and fame
8. Shallow analysis with nominalizations
9. Promotional language
10. Weasel Words (vague attributions)
11. Template transitions
12. Formulaic conclusions about "challenges and prospects"

### Structural
13. Negative parallelisms [HARD BAN]
14. Rule of three
15. Elegant variation (Synonym Cycling)
16. False ranges

### Tone and Communication
17. Sycophantic tone (Sycophancy)
18. Chatbot artifacts
19. Hedging (over-cautioning)
20. Generic positive conclusions
21. Emojis and excessive formatting

## Hard Bans

- "not just X, but Y"
- "not only X, but also Y"
- em dash " — " (use only short dash "-")
- rhetorical questions

## Example

**Before:**
> It is important to note that in today's world, digital transformation represents a key factor in business development. Our company is a market leader and provides high-quality services. We hope this information was helpful!

**After:**
> We automate business processes. In 2025, we implemented CRM in 40 companies - on average this reduced routine work time by 30%. Clients come back: 70% place repeat orders.

## Sources

Inspired by the [humanizer](https://github.com/blader/humanizer) project by [@blader](https://github.com/blader).

Also used materials from:
- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
- [Wikipedia (Russian): Signs of AI-generated text](https://ru.wikipedia.org/wiki/Википедия:Признаки_сгенерированности_текста)

## License

MIT
