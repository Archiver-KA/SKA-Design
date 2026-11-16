# Design system — Interactive Product Workflow Landing Page Template

`SN-W00468` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, showcase-style page of stacked 3D cards that tilt on scroll, set on a white ground with soft grey shadows. Headlines are dark and large, with a light grey second line, and the cards carry the detail. Colour is almost absent: black, white and grey neutrals do the work, with one large figure as the focal point.

**Mood:** spatial, calm, neutral, showcase, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#a1a1aa` · `#27272a` · `#f4f4f5` · `#e4e4e7` · `#71717a` · `#52525b` · `#d4d4d8` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 18px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #27272a;
  --color-text: #18181b;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#27272a',
    ink: '#18181b',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the cards on the white ground with soft grey shadows
- **Do:** Use one large numeric figure as the focal point in each card
- **Do:** Keep headings dark and large with a light grey second line
- **Don't:** Don't use a dark ground; the page is white
- **Don't:** Don't add a colour accent to the cards
- **Don't:** Don't crowd the 3D cards; leave room for the tilt

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
