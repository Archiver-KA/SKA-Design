# Design system — Swapster Fintech Landing Page Template

`SN-W01042` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white page has a heavy, all-caps black sans headline stacked over three lines, giving the hero a poster-like weight. Primary actions are solid black pills with an outlined pill beside them, and the grey subline is the only soft element. A dark phone mockup sits low on the page, so the one dark object anchors an otherwise monochrome layout.

**Mood:** bold, monochrome, direct, poster-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#000000` · `#f9fafb` · `#9ca3af` · `#f3f4f6` · `#1f2937` · `#4b5563` · `#111827` · `#d1fae5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="mt-auto w-full bg-emerald-500 text-white text-xs py-2 rounded font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Code / terminal (`code-terminal`)
7. Articles (`blog-articles`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #0f172a;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #000000;
  --color-accent-2: #f97316;
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
    surface: '#f9fafb',
    ink: '#0f172a',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#000000',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase black sans, stacked over several lines
- **Do:** Use solid black pills (#000000) for the primary action and outlined pills for the secondary
- **Do:** Keep the grey subline (#6b7280) short and centred under the headline
- **Don't:** Don't use emerald as the button colour; the buttons are black.
- **Don't:** Don't set the headline in a soft display face; the weight is the point
- **Don't:** Don't add a coloured hero background; it stays white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
