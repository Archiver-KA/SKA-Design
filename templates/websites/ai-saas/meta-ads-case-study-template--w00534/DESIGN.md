# Design system — Meta Ads Case Study Template

`SN-W00534` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

An urgent, dark sales page on near-black (#0a0a0a) with heavy white headlines. Red (#dc2626) fills the primary buttons and the block behind one highlighted keyword, while amber (#fbbf24) picks out the key figures. The stats row sets large amber numbers over small labels, which makes the results the focal point. The type is plain system sans-serif, so the colour does most of the work.

**Mood:** urgent, dark, promotional, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#262626` · `#ffffff` · `#171717` · `#a3a3a3` · `#dc2626` · `#d4d4d4` · `#ef4444` · `#fbbf24` · `#facc15` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-red-600/20`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold tracking-tight transition-colors duration-200 whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Case studies (`case-studies`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)
6. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #dc2626;
  --color-accent-2: #fbbf24;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
    accent: '#dc2626',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use red (#dc2626) for primary buttons and the keyword highlight block only
- **Do:** Show key metrics as large amber (#fbbf24) figures with small labels beneath
- **Do:** Set headlines in heavy white sans-serif, with one phrase highlighted
- **Don't:** Don't use amber for body copy or long text
- **Don't:** Don't introduce a third accent colour beyond red and amber
- **Don't:** Don't soften the headlines to a light weight; they carry the urgency

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
