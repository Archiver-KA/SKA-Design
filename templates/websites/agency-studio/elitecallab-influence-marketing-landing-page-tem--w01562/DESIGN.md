# Design system — EliteCallab Influence Marketing Landing Page Template

`SN-W01562` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground (#050505) with a three-line uppercase headline that steps from white to grey italic to a gold gradient on its last word. Gold (#d4af37) is used sparingly, in the headline, a progress bar and a metric card, so the page reads as luxurious rather than loud. Large display type and a translucent dark metric card carry the rest of the first screen.

**Mood:** luxurious, restrained, cinematic, dark, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a38421` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a38421` · `#6b7280` · `#9ca3af` · `#d4af37` · `#050505` · `#ededed` · `#333333` · `#d1d5db` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Clash Display
- **Body:** Satoshi
- **Loaded families:** Clash Display, Satoshi
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="w-full py-4 mt-4 bg-white hover:bg-gray-100 text-dark-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #a38421;
  --color-accent-2: #6366f1;
  --font-display: "Clash Display", sans-serif;
  --font-body: "Satoshi", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#a38421',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Clash Display'], sans: ['Satoshi'] },
} }
```

## Do and don't

- **Do:** Use the gold (#d4af37) for the key headline word and one highlight per section
- **Do:** Set the headline in Clash Display in uppercase, mixing upright and italic lines
- **Do:** Keep the ground at #050505 and use translucent dark cards for data
- **Don't:** Don't use gold for body text or large fills
- **Don't:** Don't add bright hues such as indigo beside the gold
- **Don't:** Don't introduce a light background section; the first screen stays black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
