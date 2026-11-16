# Design system — CORE Coaching Landing Page Template

`SN-W03432` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, bold coaching page on pure black [#000000], with a heavy white sans-serif headline where the closing word is set in yellow [#f7d300]. The primary button is solid yellow with black text, and a glowing yellow orb with thin orbit rings fills the right side of the hero. Yellow on black carries the whole design.

**Mood:** bold, high-contrast, energetic, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f7d300` | Primary action and highlights |

Palette by frequency of use: `#f7d300` · `#ffffff` · `#000000` · `#94a3b8` · `#cbd5e1` · `#0a0a0a` · `#64748b` · `#333333` · `#ffe55c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`, `shadow-[0_0_20px_rgba(247,211,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#F7D300] text-black text-sm font-bold rounded-full px-6 py-3 hover:shadow-[0_0_20px_rgba(247,211,0,0.4)] hover:scale-105 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Bento grid (`bento-grid`)
5. Articles (`blog-articles`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #f7d300;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#f7d300',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the closing headline word in yellow (#f7d300) on black
- **Do:** Use solid yellow buttons with black text for the main action
- **Do:** Keep the glowing orb and thin orbit rings as the only decorative graphic
- **Don't:** Don't use yellow for body text; keep body copy in light grey
- **Don't:** Don't use white buttons beside the yellow ones
- **Don't:** Don't place decorative graphics behind the headline text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
