# Design system — Letterbox Landing

`SN-W03270` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Quiet and urban, with a white first screen, a black top bar and a centred light sans headline in near-black above a small tracked eyebrow. A large photograph of a glass-and-stone residential building sits below the copy, framed with rounded corners. The palette is strictly black, grey and white, so the architecture photograph carries all the colour.

**Mood:** urban, minimal, quiet, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#f5f5f5` · `#000000` · `#a3a3a3` · `#0a0a0a` · `#e5e5e5` · `#22c55e` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-neutral-200/50`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-32`
- **Common gaps:** `gap-8`, `gap-4`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #171717;
  --color-accent: #22c55e;
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
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#171717',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the headline and keep it to one or two lines in near-black.
- **Do:** Frame the building photograph with rounded corners beneath the hero copy.
- **Do:** Use a black top bar with white navigation text.
- **Don't:** Don't add a colour accent; the palette is monochrome.
- **Don't:** Don't place text over the building photograph; the image sits below the copy.
- **Don't:** Don't set the eyebrow larger than the small tracked size it uses.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
