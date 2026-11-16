# Design system — WordPress & Odoo Integration Agency Landing Page Template

`SN-W01739` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, clean integration-agency page on a near-white ground with a dark navy headline [#0f172a] and an orange [#ea580c] gradient on the second line. Buttons are a dark navy primary and a white secondary with a thin border, and the hero sits above a faint product preview card. Orange is the single point of colour, so the eye lands on the headline phrase and the start button.

**Mood:** clean, light, corporate, modern, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#e2e8f0` · `#64748b` · `#ffffff` · `#f1f5f9` · `#475569` · `#ea580c` · `#f8fafc` · `#94a3b8` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded-full transition-all shadow-lg shadow-slate-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Awards / press (`awards-press`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #ea580c;
  --color-accent-2: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#ea580c',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy navy (#0f172a) and colour the key phrase orange (#ea580c)
- **Do:** Use a dark navy primary button and a white secondary button with a thin border
- **Do:** Keep the background near white and reserve orange for one phrase and the main action
- **Don't:** Don't use the orange as a background fill
- **Don't:** Don't set body copy in orange
- **Don't:** Don't use a dark background for the hero; the page is light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
