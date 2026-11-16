# Design system — Personal Injury Lawyer Landing Page Template

`SN-W04042` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A sales-led injury-law page with a navy hero and a white sans-serif headline set in three lines. The single keyword in each headline is picked out in gold, and a white form card on the right asks for case details. Outlined pills carry trust markers such as no fees and 24/7 availability, with grey logos listed as press mentions beneath.

**Mood:** urgent, direct, trustworthy, sales-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4a4a4a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0d4e93` | Primary action and highlights |
| Second accent | `#d4a84b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0d4e93` · `#1a1a1a` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#94a3b8` · `#d4a84b` · `#64748b` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Montserrat, Roboto
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="bg-[#0D4E93] hover:bg-[#1565C0] text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-all shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-0.5 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Team (`team`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #4a4a4a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0d4e93;
  --color-accent-2: #d4a84b;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#4a4a4a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0d4e93',
    accent2: '#d4a84b',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Set one keyword per headline in gold (#d4a84b)
- **Do:** Use outlined pills for trust markers such as no fees and 24/7 availability
- **Do:** Keep the case form on a white card with stacked fields
- **Don't:** Don't use gold for more than one element per block
- **Don't:** Don't remove the press logo row under the hero
- **Don't:** Don't put the form on a dark card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
