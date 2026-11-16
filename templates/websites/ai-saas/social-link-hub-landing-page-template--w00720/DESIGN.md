# Design system — Social Link Hub Landing Page Template

`SN-W00720` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A centred link-hub card on a near-black navy ground. The only saturated element is a full-width blue-to-violet gradient button with a soft glow, set under a small blue-grey title and a muted caption. The card stays quiet apart from the call to action, and the page has no imagery.

**Mood:** centred, quiet, glowing, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e1726` | Page ground |
| Surface | `#f4f6fa` | Cards, panels, raised areas |
| Text | `#0e1726` | Headings and primary copy |
| Muted text | `#556070` | Secondary copy, captions |
| Border | `#d9dfe8` | Hairlines, dividers, outlines |
| Accent | `#2b5ce6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d9dfe8` · `#556070` · `#2b5ce6` · `#0e1726` · `#1f49c0` · `#d5ddea` · `#f4f6fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 18px
- **Weights in use:** bold, semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-[6px]` (6px)
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-white focus:px-4 focus:py-3 focus:rounded-ctl">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0e1726;
  --color-surface: #f4f6fa;
  --color-text: #0e1726;
  --color-muted: #556070;
  --color-border: #d9dfe8;
  --color-accent: #2b5ce6;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e1726',
    surface: '#f4f6fa',
    ink: '#0e1726',
    muted: '#556070',
    line: '#d9dfe8',
    accent: '#2b5ce6',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Make the single gradient button the only saturated element on the page.
- **Do:** Set the card title in a light blue-grey, centred above the button.
- **Do:** Keep the card a single centred column with a short caption beneath.
- **Don't:** Don't add a second button colour; the gradient is the one action.
- **Don't:** Don't put imagery behind the card; the background is plain.
- **Don't:** Don't set the page on a light ground; it is near-black navy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
