# Design system — SaaS API Documentation Landing Page Template

`SN-W00680` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain developer-tool page on a near-white ground, with a dark slate headline in a sans-serif and a large monospaced PIN shown in a bordered card. The primary action is a solid black button, and a dark code panel shows the JSON response beside the card. Green appears only in small status chips, so the page reads as a utility rather than a marketing site.

**Mood:** utilitarian, clean, developer, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#e2e8f0` · `#94a3b8` · `#ffffff` · `#020617` · `#f1f5f9` · `#047857` · `#f8fafc` · `#1e293b` · `#334155` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.99]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #10b981;
  --color-accent-2: #e2e8f0;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the primary button as solid near-black (#0f172a) with white text
- **Do:** Show API responses in a dark code panel with monospaced text
- **Do:** Use green only for small status chips such as Valid and Live
- **Don't:** Don't use decorative gradients or glows; the page is flat
- **Don't:** Don't set the generated value in a proportional font; it stays monospaced
- **Don't:** Don't put marketing imagery in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
