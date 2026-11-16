# Design system — Nebus Ventures

`SN-W02138` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark investor page: a near-black ground with a single white card that holds the portfolio list. Inside the card, a navy hero tile carries a white wordmark and a short caption, and each row pairs a company logo with a small grey role line and a plain Visit link. Colour is almost absent apart from the logos, so the page reads as a list of backers rather than a brand.

**Mood:** restrained, dark, clean, investor, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#0f172a` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#64748b` · `#ffffff` · `#cbd5e1` · `#94a3b8` · `#334155` · `#1d4ed8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 28px · h3 16px · body 13px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-slate-200/50`
- **Content width:** `max-w-[460px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="ml-3 bg-slate-50 hover:bg-slate-100 text-slate-900 text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors border border-slate-200/50">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Case studies (`case-studies`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #ffffff;
  --color-text: #f5f5f5;
  --color-muted: #0f172a;
  --color-border: #f1f5f9;
  --color-accent: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#ffffff',
    ink: '#f5f5f5',
    muted: '#0f172a',
    line: '#f1f5f9',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground dark (#0f172a) and place the content in a single white card.
- **Do:** Use navy (#0f172a) only for the hero tile inside the card, with a white wordmark.
- **Do:** Show each portfolio row as logo, name, grey role line and a plain Visit link.
- **Don't:** Don't add accent colour to the list rows; the logos carry the colour.
- **Don't:** Don't use the grey #737373 as the page ground.
- **Don't:** Don't add extra decoration around the card; contrast with the ground does the separation.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
