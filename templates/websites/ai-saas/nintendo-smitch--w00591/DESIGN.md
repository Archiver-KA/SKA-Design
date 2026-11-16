# Design system — Nintendo Smitch

`SN-W00591` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark handheld console mockup on a flat charcoal ground: a wide device body with a cyan left grip and a red right grip, and a grey screen showing a row of saturated game tiles in red, green and blue. The tiles carry bold white labels and the screen chrome is thin. Colour is concentrated in the two grips and the tiles, so the frame reads as a product demo.

**Mood:** playful, product-demo, saturated, dark, object-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#27272a` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#ff4554` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#ffffff` · `#3f3f46` · `#a1a1aa` · `#71717a` · `#000000` · `#09090b` · `#d4d4d8` · `#22d3ee` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.5)]`, `shadow-lg`, `shadow-sm`
- **Common gaps:** `gap-1`, `gap-1.5`, `gap-4`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #27272a;
  --color-surface: #3f3f46;
  --color-text: #f4f4f5;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #ff4554;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#27272a',
    surface: '#3f3f46',
    ink: '#f4f4f5',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#ff4554',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the surround in charcoal (#27272a) and let the device and tiles carry all the colour.
- **Do:** Use the cyan (#22d3ee) and red (#ff4554) only for the two grips, not for interface text.
- **Do:** Set tile labels in bold white sans on the saturated tile fills.
- **Don't:** Don't add colour to the device body beyond the two grips; the frame stays grey.
- **Don't:** Don't set body copy on the charcoal ground in red or cyan.
- **Don't:** Don't crop the device at the edges; the full silhouette is the image.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
