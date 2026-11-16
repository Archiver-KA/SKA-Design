# Design system — Positiv Digital Agency Landing Page Template

`SN-W01667` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `th`

## Direction

A deep navy hero with a centred white Thai headline in two lines, a blue glow across the top, and a glass-style navigation bar with a rounded blue logo mark. Small pill labels sit above the headline and the copy is light grey. The design leans on soft blue light and layered glass rather than hard shapes, giving a futuristic, fluid tone.

**Mood:** futuristic, fluid, luminous, layered, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050a14` | Page ground |
| Surface | `#050a14` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#007bff` · `#9ca3af` · `#6b7280` · `#d1d5db` · `#000000` · `#050a14` · `#a855f7` · `#1e3a8a` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Open Sans
- **Body:** Open Sans
- **Loaded families:** Montserrat, Open Sans, Prompt
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-inner`, `shadow-lg`, `shadow-[0_0_10px_#007bff]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="cursor-hover w-full py-3 px-4 bg-[#007bff] rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#007bff] transition-all duration-300 shadow-lg shadow-blue-900/40">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Stats band (`stats`)
6. Bento grid (`bento-grid`)
7. Marquee (`marquee`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050a14;
  --color-surface: #050a14;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #a855f7;
  --font-display: "Open Sans", sans-serif;
  --font-body: "Open Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050a14',
    surface: '#050a14',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Open Sans'], sans: ['Open Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in white at large size, centred, over a soft blue glow
- **Do:** Use a rounded glass navigation bar with a blue logo mark
- **Do:** Keep small pill labels above the headline with a single dot
- **Don't:** Don't read the page as light; the ground is deep navy (#050a14), not the listed blue (#007bff)
- **Don't:** Don't use the purple (#a855f7) as a fill colour; it appears only as a small accent
- **Don't:** Don't set the Thai copy below the sizes that keep its tall glyphs legible

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
