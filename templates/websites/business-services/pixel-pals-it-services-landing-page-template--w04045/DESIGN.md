# Design system — Pixel Pals IT Services Landing Page Template

`SN-W04045` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A playful, retro-tech page on a white ground with a faint square grid. The headline is a heavy uppercase monospace, and its final word is set letter by letter in red, orange, green and blue. A tilted red warning card with black borders adds a computer-error joke, and hard edges keep the whole layout crisp.

**Mood:** playful, retro, crisp, nerdy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#171717` · `#ef4444` · `#525252` · `#3b82f6` · `#22c55e` · `#f5f5f5` · `#a855f7` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, VT323
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-hard`, `shadow-hard-sm`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 bg-neutral-900 text-white font-pixel text-xl shadow-hard hover:bg-neutral-800 transition-all shadow-hard-hover">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #000000;
  --color-accent: #ef4444;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#525252',
    line: '#000000',
    accent: '#ef4444',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase monospace
- **Do:** Colour each letter of the accent word in a different hue
- **Do:** Use square corners and black borders on cards
- **Don't:** Don't use soft gradients or blur
- **Don't:** Don't round the corners of cards
- **Don't:** Don't use the multicolour treatment for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
