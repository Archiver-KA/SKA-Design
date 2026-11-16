# Design system — AI Automation Agency Landing Page Template

`SN-W01378` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a faint square grid behind the hero and a large white headline in a heavy sans across three lines, with the middle line in grey. A thin dark card with a client quote sits at the right, and small monospace labels run along the top. Monospace is reserved for the labels, and the headline is set in sans.

**Mood:** technical, severe, dark, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#000000` · `#d4d4d4` · `#0a0a0a` · `#171717` · `#525252` · `#e5e5e5` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** var(--font-sans)
- **Loaded families:** Geist, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 36px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black text-xs font-medium px-4 py-2 rounded hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #f87171;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#f87171',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with the middle line in grey.
- **Do:** Use monospace and small caps for labels, status lines and small notes.
- **Do:** Keep the background grid faint and behind the hero only.
- **Don't:** Don't set the headline in a monospace face; it is set in sans.
- **Don't:** Don't add colour to the grid or the quote card; the page is black and white.
- **Don't:** Don't add bright fills to the testimonial card; it stays dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
