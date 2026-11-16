# Design system — THE POWER OF THE SUBCONSCIOUS MIND

`SN-W04307` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark lecture-style page on black, with a large bold uppercase headline in a translucent blurred box and a full-bleed illustration of a glowing brain on the right. Body copy is white sans-serif with key phrases in bold, and the layout is asymmetric, text on the left and image on the right. The blue glow of the illustration is the only colour on the page.

**Mood:** dramatic, cinematic, bold, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1c1c1c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f1f5f9` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f1f5f9` · `#cbd5e1` · `#3b82f6` · `#e2e8f0` · `#ff0000` · `#94a3b8` · `#1a4731` · `#1c1c1c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 60px · h3 48px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-blue-500/20`
- **Content width:** `max-w-7xl`, `max-w-[700px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-5`

**Primary button**

```html
<a class="w-full bg-[#007bff] hover:bg-blue-600 text-white text-2xl font-semibold py-5 rounded-full transition-all active:scale-[0.98] tracking-tight shadow-lg shadow-blue-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1c1c1c;
  --color-text: #ffffff;
  --color-muted: #f1f5f9;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1c1c1c',
    ink: '#ffffff',
    muted: '#f1f5f9',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the illustration full-bleed on the right and the text column on the left
- **Do:** Set the headline in bold uppercase inside a translucent blurred box
- **Do:** Use bold weight for key phrases in body copy only
- **Don't:** Don't add a red accent; the page has no red
- **Don't:** Don't place body text over the brightest part of the illustration
- **Don't:** Don't centre the body paragraphs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
