const SKILLS = [
  {
    id: "hormozi-offer",
    name: "Offer Assistant",
    description: "Offers in the style of Alex Hormozi's $100M Offers",
    detail: "Your personal offer strategist, trained on the complete book <strong>$100M Offers</strong> by Alex Hormozi.<br><br>Analyzes your product, finds a hungry market with purchasing power, formulates the <strong>value equation</strong> across 4 factors: dream outcome, perceived likelihood of achievement, speed, and client effort.<br><br>Generates a full package of enhancers: scarcity, urgency, bonuses, guarantees. Creates compelling names using the <strong>M-A-G-I-C</strong> formula. Includes 5 methodology sections, offer examples for different niches, and a ready-made sales page template.<br><br>One offer like this can change the economics of an entire business.",
    category: "product",
    categoryLabel: "Product",
    stream: "Intro Lesson",
    type: "claude-project",
    instruction: {
      file: "instructions/hormozi-instruction.txt",
      label: "Instructions for Claude Project"
    },
    materials: [
      { label: "Instructions (project setup)", type: "file", file: "instructions/hormozi-instruction.txt" },
      { label: "Full $100M Offers Methodology (5 sections)", type: "file", file: "instructions/hormozi-methodology.txt" },
      { label: "All-in-one file (instructions + methodology)", type: "file", file: "instructions/hormozi-offer.txt" }
    ],
    skillDownload: {
      label: "Hormozi Offer Skill",
      url: "https://github.com/yasikvlad/hormozi-offer"
    }
  },
  {
    id: "client-dna",
    name: "Client DNA",
    description: "Deep target audience and pain point analysis",
    detail: "The world's best specialist in deep audience research with 50 years of experience. A proprietary methodology by <strong>Vlad Yasko</strong>, tested on 220+ projects and 3,500+ students.<br><br>Conducts a <strong>5-part analysis</strong>:<br>1. Identity, values, and worldview of the target audience<br>2. Pain points, fears, and decision triggers<br>3. Barriers, past experience, and why the client is stuck<br>4. Magical transformation and market expectations<br>5. Triggers, decision points, and influence mechanics<br><br>Speaks the client's language at a subconscious level — knows all cognitive biases, hidden motives, and emotional purchase triggers. After the analysis, you'll know more about your client than they know about themselves.",
    category: "audience",
    categoryLabel: "Audience",
    stream: "Intro Lesson",
    type: "claude-project",
    instruction: {
      file: "instructions/client-dna-role.txt",
      label: "Prompt for Claude (main role)"
    },
    materials: [
      { label: "Main role (system prompt)", type: "file", file: "instructions/client-dna-role.txt" },
      { label: "Part 1: Identity and values of the target audience", type: "file", file: "instructions/client-dna-part1.txt" },
      { label: "Part 2: Pain points, fears, and triggers", type: "file", file: "instructions/client-dna-part2.txt" },
      { label: "Part 3: Barriers and past experience", type: "file", file: "instructions/client-dna-part3.txt" },
      { label: "Part 4: Transformation and expectations", type: "file", file: "instructions/client-dna-part4.txt" },
      { label: "Part 5: Triggers and influence mechanics", type: "file", file: "instructions/client-dna-part5.txt" },
      { label: "Analysis guide", type: "file", file: "instructions/client-dna-guide.txt" },
      { label: "All-in-one file", type: "file", file: "instructions/client-dna.txt" }
    ],
    skillDownload: {
      label: "Client DNA v2 Skill (Claude Code)",
      url: "https://github.com/yasikvlad/client-dna-v2"
    }
  },
  {
    id: "ben-hunt-ladder",
    name: "Ben Hunt's Ladder",
    description: "Audience needs through the awareness ladder",
    detail: "The most powerful strategic tool for launches and warm-ups.<br><br>Analyzes your product through <strong>6 levels of Hunt's Ladder</strong> — from 'I don't know the problem exists' to 'ready to buy right now.'<br><br>For each level it provides:<br>— what the audience thinks right now<br>— what illusions and objections live in their heads<br>— what meanings need to be planted<br>— what conclusions they should reach<br>— what content to broadcast<br><br>The output is a complete <strong>launch strategy</strong> with a warm-up calendar plan. Includes the ideal warm-up formula, examples of logical transformation chains, and a benchmark analysis.",
    category: "audience",
    categoryLabel: "Audience",
    stream: "Intro Lesson",
    type: "claude-project",
    instruction: {
      file: "instructions/ben-hunt-instruction.txt",
      label: "Instructions for Claude Project"
    },
    materials: [
      { label: "Instructions (project setup)", type: "file", file: "instructions/ben-hunt-instruction.txt" },
      { label: "Awareness ladder methodology", type: "file", file: "instructions/ben-hunt-methodology.txt" },
      { label: "Warm-up templates and examples", type: "file", file: "instructions/ben-hunt-templates.txt" },
      { label: "All-in-one file", type: "file", file: "instructions/ben-hunt-ladder.txt" }
    ],
    skillDownload: {
      label: "Hunt Ladder Skill",
      url: "https://github.com/yasikvlad/hunt-ladder"
    }
  },
  {
    id: "ben-hunt-warmup",
    name: "Ben Hunt Warm-ups",
    description: "Warming sequences by stages",
    detail: "Turns a cold audience into hot buyers through systematic warm-up.<br><br><strong>Three phases:</strong><br>— Shadow warm-up: awakening problem awareness<br>— Active warm-up: positioning + social proof<br>— Final warm-up: sales + urgency<br><br>Maps messaging to a calendar, selects content formats for each stage, accounts for the psychology of transitioning between awareness levels. Built on Ben Hunt's Ladder methodology.",
    category: "funnels",
    categoryLabel: "Funnels",
    stream: "Intro Lesson",
    type: "claude-project",
    instruction: {
      file: "instructions/ben-hunt-ladder.txt",
      label: "Methodology (shared with Hunt's Ladder)"
    },
    materials: [],
    skillDownload: null
  },
  {
    id: "creative-ads",
    name: "Conversion Creatives",
    description: "Static, video, Reels — with AI prompts for all platforms",
    detail: "Full cycle of ad creative production — from strategy to ready-made generation prompts. <strong>8-step algorithm</strong>, 3 methodologies, 13 knowledge base files.<br><br><strong>Formats:</strong> static, video, animation, Reels/TikTok<br><strong>AI tools:</strong> Midjourney, DALL-E, Nano Banana Pro, Higgsfield, Runway<br><strong>Platforms:</strong> Meta, TikTok, YouTube, any ad platforms<br><br><strong>3 methodologies:</strong><br>— Client DNA (deep audience segments and pain points)<br>— Ben Hunt's Ladder (5 awareness stages → different creative types)<br>— Alex Hormozi $100M Offers (value equation in every copy)<br><br><strong>Reels/TikTok module for webinars:</strong> 12 hook types, 4 CTA categories, FOMO system through tool unawareness, 'video + structured description' format. Built on Deep Research (13 sources, 2025-2026).<br><br>Generates A/B variations, retargeting chains (3 stages), complete ad units ready-to-upload to Ads Manager.",
    category: "marketing",
    categoryLabel: "Marketing",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Creative Ads Skill",
      url: "https://github.com/yasikvlad/creative-ads"
    }
  },
  {
    id: "conversion-stories",
    name: "Conversion Stories",
    description: "Sales story sequences",
    detail: "Creates sales story sequences for Instagram that warm up the audience and close them for purchase.<br><br><strong>Capabilities:</strong><br>— Structures warm-ups by days and messaging<br>— Crafts compelling hooks for each slide<br>— Writes CTAs aligned with the funnel stage<br><br><strong>Formats:</strong> polls, text slides, talking head video, carousel series. Adapts delivery to the niche and expert style.",
    category: "content",
    categoryLabel: "Content",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "presentation-assistant",
    name: "Presentation Assistant",
    description: "Structure and content for sales presentations",
    detail: "Creates structure and content for sales presentations — from the first slide to the final call to action.<br><br><strong>Formats:</strong><br>— Webinar presentation (selling through content)<br>— Pitch deck (for investors and partners)<br>— Commercial proposal (B2B sales)<br><br>Designs the narrative arc, visual hierarchy, text blocks, and transitions between slides. The output is a ready-made structure with content for each slide.",
    category: "product",
    categoryLabel: "Product",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "vsl-video",
    name: "VSL Video Assistant",
    description: "VSL script generation using a 15-block structure",
    detail: "Creates killer VSL scripts (Video Sales Letters) for high-ticket products.<br><br><strong>15-block structure</strong>, refined through analysis of the best sales video presentations. From hook to final CTA — every block is built for conversion.<br><br>Adapts tone, pacing, and emotional triggers to the price segment. Generates a complete script with timecodes, visual cues, and transitions.",
    category: "sales",
    categoryLabel: "Sales",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "VSL High-Ticket Skill",
      url: "https://github.com/yasikvlad/vsl-high-ticket-skill"
    }
  },
  {
    id: "perfect-slides",
    name: "Perfect Slides",
    description: "Slide prototypes for presentations",
    detail: "Generates slide prototypes for presentations with thoughtful structure and visual hierarchy.<br><br><strong>Capabilities:</strong><br>— Ready-made PPTX files with text and layouts<br>— Automatic structure by presentation type<br>— Visual hierarchy and typography<br><br>From idea to finished file — just describe the topic and format to get a fully designed presentation.",
    category: "product",
    categoryLabel: "Product",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "sales-star",
    name: "Vlad's Sales Star",
    description: "Sales manager with a premium approach",
    detail: "Your virtual sales manager with a premium approach. Doesn't push — sells through value.<br><br><strong>Capabilities:</strong><br>— SPIN selling and client pain point analysis<br>— 3 response options for each message<br>— Follow-up timing and closing strategy<br>— Handling any objection<br><br>Trained on Sofia Dobrynina's methodology and real successful conversations. Analyzes the dialogue, finds influence points, crafts responses that move toward payment.",
    category: "sales",
    categoryLabel: "Sales",
    stream: "",
    type: "claude-code-skill",
    instruction: {
      file: "instructions/sales-star.txt",
      label: "Full instructions + methodology"
    },
    materials: [
      { label: "Sales methodology (SPIN)", type: "included" },
      { label: "Communication rules", type: "included" },
      { label: "Successful conversations (examples)", type: "included" }
    ],
    skillDownload: {
      label: "Sales Assistant Skill",
      url: "https://github.com/yasikvlad/sales-assistant"
    }
  },
  {
    id: "youtube-expert",
    name: "YouTube Expert Style",
    description: "Expert videos in Vlad Yasko's style",
    detail: "Creates expert YouTube videos that bring in millions in clients. Reverse engineering of <strong>Vlad Yasko's</strong> style.<br><br><strong>Video structure:</strong><br>— Provocative intro with a hook<br>— Modular delivery with 6 elements<br>— Attention retention techniques for 30+ minutes<br>— Built-in diagnostic tools<br>— Multi-level calls to action<br><br>Includes a universal template + full transcription of a benchmark video for AI training.",
    category: "youtube",
    categoryLabel: "YouTube",
    stream: "Intro Lesson",
    type: "claude-project",
    instruction: {
      file: "instructions/youtube-expert.txt",
      label: "Instructions + universal template"
    },
    materials: [
      { label: "Video transcription 'Info Business at 100M+ per year'", type: "included" }
    ],
    skillDownload: null
  },
  {
    id: "youtube-ideas",
    name: "YouTube Ideas",
    description: "Ideas and titles for YouTube",
    detail: "Generates ideas for expert YouTube videos that attract the target audience and convert to clients.<br><br><strong>What it does:</strong><br>— Selects topics based on niche and audience analysis<br>— Crafts compelling titles with high CTR<br>— Suggests thumbnail structure<br>— Evaluates virality potential of each idea<br><br>Works at the intersection of SEO, click psychology, and expert positioning.",
    category: "youtube",
    categoryLabel: "YouTube",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "offer-by-vlad",
    name: "Offer by Vlad",
    description: "Offer packaging in Vlad Yasko's style",
    detail: "A proprietary offer packaging methodology by <strong>Vlad Yasko</strong>, tested on 220+ projects.<br><br><strong>How it differs from Hormozi:</strong><br>— Focus on expert positioning, not just price<br>— Unique mechanism as the core of the offer<br>— Client transformation instead of a feature list<br><br>Creates offers where the client sees not a service, but a path to results. Ideal for experts, coaches, and producers.",
    category: "product",
    categoryLabel: "Product",
    stream: "",
    type: "coming-soon",
    instruction: null,
    materials: [],
    skillDownload: null
  },
  {
    id: "humanizer",
    name: "Text Humanizer",
    description: "Removes AI cliches, bureaucratese, and fluff",
    detail: "A ruthless Russian text editor. Transforms stiff, watery text into lively, specific, and human writing.<br><br><strong>Cleans out:</strong> bureaucratese, fluff, cliches, passive constructions, 'it's important to note' and other AI junk.<br><br><strong>21 detection patterns</strong> + strict negative rules. After processing, the text is indistinguishable from one written by a professional copywriter. Skill by @smixs.",
    category: "content",
    categoryLabel: "Content",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Humanizer-RU Skill",
      url: "https://github.com/smixs/humanizer-ru"
    }
  },
  {
    id: "nanobanana-pro",
    name: "NanoBanana Pro",
    description: "Custom working skills set for Claude Code",
    detail: "A prompt engineering master for AI image generation via <strong>Gemini 3 Pro Image</strong>.<br><br><strong>Capabilities:</strong><br>— Infographics, diagrams, data visualization<br>— Presentation slides and design mockups<br>— Photo editing and colorization<br>— 2D↔3D conversion, storyboards<br>— Consistent characters and product photography<br><br>A set of 9 specialized reference files. Turns Claude Code into a full-fledged design studio.",
    category: "tools",
    categoryLabel: "Tools",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "NBP Skill",
      url: "https://github.com/yasikvlad/nbp-skill"
    }
  },
  {
    id: "quiz-funnel",
    name: "Quiz Funnel",
    description: "Personalized quiz funnels for any product",
    detail: "Generates a complete turnkey quiz funnel.<br><br><strong>What it creates:</strong><br>— 20+ quiz screens with smart scoring<br>— Cost calculator for your product<br>— Personalized results by segments<br>— Ready technical specification for Next.js<br><br>Analyzes the product and target audience, selects the optimal question structure. Reverse engineering of the best quiz funnels on the market.",
    category: "funnels",
    categoryLabel: "Funnels",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Quiz Funnel Skill",
      url: "https://github.com/yasikvlad/quiz-funnel"
    }
  },
  {
    id: "tone-of-voice",
    name: "Tone of Voice",
    description: "Reverse-engineering a speaker's voice",
    detail: "Extracts a speaker's unique voice from any transcript — speech, podcast, sales video, webinar.<br><br><strong>Output — a ready-made style guide:</strong><br>— Characteristic phrases and vocabulary<br>— Speech rhythm and tempo<br>— Emotional patterns<br>— Forbidden constructions<br><br>After this, any AI text sounds like your own voice. An indispensable tool for delegating content.",
    category: "content",
    categoryLabel: "Content",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Tone of Voice Reverse Skill",
      url: "https://github.com/anthropics/claude-code"
    }
  },
  {
    id: "narcissist",
    name: "Narcissist Communication",
    description: "Message adaptation based on narcissism psychology",
    detail: "Your personal psychologist-negotiator for communicating with narcissists.<br><br><strong>Automatically detects:</strong><br>— Gaslighting and devaluation<br>— DARVO (Deny, Attack, Reverse Victim and Offender)<br>— Manipulative patterns in conversations<br><br>Adapts your responses based on a deep knowledge base of NPD psychology. Protects from emotional traps while maintaining constructive dialogue. Built-in knowledge base — works fully autonomously.",
    category: "tools",
    categoryLabel: "Tools",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Narcissist Standalone Skill",
      url: "https://github.com/yasikvlad/narcissist-standalone"
    }
  },
  {
    id: "skill-conductor",
    name: "Skill Conductor",
    description: "Creating, editing, and evaluating skills",
    detail: "A meta-skill for working with Claude Code skills.<br><br><strong>Full cycle:</strong><br>— Creating new skills from scratch<br>— Editing and improving existing ones<br>— Running evaluations for testing<br>— Performance benchmarking<br><br>From idea to production-ready package. Skill by @smixs.",
    category: "dev",
    categoryLabel: "Development",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Skill Conductor",
      url: "https://github.com/smixs/skill-conductor"
    }
  },
  {
    id: "creative-director",
    name: "Creative Director",
    description: "AI creative director for visual projects",
    detail: "Your personal creative director with art direction skills.<br><br><strong>Capabilities:</strong><br>— Visual project strategy<br>— Moodboard and style guide generation<br>— Brand consistency control<br>— Art direction for AI generation<br><br>Works as the bridge between idea and visual execution. Skill by @smixs.",
    category: "content",
    categoryLabel: "Content",
    stream: "",
    type: "claude-code-skill",
    instruction: null,
    materials: [],
    skillDownload: {
      label: "Creative Director Skill",
      url: "https://github.com/smixs/creative-director-skill"
    }
  }
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "audience", label: "Audience" },
  { id: "funnels", label: "Funnels" },
  { id: "marketing", label: "Marketing" },
  { id: "content", label: "Content" },
  { id: "sales", label: "Sales" },
  { id: "youtube", label: "YouTube" },
  { id: "tools", label: "Tools" },
  { id: "dev", label: "Development" }
];
