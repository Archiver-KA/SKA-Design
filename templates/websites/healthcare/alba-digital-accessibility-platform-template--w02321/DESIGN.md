# Design system — Alba Digital Accessibility Platform Template

`SN-W02321` · healthcare · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A white page with a faint grid and a thin multicolour stripe along the top edge. The headline is heavy, tightly set dark sans in four lines, and the primary button is a solid calm blue (#488bc9) pill beside an outlined secondary. A segmented pill switch above the headline separates two audiences. The palette is soft and supportive, with blue as the single accent.

**Mood:** supportive, soft, clear, calm, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#488bc9` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#475569` · `#488bc9` · `#0f172a` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#334155` · `#ef4444` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-3 transition text-[11px] uppercase tracking-wider font-bold px-6 py-3 rounded-full shadow-lg bg-[#488bc9] hover:bg-[#3a75aa] text-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Call to action (`cta`)
4. FAQ (`faq`)
5. Comparison (`comparison`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #488bc9;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#1e293b',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#488bc9',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy tight sans, dark slate on white
- **Do:** Use the blue (#488bc9) for the primary button only
- **Do:** Keep the faint grid as the only background texture
- **Don't:** Don't use the top stripe as a block of colour; it is a thin edge
- **Don't:** Don't use red as a button colour; it appears only in the stripe
- **Don't:** Don't add gradient text to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
