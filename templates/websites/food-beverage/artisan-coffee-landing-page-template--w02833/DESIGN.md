# Design system — Artisan Coffee Landing Page Template

`SN-W02833` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark roastery hero on deep espresso brown (#1a0f0a), with a white bold sans headline and a second line in gold (#f59e0b). The primary button is a cream fill with dark text, beside a plain outline button, and a rounded testimonial card sits on the right with a soft glow. Small pill tags list product attributes, so the page feels crafted and premium while staying within the coffee palette.

**Mood:** warm, crafted, premium, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a0f0a` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#fcd34d` · `#fde68a` · `#1a0f0a` · `#f59e0b` · `#6ee7b7` · `#f97316` · `#fdba74` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="border-gradient before:rounded-2xl group inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-100 text-amber-950 hover:bg-amber-50 px-4 sm:px-5 py-3 text-sm font-medium tracking-tight transition-all hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Code / terminal (`code-terminal`)
3. Marquee (`marquee`)
4. Pricing (`pricing`)
5. FAQ (`faq`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1a0f0a;
  --color-surface: #f4f4f5;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a0f0a',
    surface: '#f4f4f5',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the espresso brown (#1a0f0a) as the ground with white headlines
- **Do:** Set the emphasised headline line in gold (#f59e0b)
- **Do:** Make the primary button a cream fill with dark text and the secondary an outline
- **Don't:** Don't use the green (#34d399) as an accent; the page is brown, gold and white
- **Don't:** Don't set gold text on cream backgrounds
- **Don't:** Don't use a serif for the headline; it is a bold sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
