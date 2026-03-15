# Prompt Framework

A structured approach to creating prompts for NBP. Adapted from community best practices.

## Task Types (Skills)

Determine the task type - this sets the prompt strategy:

| Type | When to use | Key elements |
|------|-------------------|-------------------|
| **Photorealistic** | Photos of people, products, scenes | Lighting, materials, atmosphere |
| **Illustration** | Stickers, icons, art | Style, outlines, palette |
| **Product/Commercial** | Product photography | Surface, reflections, composition |
| **Minimalist** | Negative space | What to remove matters more than what to add |
| **Sequential** | Comics, storyboards | Panels, transitions, narrative |
| **Editing** | Modifying existing images | Specific instructions on what to change |
| **Style Transfer** | Transferring a style | Reference + new content |
| **Composite** | Combining elements | Coherence, lighting, scale |
| **Text Rendering** | Text in image | Exact quotes, position, weight |

## Universal Elements (Checklist)

Go through the list - not everything needs to be specified, but it's useful to check:

**Required:**
- **Subject** - who/what is the focus of attention
- **Context** - what it's for (determines style)

**Situational:**
- **Action** - what's happening
- **Environment** - where it takes place
- **Camera** - shot size (close-up, wide shot, etc.)
- **Lighting** - light type (NBP will choose on its own if not specified)
- **Mood** - emotion of the scene
- **Materials** - surface textures
- **Palette** - colors (hex preferred)
- **Format** - aspect ratio

> ⚠️ **Do not specify:** lens parameters (50mm, 85mm), f-stop, ISO - NBP ignores these. It "thinks" and chooses optimal settings on its own.

## Detail Modes

**Concise** - one sentence, for quick iterations:
```
Minimalist poster: white background, single red apple, centered, dramatic shadow.
```

**Standard** - 1-2 paragraphs, balance of control and flexibility:
```
Create a product shot for premium headphones marketing.

Matte black headphones on dark slate surface. Single spotlight from upper left creates dramatic shadow. Background gradient from #1a1a1a to pure black.

Format: 16:9
```

**Verbose** - maximum detail for complex scenes:
```
Create a cinematic wide shot for sci-fi film concept art.

Setting: Abandoned space station observation deck. Massive curved window spans entire wall, revealing dying red giant star filling half the frame. Station interior in deep shadow except where crimson light bleeds through.

Subject: Lone astronaut in weathered EVA suit, helmet off, sitting on debris pile. Back to camera, facing the star. Pose suggests exhaustion and acceptance.

Atmosphere: Dust particles float in zero-g, catching red light. Abandoned equipment scattered - coffee cup frozen mid-float, papers suspended. Frost crystals on interior surfaces where life support failed.

Mood: Melancholic beauty, end of an era
Lighting: Volumetric god rays from star through window
Format: 2.39:1 cinemascope
```

## Output Structure

When creating a prompt, output:

**1. Prompt** - ready to use

**2. Parameters** - if non-standard:
- Aspect ratio (if not 1:1)
- Resolution (if 2K/4K needed)

**3. Exclusions** - what to exclude (optional):
> Phrase positively! NBP understands "clean background" better than "no clutter"

**4. Assumptions** - what was inferred if the user didn't specify

## Quick Decision Tree

```
What are we creating?
├── Photo of a real object/person → Photorealistic
├── Drawing/art → Illustration
├── Product for sale → Product/Commercial
├── Lots of empty space → Minimalist
├── Multiple frames/story → Sequential
├── Modifying an existing photo → Editing
├── "Like this image" → Style Transfer
├── Assembling from multiple elements → Composite
└── Text is the main element → Text Rendering
```

## Examples by Type

### Photorealistic
```
Portrait of a weathered fisherman, 60s, deep wrinkles and sun-damaged skin.
Early morning golden hour on wooden dock.
Holding fresh catch, genuine smile of satisfaction.
Background: misty harbor, fishing boats soft focus.
Mood: authentic, documentary style
```

### Product/Commercial
```
Product shot: luxury watch on raw concrete slab.
Single hard light from upper right, creating defined shadow.
Watch face at 10:10 position, metal bracelet draped naturally.
Background: gradient gray, vignette edges.
Style: high-end catalog, editorial
Format: 4:5
```

### Minimalist
```
Single origami crane, red paper, centered.
Pure white infinite background.
Soft diffused light, barely visible shadow.
Extreme negative space - crane occupies <10% of frame.
Format: 1:1
```

### Text Rendering
```
Motivational poster for gym.

Background: dark textured concrete, subtle vignette.

Text:
"DISCIPLINE" in extra bold, white, centered upper third
"beats talent" in thin weight, #808080, centered below

Small icon: minimal dumbbell silhouette, bottom center
Format: 9:16 (stories)
```
