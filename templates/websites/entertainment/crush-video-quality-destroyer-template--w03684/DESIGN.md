# Design system — Crush Video Quality Destroyer Template

`SN-W03684` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A tool panel on an off-white page, split into a large upload area and a column of range sliders. The sliders and small status tags use the rose-red accent (#f43f5e), while the buttons and headings stay near-black. The interface is deliberately blunt, with plain panels and small labels that describe each setting.

**Mood:** blunt, playful, utilitarian, meme-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f6` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#020617` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#94a3b8` · `#64748b` · `#f43f5e` · `#020617` · `#e2e8f0` · `#ffffff` · `#f1f5f9` · `#f8fafc` · `#cbd5e1` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** DM Mono, Inter
- **Scale (largest breakpoint):** h1 30px · h2 20px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_1rem_3rem_rgba(15,23,42,0.16)]`, `shadow-[0_1rem_3rem_rgba(15,23,42,0.06)]`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-950">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f8f6;
  --color-surface: #f8fafc;
  --color-text: #020617;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f43f5e;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f6',
    surface: '#f8fafc',
    ink: '#020617',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#f43f5e',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the rose (#f43f5e) for sliders, status tags and the small eyebrow label only
- **Do:** Keep buttons near-black with white text
- **Do:** Set control labels small in grey, with the value at the right
- **Don't:** Don't use the rose for large buttons
- **Don't:** Don't add gradients to the panels
- **Don't:** Don't use more than one accent colour on the tool panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
