# Design system — Luxury Pen Brand Landing Page Template

`SN-W01233` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal stationery page whose first screen is white, with a large serif headline in near-black over two lines and a smaller grey italic phrase beside it. A thin diagonal pen-stroke line crosses the headline as the one graphic device, and the page uses no colour.

**Mood:** minimal, literary, monochrome, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#fef08a` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#1e293b` · `#cbd5e1` · `#475569` · `#94a3b8` · `#0b1120` · `#334155` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 96px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-12`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="px-8 py-4 bg-slate-900 text-white font-sans-clean text-[11px] font-medium tracking-widest uppercase hover:bg-slate-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #334155;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #fef08a;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#334155',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#fef08a',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large serif in near-black with a smaller grey italic phrase beside them
- **Do:** Use the thin pen-stroke line as the only graphic element
- **Do:** Keep the first screen white with a single centred block of type
- **Don't:** Don't add a colour accent; grey carries the emphasis
- **Don't:** Don't place imagery in the hero; the type is the visual
- **Don't:** Don't use a dark background for the first screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
