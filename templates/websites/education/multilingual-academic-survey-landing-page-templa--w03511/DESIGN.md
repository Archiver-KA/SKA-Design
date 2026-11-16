# Design system — Multilingual Academic Survey Landing Page Template

`SN-W03511` · education · light mode · Sinera Atlas theme `calm` · language `ko`

## Direction

A plain survey form on a pale grey-blue ground (#f8fafc), with a white card centred on the page. The type is Inter in dark slate, with a bold section heading and smaller grey helper text beneath, and the questions are laid out as outlined option tiles. The page is functional and restrained, with the card border and grey chips doing the work of structure.

**Mood:** functional, clean, quiet, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#14b8a6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#e2e8f0` · `#14b8a6` · `#334155` · `#64748b` · `#cbd5e1` · `#eff6ff` · `#93c5fd` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Noto Sans KR
- **Scale (largest breakpoint):** h1 30px · h2 20px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_2px_24px_-4px_rgba(0,0,0,0.04)]`
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #3b82f6;
  --color-accent-2: #14b8a6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#3b82f6',
    accent2: '#14b8a6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the form in a single white card centred on the pale ground
- **Do:** Set section headings in bold Inter with grey helper text beneath
- **Do:** Present answers as outlined rounded option tiles with clear spacing
- **Don't:** Don't add decorative imagery or illustration to the form
- **Don't:** Don't use strong colour fills for options or buttons
- **Don't:** Don't set question text in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
