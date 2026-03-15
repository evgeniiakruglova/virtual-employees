# Master Guide to AI Prompts for Advertising Creatives

5 generation tools. For each: prompt structure, best practices, parameters, examples.

---

## 1. Midjourney

### Prompt Structure

```
[Subject], [action/pose], [environment/background], [photography style], [camera/lens], [lighting], [color palette], [mood] --ar [ratio] --v 6.1 --style raw
```

### Parameters

| Parameter | Value | When |
|----------|----------|-------|
| --v 6.1 | Model version | Always |
| --style raw | Less "embellishment" | For realistic photos |
| --ar X:Y | Aspect ratio | Always (see platform-specs.md) |
| --s 50-150 | Stylization | 50 = realistic, 150 = artistic |
| --q 1 | Quality (default) | Standard |
| --no [element] | Exclude element | When you need to remove something |
| --chaos 0-100 | Variability | 0 = predictable, 20-40 for tests |

### Styles for Advertising

| Style | Keywords in Prompt | When |
|-------|------------------------|-------|
| Documentary | documentary photography, candid, natural, 35mm film | Pain-agitate, lifestyle |
| Studio | studio lighting, clean background, product shot | Product-hero, offer |
| UGC | iPhone photo, casual, authentic, slightly imperfect | TikTok, social proof |
| Cinematic | cinematic, anamorphic, shallow depth of field | Before/After, transformation |
| Minimalist | minimal, clean, white space, modern design | Text-heavy, infographic |
| Emotional | intimate, close-up, emotional, soft light | Pain, transformation |

### Cameras and Lenses for Realism

| Type | Keywords | Effect |
|-----|---------------|--------|
| Portrait | Canon R5, 85mm f/1.4 | Soft bokeh, face focus |
| Lifestyle | Sony A7III, 35mm f/1.8 | Wide context, natural |
| Detail | Canon 100mm macro | Close-up, texture |
| Wide shot | 24mm wide angle | Space, context |
| UGC | iPhone 15, selfie | Authenticity |

### Examples by Angle

**Pain-agitate (level 0-1):**
```
A 35-year-old woman sitting alone on bed at 3am, phone glow illuminating tired face, self-help books scattered on nightstand, documentary photography, Canon R5 35mm f/1.8, blue ambient light from phone screen, muted blue-grey tones, exhausted and anxious mood --ar 1:1 --v 6.1 --style raw
```

**Transformation (level 3-4):**
```
Split composition, left side: exhausted woman in dark room blue tones, right side: same woman radiating confidence in bright sunlit room warm tones, clean dividing line, before and after concept, cinematic photography, balanced lighting --ar 4:5 --v 6.1 --style raw
```

**Social proof (level 4-5):**
```
Smiling woman in her 30s holding phone showing positive results, cozy home office background, warm natural window light, authentic genuine expression, iPhone selfie style, casual outfit, slightly imperfect framing --ar 1:1 --v 6.1 --style raw
```

---

## 2. DALL-E (DALL-E 3)

### Prompt Structure

```
[Detailed scene description]. [Style and technique]. [Composition and angle]. [Lighting and color]. [Mood].
```

### DALL-E Specifics

- Prompts in **English** give the best results
- Supports **text on images** (specify in quotes)
- Fixed sizes: 1024×1024, 1024×1792, 1792×1024
- No parameters like --ar; size is specified when calling the API
- Interprets prompts more literally (describe more precisely)

### Sizes

| Platform | DALL-E Size | Note |
|-----------|---------------|------------|
| Meta Feed, Google Square | 1024×1024 | 1:1 |
| Stories, Reels, TikTok | 1024×1792 | ~9:16 |
| YouTube, Google Landscape | 1792×1024 | ~16:9 |

### Example Prompts

**Pain-agitate:**
```
Photorealistic image of a woman in her mid-30s sitting on the edge of her bed at 3 AM. Her face is illuminated by the blue glow of her smartphone. She looks exhausted with dark circles under her eyes. Self-help books are scattered on the nightstand. The room is dark with blue-grey ambient tones. Documentary photography style with natural, candid feel. The mood is isolated and anxious.
```

