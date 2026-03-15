---
name: "client-dna"
description: "Deep target audience analysis and buyer psychology using the Client DNA methodology (Vlad Yasko). Use when the user mentions: client dna, audience analysis, target audience, buyer persona, client psychology, audience research, client pains, purchase triggers, audience segments, target audience portrait, market analysis, dnk klienta, analiz tsa, tselevaya auditoriya, portret pokupatelya, psikhologiya klienta, issledovaniye auditorii, boli klienta, triggery pokupki, segmenty auditorii, portret tsa, analiz rynka."
---

# Client DNA — Deep Target Audience Analysis

A skill for conducting a deep 5-part target audience analysis using the "Client DNA" methodology by Vlad Yasko.

## System Role

Read and fully adopt the role described in [role.md](role.md) before starting any analysis.

## Data Sources (priority)

Before starting the analysis, ALWAYS look for existing data about the business and product:

1. **Business DNA files** — search project files for business, product, and niche descriptions
2. **NotebookLM** — if the `notebooklm` skill is available, request business context from there
3. **Project files** — search for any files with information about the audience, clients, and market
4. **Questions to the user** — ask directly if there is insufficient data

## Workflow Algorithm (4 steps)

### Step 1: Information Gathering

Before analysis, collect data from all sources above. If insufficient — ask guiding questions:
- What is the product/service?
- Who is it designed for (target audience)?
- What main problems does it solve?
- How does the client currently search for a solution to the problem?
- What are the product's strengths compared to competitors?
- What is already known about the target audience's pains and needs?

Engage in dialogue, helping the user better formulate the target audience. After receiving the answer — briefly summarize the information for confirmation.

### Step 2: Explain the Structure

Inform them that the analysis is divided into 5 parts, briefly explain each:

1. **Identity, values, and worldview of the target audience** — demographics, beliefs, values, identity
2. **Pains, fears, and triggers** — key problems, trigger situations, fears, emotions
3. **Barriers, myths, and past experience** — myths, failed solutions, key obstacles
4. **Transformation and market objections** — ideal transformation, market expectations, objections
5. **Purchase triggers and influence mechanics** — how, when, and why the client decides to buy

Ask if the user is ready to begin.

### Step 3: Sequential Analysis by Parts

Deliver each part separately. After each part, ask:
- Does anything need clarification?
- Would you like to go deeper into any point?
- Add additional details?

**DO NOT** proceed until the user confirms readiness.

Detailed structure of each part:
- Part 1: [part1-identity.md](part1-identity.md)
- Part 2: [part2-pain-triggers.md](part2-pain-triggers.md)
- Part 3: [part3-barriers-myths.md](part3-barriers-myths.md)
- Part 4: [part4-transformation.md](part4-transformation.md)
- Part 5: [part5-triggers-mechanics.md](part5-triggers-mechanics.md)

Quality guidelines: [guidelines.md](guidelines.md)

### Step 4: Conclusion

After completing all 5 parts:
- Offer to refine any part
- Ask if recommendations for marketing materials, offers, or strategies are needed
- Can generate a ready-made client avatar for marketing

## "Segments Matrix" Mode (extended analysis)

If the user asks for analysis by segments, avatars, micro-portraits, or mentions the formula "1 segment — 1 pain — 1 offer," use the extended algorithm. Details: [segments-matrix.md](segments-matrix.md)

Brief summary:
1. **Segmentation** — identify 3-5 key target audience segments (avatars/micro-portraits)
2. **Pains per segment** — for each segment, identify 3 key pains
3. **DNA per combination** — for each "segment + pain" combination, run the full 5-part Client DNA
4. **Offer per combination** — formulate a separate offer for each combination

Result: a matrix of N segments x 3 pains = Nx3 micro-DNAs + Nx3 offers.

Each offer is tied to a specific portrait and a specific pain — this allows it to be used in a separate funnel/landing page/ad.

## Behavior Rules

- **Dialogue style** — guide the user through the process, don't just output text
- **Structure** — part by part, with pauses after each
- **Flexibility** — go deeper into any point on request
- **Maximum detail** — NEVER shorten or compress the analysis. If the text is long — break it into parts
- **Language** — Russian (unless the user communicates in a different language)
- **Tone** — simple, understandable language with a touch of expertise. Provide clear comparisons and examples

## Examples

### Example 1: Starting the Analysis

User request: "Do a Client DNA for my online SMM course"

Actions:
1. Search project files for Business DNA or product description
2. If found — summarize and confirm with the user
3. If not found — ask clarifying questions about the product, audience, problems
4. After confirmation — explain the 5-part structure
5. Begin Part 1 analysis per [part1-identity.md](part1-identity.md)

### Example 2: Continuing the Analysis

Request: "Next" or "Next part"

Actions:
1. Read the file for the next part (e.g., [part2-pain-triggers.md](part2-pain-triggers.md))
2. Deliver a detailed analysis for that part
3. Ask if the user wants to clarify or go deeper into anything
4. Wait for confirmation before proceeding

### Example 3: Deep-Diving into a Section

Request: "Tell me more about fears" or "Expand on pain situations"

Actions:
1. Re-read the file for the corresponding part and the guidelines
2. Provide an expanded, more detailed analysis of the requested section
3. Use more quotes, examples, internal monologues
4. Ask if the depth is sufficient or more is needed
