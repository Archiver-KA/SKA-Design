# Design system — Gamified Home Logbook Landing Page Template

`SN-W03242` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A playful, blocky game-style page on an off-white ground (#fafaf9) with a heavy black uppercase headline, hard black outlines and flat fills. Progress uses a striped green bar and a yellow level chip in the header (#fef08a), while a red sticker tag (#f87171) adds the one note of energy. The layout is centred and simple, with no gradients or soft shadows.

**Mood:** playful, blocky, bold, game-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0c0a09` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |
| Second accent | `#fef08a` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#78716c` · `#a8a29e` · `#f5f5f4` · `#f87171` · `#57534e` · `#ef4444` · `#d8b4fe` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="mt-8 bg-black text-white px-8 py-3 font-semibold tracking-tight text-lg hover:bg-stone-800 transition-colors border-2 border-transparent hover:border-black hard-shadow-hover">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #0c0a09;
  --color-muted: #78716c;
  --color-border: #000000;
  --color-accent: #f87171;
  --color-accent-2: #fef08a;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#0c0a09',
    muted: '#78716c',
    line: '#000000',
    accent: '#f87171',
    accent2: '#fef08a',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black uppercase sans, centred, with tight line spacing.
- **Do:** Use the yellow (#fef08a) for level and reward chips and the red (#f87171) for a single sticker tag.
- **Do:** Give buttons and badges a solid black outline and a flat fill, with no gradient.
- **Don't:** Don't add gradients or soft shadows; the look is flat fills and hard outlines.
- **Don't:** Don't use the red for body text; it is a sticker accent only.
- **Don't:** Don't set the page on a dark ground; the look depends on the off-white background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
