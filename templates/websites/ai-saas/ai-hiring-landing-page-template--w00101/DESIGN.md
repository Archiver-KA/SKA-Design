# Design system — AI Hiring Landing Page Template

`SN-W00101` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

TidyHire is a light, playful hiring page on an off-white ground (#fafafa), with a very large heavy sans headline in near-black. Floating tilted shapes in yellow, blue and green, plus a toggle switch, sit around the hero, and the orange (#f97316) phrase at the bottom of the headline carries the brand. The shapes are decorative, but the type stays dominant.

**Mood:** playful, light, bold, energetic, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#f97316` · `#71717a` · `#27272a` · `#a1a1aa` · `#f4f4f5` · `#fafafa` · `#3f3f46` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 20px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-orange-600 transition-all active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Team (`team`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy near-black sans, with the last phrase in orange (#f97316)
- **Do:** Use tilted, flat-coloured shapes around the hero as decoration only
- **Do:** Keep the nav simple, with a single orange button at the right
- **Don't:** Don't place the decorative shapes over body copy
- **Don't:** Don't use more than one bright shape colour per row
- **Don't:** Don't add shadows to the floating shapes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
