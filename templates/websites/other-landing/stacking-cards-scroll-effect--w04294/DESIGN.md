# Design system — Stacking Cards Scroll Effect

`SN-W04294` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light scroll demo on a near-white ground (#f9fafb), with a centred title and a short subline above the stack. Each card is white with a soft shadow, holds a text block beside a blue gradient panel, and scales and stacks over the card before it as the reader scrolls. Blue is the only colour, which keeps the motion the focus.

**Mood:** light, clean, kinetic, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#4b5563` · `#f3f4f6` · `#f9fafb` · `#1f2937` · `#eff6ff` · `#60a5fa` · `#2563eb` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 36px · body 18px
- **Weights in use:** normal, semibold, light

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #60a5fa;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#60a5fa',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Give each card a white surface with a soft shadow and a text block beside a blue gradient panel
- **Do:** Use the blue gradient only on the card's media panel
- **Do:** Keep the title and subline centred above the stack in dark grey
- **Don't:** Don't add more colours to the cards
- **Don't:** Don't remove the card shadow; it separates the cards as they stack
- **Don't:** Don't shorten the scroll spacing so the cards stop stacking

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
