# Design system — Artisan Coffee Roastery Landing Page Template

`SN-W02834` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark roastery hero on warm near-black brown (#1a1614), with a large white sans headline and a second line in gold italic serif (#f59e0b). Gold fills the primary button and the outlined Subscribe button in the navigation, so the accent appears in exactly two places. Gold stars and a small badge add trust, and the page reads as a crafted, editorial coffee brand rather than a product store.

**Mood:** crafted, editorial, warm-dark, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1614` | Page ground |
| Surface | `#2a1f1d` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#78350f` · `#f59e0b` · `#fbbf24` · `#1a1614` · `#451a03` · `#d4d4d4` · `#f5f5f5` · `#a3a3a3` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 72px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-amber-500/10`
- **Content width:** `max-w-7xl`, `max-w-[640px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20 mb-8 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1a1614;
  --color-surface: #2a1f1d;
  --color-text: #f5f5f5;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1614',
    surface: '#2a1f1d',
    ink: '#f5f5f5',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in gold (#f59e0b) italic serif
- **Do:** Use gold for the primary button and the navigation subscribe button
- **Do:** Keep the ground on warm near-black (#1a1614) with off-white text (#f5f5f5)
- **Don't:** Don't add a second accent; the gold is the only one
- **Don't:** Don't use gold on light backgrounds
- **Don't:** Don't set the headline in a light weight; the headline is heavy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