**Text-heavy (with text on image):**
```
Clean minimalist graphic design on warm cream background. Large bold text in the center reading "90% don't know this". Subtle geometric shapes in soft coral and terracotta colors. Modern sans-serif typography. Clean and professional look suitable for social media advertising.
```

---

## 3. Nano Banana Pro

### Prompt Structure

```
[Scene description], [visual style], [composition], [palette], [format/size]
```

### Specifics

- Optimized for **commercial visuals**
- Works well with **product shots** and **branding**
- Supports specifying format in the prompt
- Less detailed prompt than Midjourney

### Styles for Advertising

| Style | Keywords |
|-------|---------------|
| Product | clean product photography, studio, white background |
| Lifestyle | lifestyle shot, natural setting, authentic |
| Branding | brand visual, corporate, polished |
| Social Media | social media graphic, vibrant, eye-catching |
| Minimal | minimalist, clean lines, negative space |

### Example Prompts

**Lifestyle (level 0-1):**
```
Woman sitting alone on bed late at night looking at phone, tired expression, messy hair, blue phone glow on face, dark bedroom with soft shadows, documentary lifestyle photography, muted blue-grey palette, square format 1:1
```

**Product-hero (level 4-5):**
```
Digital course mockup on modern laptop screen, woman smiling on screen, surrounded by floating benefit icons, clean white background with soft gradient, professional product photography, warm coral and white palette, vertical format 9:16
```

---

## 4. Higgsfield

### Prompt Structure

Designed for **vertical video** (Reels/TikTok), **UGC style**.

```
[Character action], [UGC/selfie style], [vertical format], [talking to camera or lifestyle], [duration], [mood]
```

### Specifics

- Specialization: **UGC video for social media**
- Vertical format by default
- Best results with **talking head** and **lifestyle** scenes
- Not suitable for cinematic style

### Content Types

| Type | Prompt Pattern | When |
|-----|--------------|-------|
| Talking head | "[Person] talking directly to camera, selfie angle..." | Story, myth-busting |
| Lifestyle | "[Person] doing [action] in [location]..." | Before/after, transformation |
| Reaction | "[Person] reacting to [something] with [emotion]..." | Hook, pain |
| Tutorial | "[Person] showing [process] step by step..." | Education, solution |

### Examples

**Hook (level 0-1):**
```
Young woman talking directly to camera in her bedroom at night, selfie style, vertical format, she looks tired and frustrated, blue phone light on her face, authentic UGC feel, she starts speaking with urgency about not being able to sleep, warm indoor lighting, 3 seconds, anxious and relatable tone
```

**Story (level 1-2):**
```
Woman in her 30s sitting in cozy living room, talking to camera in confessional style, vertical format, she shares personal story about trying everything for anxiety, genuine emotional delivery, natural daylight from window, 15 seconds, vulnerable but hopeful tone
```

**Transformation (level 3-4):**
```
Split screen effect: left side shows stressed woman in dark room, right side shows same woman smiling confidently in bright setting, vertical format, dramatic transition between two states, before and after concept, 5 seconds, inspiring and empowering tone
```

---

## 5. Runway / Sora

### Prompt Structure (frame-by-frame)

```
Scene [N]: [Scene description], [camera movement], [style], [lighting], [duration]
```

### Camera Movements

| Movement | Keywords | Effect |
|----------|---------------|--------|
| Static | static shot, locked off | Stability, focus on subject |
| Push in | slow push in, camera push in | Attention, intimacy |
| Pull back | slow pull back, camera pulls back | Context, reveal |
| Pan | slow pan left/right | Overview, transition |
| Tracking | tracking shot, following | Movement, energy |
| Crane | crane up/down | Scale, drama |
| Handheld | handheld, slight shake | Documentary feel, UGC |
| Timelapse | time-lapse, accelerated | Transformation, time |

### Styles

