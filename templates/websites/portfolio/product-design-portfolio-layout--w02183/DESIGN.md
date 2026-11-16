# Design system — Product Design Portfolio Layout

`SN-W02183` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Calm dark product page: a deep navy ground (#111827) with white headline text and a blue (#60a5fa) primary button, with a dark ghost button beside it. The first screen is mostly empty space with a left-aligned headline, so the content stays quiet and reading-led. Blue appears only on actions and links, and cards use a slightly lighter navy surface.

**Mood:** calm, dark, quiet, reading-led, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1f2937` · `#9ca3af` · `#ffffff` · `#d1d5db` · `#111827` · `#60a5fa` · `#93c5fd` · `#f3f4f6` · `#000000` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 24px · body 20px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-12`, `gap-2`, `gap-16`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #60a5fa;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#60a5fa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white Inter at large size, with a short grey sub-line
- **Do:** Use blue (#60a5fa) only for the primary button and links
- **Do:** Keep generous space above and below the hero
- **Don't:** Don't add decorative blobs to the hero; the page stays flat
- **Don't:** Don't use blue for body copy
- **Don't:** Don't fill the ghost button with a colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
