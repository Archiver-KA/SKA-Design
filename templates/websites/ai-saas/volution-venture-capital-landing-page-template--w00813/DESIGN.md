# Design system — Volution Venture Capital Landing Page Template

`SN-W00813` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A restrained, editorial fund page on a pale grey ground. A large bold sans headline sits inside a rounded green panel (#059669), with an office team photo to the right, and the primary action is a blue button (#0677aa). The photo carries the warmth, so colour stays in one block and the links, and wide white margins give the layout room.

**Mood:** editorial, warm, restrained, corporate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#0677aa` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0677aa` · `#18181b` · `#71717a` · `#52525b` · `#e4e4e7` · `#059669` · `#d4d4d8` · `#0ea5e9` · `#38bdf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 20px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-[120px]`
- **Common gaps:** `gap-6`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium text-white transition-all bg-[#0677aa] hover:bg-[#0677aa]/90">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Newsletter signup (`newsletter`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #0677aa;
  --color-accent-2: #059669;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
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
    line: '#e4e4e7',
    accent: '#0677aa',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the feature headline in white inside the rounded green panel (#059669)
- **Do:** Use the blue (#0677aa) for the Learn More button only
- **Do:** Let the team photos carry colour rather than adding graphics
- **Don't:** Don't use the green as a background for body text
- **Don't:** Don't set the page on a dark ground
- **Don't:** Don't add shadows to the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
