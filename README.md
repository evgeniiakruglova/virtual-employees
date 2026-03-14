# Virtual Employees

Working AI tools. Not demos. Take it — use it.

A collection of 20 AI skills for marketing, sales, content, and development. Original: [virtual-employees-kappa.vercel.app](https://virtual-employees-kappa.vercel.app/)

---

## Skill Catalog

### Product
| Tool | Description | Type |
|---|---|---|
| **Offer Assistant** | Offers in the style of Alex Hormozi's $100M Offers | Claude Project |
| **Presentation Assistant** | Structure and content for sales presentations | Coming Soon |
| **Perfect Slides** | Slide prototypes for presentations | Coming Soon |
| **Offer by Vlad** | Offer packaging in Vlad Yasko's style | Coming Soon |

### Audience
| Tool | Description | Type |
|---|---|---|
| **Client DNA** | Deep target audience and pain point analysis | Claude Project |
| **Ben Hunt's Ladder** | Audience needs through the awareness ladder | Claude Project |

### Funnels
| Tool | Description | Type |
|---|---|---|
| **Ben Hunt Warm-ups** | Warming sequences by stages | Claude Project |
| **Quiz Funnel** | Personalized quiz funnels for any product | Claude Code Skill |

### Marketing
| Tool | Description | Type |
|---|---|---|
| **Conversion Creatives** | Static, video, Reels — with AI prompts for all platforms | Claude Code Skill |

### Content
| Tool | Description | Type |
|---|---|---|
| **Conversion Stories** | Sales story sequences | Coming Soon |
| **Text Humanizer** | Removes AI cliches, bureaucratese, and fluff | Claude Code Skill |
| **Tone of Voice** | Reverse-engineering a speaker's voice | Claude Code Skill |
| **Creative Director** | AI creative director for visual projects | Claude Code Skill |

### Sales
| Tool | Description | Type |
|---|---|---|
| **VSL Video Assistant** | VSL script generation using a 15-block structure | Claude Code Skill |
| **Vlad's Sales Star** | Sales manager with a premium approach | Claude Code Skill |

### YouTube
| Tool | Description | Type |
|---|---|---|
| **YouTube Expert Style** | Expert videos in Vlad Yasko's style | Claude Project |
| **YouTube Ideas** | Ideas and titles for YouTube | Coming Soon |

### Tools
| Tool | Description | Type |
|---|---|---|
| **NanoBanana Pro** | Prompt engineering master for AI image generation | Claude Code Skill |
| **Narcissist Communication** | Message adaptation based on narcissism psychology | Claude Code Skill |

### Development
| Tool | Description | Type |
|---|---|---|
| **Skill Conductor** | Creating, editing, and evaluating skills | Claude Code Skill |

---

## Repository Structure

```
virtual-employees/
├── instructions/          # Instructions for Claude Project
│   ├── hormozi-*.txt      # Offer Assistant
│   ├── client-dna-*.txt   # Client DNA
│   ├── ben-hunt-*.txt     # Ben Hunt's Ladder
│   ├── sales-star.txt     # Sales Star
│   └── youtube-expert.txt # YouTube Expert
├── skills/                # Claude Code skills (GitHub repositories)
│   ├── hormozi-offer/
│   ├── client-dna-v2/
│   ├── hunt-ladder/
│   ├── creative-ads/
│   ├── vsl-high-ticket-skill/
│   ├── nbp-skill/
│   ├── narcissist-standalone/
│   ├── quiz-funnel/
│   ├── humanizer-ru/
│   ├── skill-conductor/
│   ├── creative-director-skill/
│   └── sales-assistant/
├── index.html             # Web interface
├── data.js                # All skills data
├── app.js                 # Application logic
└── styles.css             # Styles
```

---

## How to Use

### Claude Project (instructions)
1. Open a file from the `instructions/` folder
2. Copy the contents into your Claude project settings
3. Follow the instructions inside the file

### Claude Code Skill (skills)
1. Open the desired skill folder in `skills/`
2. Follow the README inside each skill for installation

---

Original author: **Vlad Yasko**
