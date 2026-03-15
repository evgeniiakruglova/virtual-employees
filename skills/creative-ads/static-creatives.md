# Static Creative Templates

Use this file to generate AI prompts for static advertising images. Each template adapts to a specific segment, pain point, and awareness level.

## 5 Types of Visuals

### 1. Lifestyle (person in a situation)

**When to use:** Pain-agitate (levels 0-1), Transformation (levels 2-4), Trigger-moment (levels 0-2)

**Prompt structure:**
```
[Person description: age, gender, appearance from DNA portrait], [action/situation from DNA pain scenario], [location: specific place], [lighting: matches the emotion], [style: documentary/editorial/candid photography], [camera: Canon/Sony + lens], [depth of field], [color palette: matches the emotion], [mood] --ar [per platform] --v 6.1 --style raw --no text watermark logo
```

**Template for pain (pain-agitate):**
```
A [age]-year-old [gender] [action from pain scenario], [environment details from DNA], [emotional details: facial expression, posture], intimate documentary photography style, [camera] [lens], shallow depth of field, [cold/muted palette], [mood: melancholic/anxious/exhausted] --ar [ratio] --v 6.1 --style raw --no text watermark logo
```

**Template for transformation:**
```
A [age]-year-old [gender] [action from ideal DNA transformation], [bright, positive location], [confident posture, smile, energy], lifestyle editorial photography, [camera] [lens], golden hour lighting, [warm/bright palette], [mood: empowered/confident/joyful] --ar [ratio] --v 6.1 --style raw --no text watermark logo
```

### 2. Text-heavy (minimalist background + large text)

**When to use:** Myth-busting (levels 1-3), FOMO (levels 0-1), Urgency (levels 4-5)

**Prompt structure:**
```
Minimalist [color] gradient background, clean modern design, soft lighting, no objects, [texture: subtle grain/smooth/bokeh], professional advertising backdrop --ar [ratio] --v 6.1 --no text watermark logo people
```

**Texts on the image (overlaid in editor):**
- Headline: large, centered or upper third
- Subheadline: smaller, below the headline
- CTA: contrasting button, lower third

### 3. Before-After (split composition)

**When to use:** Transformation (levels 2-4), Myth-busting (levels 2-3)

**Prompt structure:**
```
Split image composition, left side: [description of "before" situation from DNA — pain, fatigue, problem], right side: [description of "after" situation from ideal DNA transformation], [photography style], clear visual contrast between both sides, same person in both, [palette: cold left / warm right] --ar [ratio] --v 6.1 --style raw --no text watermark logo
```

### 4. Testimonial / UGC Style

**When to use:** Social proof (levels 3-5), UGC (all levels)

**Prompt structure for UGC:**
```
Selfie-style photo of a [age]-year-old [gender] [emotion: happy/relieved/excited], [casual setting: home/cafe/park], looking directly at camera, natural smartphone lighting, slightly imperfect composition, authentic candid feel, iPhone photography style, warm natural tones --ar [ratio] --v 6.1 --style raw --no text watermark logo
```

**Prompt structure for testimonial:**
```
Portrait of a [age]-year-old [gender] with genuine smile, [professional/casual setting], soft natural lighting, clean background with subtle [color] tones, editorial portrait style, space for quote overlay on [left/right/top] side --ar [ratio] --v 6.1 --style raw --no text watermark logo
```

### 5. Product-hero (product in the center)

**When to use:** Direct offer (levels 4-5), Bonus stack (level 5)

**Prompt structure:**
```
[Product/mockup] centered on [minimalist background], professional product photography, soft studio lighting with [accent color] rim light, clean composition with space for text overlay, premium feel, [style: flat lay/floating/3D render] --ar [ratio] --v 6.1 --no text watermark logo
```

## A/B Variations

For EVERY creative, generate 3 variations:

**Variation A (baseline):** Main prompt + main headline + main CTA

**Variation B (hook test):**
- Same visual (prompt)
- Different headline (testing hook wording)
- Same CTA
- Label: "Testing: hook (A: [type] vs B: [type])"

**Variation C (visual test):**
- Different visual (different prompt — different composition or angle)
- Same headline
- Same CTA
- Label: "Testing: visual (A: [description] vs C: [description])"

## Headline Formulas by Level

### Levels 0-1 (cold traffic)
- **Question from monologue:** "Are you [pain situation] again?"
- **FOMO:** "While you're [current action], others are already [result]"
- **Shock statistic:** "[Number]% of [avatars] make this mistake"
- **Contrast:** "[Pain situation] vs [transformation] — the difference is one step"

### Levels 2-3 (warm traffic)
- **Myth-bust:** "'[Myth from DNA]' — the worst advice for [problem]"
- **System:** "[Number] steps from [pain] to [transformation]"
- **How-to:** "How to [result] without [effort/sacrifice from DNA]"
- **Education:** "Why [false solution] doesn't work (and what does)"

### Levels 4-5 (hot traffic)
- **M-A-G-I-C:** "[Magnetic reason]: [Result] in [Time] for [Avatar]"
- **Social proof:** "[Number] [avatars] have already [result]. Here's what they say"
- **Guarantee:** "[Result] or [guarantee]. No questions asked"
- **Urgency:** "[Number] spots left. Starting [date]"

## CTA Formulas by Level

| Level | CTA Type | Examples |
|---------|---------|---------|
| 0-1 | Soft, informational | "Learn more →", "Get the free guide", "Watch the video" |
| 2-3 | Medium, engaging | "Get your action plan", "Sign up for a review session", "Download the checklist" |
| 4-5 | Direct, conversion-oriented | "Reserve your spot", "Buy at a discount", "Sign up now" |

## Color Palette by Emotion

| Emotion from DNA | Palette | Hex Examples |
|---------------|---------|-------------|
| Anxiety, fear | Cool blues, grays | #2C3E50, #34495E, #7F8C8D |
| Fatigue, burnout | Muted, desaturated | #95A5A6, #BDC3C7, #D5DBDB |
| Hope, transformation | Warm golds, ambers | #F39C12, #E67E22, #F1C40F |
| Confidence, strength | Deep, saturated | #2980B9, #8E44AD, #27AE60 |
| Urgency | Reds, oranges | #E74C3C, #C0392B, #E67E22 |
| Premium, trust | Dark + accents | #1A1A2E, #16213E, #D4AF37 |
