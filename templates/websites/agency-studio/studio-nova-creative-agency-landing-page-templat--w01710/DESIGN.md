# Design system — Studio Nova Creative Agency Landing Page Template

`SN-W01710` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light grey hero block with a large light-weight white headline, 'Nova', over a grey panel, a white rounded play button for the video, and a row of white rounded cards below. The page is airy and gallery-like, with the work carried by imagery.

**Mood:** airy, gallery, minimal, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#3f3f46` · `#000000` · `#e4e4e7` · `#a1a1aa` · `#27272a` · `#52525b` · `#f4f4f5` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 72px · h3 16px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. About (`about`)
3. Pricing (`pricing`)
4. Team (`team`)
5. Stats band (`stats`)
6. Footer (`footer`)
7. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f4f4f5;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #3f3f46;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f5',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#3f3f46',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white rounded cards with image-led tiles for work and team.
- **Do:** Set the hero headline large and light-weight, in white on a grey panel.
- **Do:** Pair the white play button with a short label beside it.
- **Don't:** Don't set white text on the light grey panel without a dark overlay; contrast is weak.
- **Don't:** Don't add amber (#f59e0b) as an accent.
- **Don't:** Don't rely on images alone for meaning.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
