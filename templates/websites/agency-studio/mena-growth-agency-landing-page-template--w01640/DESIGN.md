# Design system — MENA Growth Agency Landing Page Template

`SN-W01640` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy hero with a centred white headline in which the last two words carry a blue-to-cyan gradient. A warm orange ring glow sits behind the page, and the orange (#f97316) appears on the navigation contact button. The style is confident and tech-leaning, with gradient text as the main brand signature.

**Mood:** dark, gradient-led, confident, tech, warm-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#0b1120` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#3b82f6` · `#06b6d4` · `#f97316` · `#64748b` · `#60a5fa` · `#22d3ee` · `#cbd5e1` · `#030712`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_15px_rgba(59,130,246,0.5)]`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="relative overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-2 text-xs font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:brightness-110 focus:outline-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Stats band (`stats`)
5. Services (`services`)
6. Feature grid (`features`)
7. Product grid (`product-grid`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #0b1120;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#0b1120',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Apply the blue-to-cyan gradient to a single emphasised phrase in the headline
- **Do:** Use the orange (#f97316) only for the navigation contact button and one highlight
- **Do:** Keep the primary CTA a white pill on the dark navy background
- **Don't:** Don't use the gradient on body text or long lines
- **Don't:** Don't use orange for large background fills
- **Don't:** Don't put the blue accent on the orange button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
