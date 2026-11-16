# Design system — Modern Developer Resume Template

`SN-W02126` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A print-style developer resume shown as a white card (#ffffff) on a pale slate ground (#f1f5f9). The layout is a two-column sheet: a narrow sidebar for contact and education, and a wide main column for experience, with headings in dark slate (#1e293b). Colour stays with slate neutrals and a light blue tint on date pills, so the page reads as a document rather than a marketing site.

**Mood:** clean, document-like, neutral, structured, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#334155` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#94a3b8` · `#334155` · `#1e293b` · `#ffffff` · `#e2e8f0` · `#475569` · `#2563eb` · `#cbd5e1` · `#64748b` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 18px · h3 12px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-0.5`

**Primary button**

```html
<a class="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-lg shadow-lg border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all font-medium text-sm group">…</a>
```

## Page structure

Blocks in page order:

1. Contact form (`contact-form`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #ffffff;
  --color-text: #334155;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#ffffff',
    ink: '#334155',
    muted: '#475569',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page as a white card on #f1f5f9 with slate headings and body text.
- **Do:** Keep the two-column structure: contact and education in the sidebar, experience in the main column.
- **Do:** Show dates as small pill labels in the light blue accent (#2563eb).
- **Don't:** Don't add gradients or decorative backgrounds behind the card.
- **Don't:** Don't introduce a second accent colour; the sheet works in slate neutrals.
- **Don't:** Don't set body text in pure black; the template uses slate tones.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
