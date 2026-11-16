# Design system — Perfect FITTE Personal Training Landing Page Template

`SN-W03519` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A high-impact training page on near-black (#0a0a0a) with a darkened gym photograph behind a large uppercase headline. Red (#c8341a) marks the badge and the primary action, and gold (#d4a017) picks out the figures on a dark stats card. The headline is set heavy and stacked tight, so the page reads as bold and performance-driven.

**Mood:** bold, intense, performance-driven, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#1e1e1e` | Hairlines, dividers, outlines |
| Accent | `#c8341a` | Primary action and highlights |
| Second accent | `#d4a017` | Supporting highlights |

Palette by frequency of use: `#c8341a` · `#ffffff` · `#888888` · `#1e1e1e` · `#d4a017` · `#1a1a1a` · `#f0f0f0` · `#0a0a0a` · `#141414` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Barlow Condensed, Bebas Neue, DM Sans
- **Scale (largest breakpoint):** h1 112px · h2 60px · h3 30px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[16px]` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-[120px]`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#C8341A] hover:bg-[#A02914] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Logo cloud (`logo-cloud`)
7. Stats band (`stats`)
8. Team (`team`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #1a1a1a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #1e1e1e;
  --color-accent: #c8341a;
  --color-accent-2: #d4a017;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#1e1e1e',
    accent: '#c8341a',
    accent2: '#d4a017',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase type, stacked tight on the left
- **Do:** Use red (#c8341a) for the badge and the primary button only
- **Do:** Show figures in gold (#d4a017) on dark cards with small uppercase labels
- **Don't:** Don't set body copy in uppercase
- **Don't:** Don't place the red fill behind long text
- **Don't:** Don't use a light background for the hero or the stat cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
