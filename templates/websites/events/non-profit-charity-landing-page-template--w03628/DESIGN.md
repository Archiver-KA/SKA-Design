# Design system — Non-Profit Charity Landing Page Template

`SN-W03628` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bold, campaign-driven charity hero on a deep navy ground, with a large white sans-serif headline in which one word is set in yellow as the page's single accent. Supporting copy is light and short, and a solid white button sits beside an outlined one. A solid yellow band below the hero acts as a second block of colour, which keeps the page direct and high in contrast.

**Mood:** bold, campaign-driven, direct, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#1e293b` · `#475569` · `#f8fafc` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 20px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-slate-200/50`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-8`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="min-w-[180px] px-8 py-4 border border-brand-400 text-brand-400 hover:bg-brand-400 hover:text-slate-900 rounded-full font-medium text-base transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a heavy sans-serif in white, with one highlighted word in yellow
- **Do:** Use the yellow only for the highlighted word and the band below the hero
- **Do:** Pair a solid white primary button with an outlined secondary
- **Don't:** Don't use light backgrounds for the hero
- **Don't:** Don't set body text in yellow
- **Don't:** Don't add colour blocks beyond the navy ground and the yellow band

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
