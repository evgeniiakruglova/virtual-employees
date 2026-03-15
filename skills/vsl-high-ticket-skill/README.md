# VSL High Ticket — Claude Code Skill

A skill for Claude Code that generates VSL scripts (Video Sales Letters) for high-ticket products and services.

## What It Does

- Creates complete VSL scripts using a proven **15-block structure**
- Automatically determines the price segment (accessible / premium)
- Adapts style and techniques to the product type
- Includes reference transcripts from real sales presentations for natural speaking style

### Two Operating Modes

| | Accessible (up to ~200K RUB) | Premium (from ~200K RUB) |
|---|---|---|
| Positioning | "I was just like you" | Achievements and status |
| Social proof | Emotional reactions | Status names and numbers |
| Urgency | Market trends | Limited spots |
| Tiers | 3 levels | 1 premium |
| Guarantee | Refund for results | Participant selection |

## Installation

### Method 1: Via Claude Code Settings (recommended)

1. Download the ZIP archive of this repository: click the green **Code** button → **Download ZIP**
2. Open **Claude Code**
3. Go to **Settings**
4. Find the **Capabilities** → **Extensions** section
5. Click the **+** (plus) button
6. Upload the downloaded ZIP file
7. The skill will appear in the list of available commands

### Method 2: Manual Installation

Copy the files to your Claude Code skills folder:

```bash
# Clone the repository
git clone https://github.com/yasikvlad/vsl-high-ticket-skill.git

# Copy to the skills folder
cp -r vsl-high-ticket-skill ~/.claude/skills/vsl-high-ticket
```

## Usage

After installation, invoke the skill via a slash command:

```
/vsl-high-ticket Create a VSL for a course on AI, price 50,000 RUB, target audience - entrepreneurs
```

```
/vsl-high-ticket Write a sales video for mentorship at 1.5M RUB
```

```
/vsl-high-ticket Create a VSL for a launch intensive, 3 tiers: 30K / 70K / 150K
```

## File Structure

```
vsl-high-ticket-skill/
├── SKILL.md                              # Skill description and metadata
├── PROMPT.md                             # Full prompt with 15-block structure
├── references/
│   ├── matukhno_premium.md               # Reference: premium segment
│   └── dymshakov_intensive.md            # Reference: accessible segment
└── README.md                             # This file
```

## 15 VSL Script Blocks

1. Masterful opening and context
2. Creating the problem and expertise
3. Turning point and social proof
4. Live demonstration and proof
5. Market analysis and urgency
6. Positioning uniqueness
7. Visualizing the "before and after" contrast
8. Target audience and qualification
9. Program structure and methodology
10. Promises and specific results
11. Anti-selling and dispelling illusions
12. Formats, tiers, and anchoring
13. Pricing and ROI
14. Guarantees and risk reduction
15. Emotional close and CTA

## VSL Presentation Example

A ready-made example of a VSL presentation created with this skill:

**https://nizshaya-vsl.vercel.app/vsl.html**

## Recording the VSL Video

After generating the script, you need to record it. Recommended tools:

- **Zoom** — free screen + camera recording, suitable for quick recordings
- **Screen Studio** (macOS) — professional screen recording with automatic zoom, beautiful cursor effects, and high-quality export. Ideal for sales videos

## Author

Created for Claude Code by [Vlad Yasko](https://github.com/yasikvlad)
