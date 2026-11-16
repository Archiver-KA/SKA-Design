# Design system — DreamTales Kids Story Landing Page Template

`SN-W03443` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A light, rounded storybook page sits on a pale grey-white ground. A floating top bar carries a purple [#8b5cf6] logo mark and a soft shadow. Large rounded corners and the purple accent give the page a gentle, playful character.

**Mood:** light, soft, rounded, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#7c3aed` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#8b5cf6` · `#1e293b` · `#e2e8f0` · `#7c3aed` · `#f1f5f9` · `#f8fafc` · `#64748b` · `#94a3b8` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Nunito
- **Loaded families:** Nunito, Quicksand
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 18px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[40px]` (40px), `rounded-[32px]` (32px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-violet-500/30`
- **Content width:** `max-w-5xl`, `max-w-6xl`
- **Common gaps:** `gap-4`, `gap-1.5`, `gap-2`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full font-semibold shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all active:scale-95">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #7c3aed;
  --font-display: "Nunito", sans-serif;
  --font-body: "Nunito", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#7c3aed',
  },
  fontFamily: { display: ['Nunito'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Use the purple (#8b5cf6) for the logo mark and brand accents
- **Do:** Keep the top bar as a floating white pill with a soft shadow
- **Do:** Round large surfaces and cards with the page's 40px corner radius
- **Don't:** Don't set the page on dark backgrounds
- **Don't:** Don't introduce colours beyond the purple accent
- **Don't:** Don't use sharp corners on the top bar or cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