| Style | When | Keywords |
|-------|-------|---------------|
| Documentary | Pain-agitate, real stories | documentary, handheld, natural light |
| Cinematic | Transformation, premium | cinematic, anamorphic, color graded |
| UGC | TikTok, authentic | selfie camera, smartphone footage |
| Commercial | Product, offer | polished, clean, professional |
| Dramatic | Myth-busting, reveal | dramatic lighting, high contrast |

### Full Script Example (30 sec, level 0-1)

```
Scene 1: Close-up of a woman's face illuminated by phone screen in dark bedroom, slight camera push in, documentary style, blue ambient light, 3 seconds

Scene 2: Same woman sitting up in bed rubbing her eyes, slow pan from hands to face revealing exhaustion, warm practical lighting from bedside lamp, 4 seconds

Scene 3: Montage of failed attempts: pill bottles, meditation app on phone, herbal tea cooling untouched, quick cuts between static shots, muted desaturated tones, 5 seconds

Scene 4: Woman looking at phone screen showing a hopeful message, her expression softens, gentle camera push in on her face, warm golden light gradually replacing blue, 5 seconds

Scene 5: Time-lapse of sunrise through bedroom window, woman doing calm breathing exercise by the window, camera slowly pulls back to reveal peaceful room, golden hour light flooding in, 8 seconds

Scene 6: Woman smiling with genuine confidence in bright sunlit room, static shot with gentle bokeh background, warm natural light, text overlay appears, 5 seconds
```

### TikTok Example (15 sec, Higgsfield style in Runway)

```
Scene 1: Young woman picks up phone and starts talking to camera, bedroom setting, selfie angle vertical format, natural indoor lighting, authentic and casual, 3 seconds

Scene 2: Same woman getting animated about the topic, hand gestures, slight zoom in, continues talking with conviction, 5 seconds

Scene 3: Quick cut to lifestyle shot of woman sleeping peacefully, soft morning light, gentle camera movement, 4 seconds

Scene 4: Back to talking head, woman smiles and points down (to link), text overlay with CTA, 3 seconds
```

---

## Universal Prompt Engineering Rules

### 1. Specificity

| Bad | Good |
|-------|--------|
| A sad woman | A 35-year-old woman with dark circles under her eyes, sitting alone on the edge of her bed at 3am |
| Nice lighting | Warm golden hour light streaming through a window, soft shadows |
| Beautiful background | Cozy bedroom with white linen, potted plants, morning light |

### 2. Prompt Language — Always English
Even if the target audience speaks Russian, prompts for AI are written in English. Text in Russian is added on top in the design phase.

### 3. Element Order (from most important to details)
1. Subject (who/what)
2. Action (what they're doing)
3. Environment (where)
4. Style (how it looks)
5. Technical details (camera, lighting)
6. Parameters (--ar, --v)

### 4. Series Consistency
For A/B variations, use a **shared base prompt** and change only the element being tested:

```
BASE: A 35-year-old woman, documentary photography, Canon R5, muted tones --v 6.1 --style raw

Variation A: [BASE] + sitting alone on bed at 3am, phone glow --ar 1:1
Variation B: [BASE] + close-up of hands clutching phone anxiously --ar 1:1
Variation C: [BASE] + standing by window looking out at dark city --ar 1:1
```

### 5. Text on Images
- **Midjourney:** Poor at generating text. Don't include text in the prompt — add it in the design phase.
- **DALL-E:** Can generate text. Specify in quotes: `text reading "Your headline here"`
- **Nano Banana Pro:** Average. Better to add text separately.

### 6. Angle → Tool Mapping Table

| Angle | Best Tool | Why |
|------|-------------------|--------|
| Pain-agitate (static) | Midjourney | Realism, emotion, detail |
| Text-heavy | DALL-E | Text generation on images |
| Before/After | Midjourney | Composition control |
| Social proof / UGC (static) | Nano Banana Pro | Fast, commercial style |
| Product-hero | Nano Banana Pro | Designed for product visuals |
| UGC video | Higgsfield | Specializes in vertical UGC |
| Cinematic video | Runway/Sora | Quality, camera control |
| TikTok native | Higgsfield | UGC style, vertical format |
| YouTube pre-roll | Runway/Sora | Horizontal, cinematic |
