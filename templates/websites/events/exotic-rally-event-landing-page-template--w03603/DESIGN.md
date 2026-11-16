# Design system — Exotic Rally Event Landing Page Template

`SN-W03603` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The rally page is cinematic and dark, on black (#050505). Its headline breaks across the hero in two halves, a white upright word on the left and a white italic word on the right, which gives the page a sense of motion. A full-bleed photograph of a red car supplies the only strong colour, and the surrounding type and interface stay white. Small tracked caps label the navigation and dates.

**Mood:** cinematic, motorsport, bold, dramatic, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e63946` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e63946` · `#050505` · `#9ca3af` · `#0a0a0a` · `#6b7280` · `#111111` · `#4b5563` · `#d1d5db` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h2 96px · h3 14px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_8px_#E63946]`, `shadow-2xl`, `shadow-[0_0_10px_rgba(230,57,70,0.5)]`
- **Content width:** `max-w-[1600px]`, `max-w-6xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="pointer-events-auto md:w-40 md:h-40 flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 bg-transparent w-32 h-32 rounded-full p-1.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #e63946;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#e63946',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline as large white sans, with one half in italic
- **Do:** Let the photograph carry the colour; keep the interface white on black
- **Do:** Use small tracked caps for navigation and dates
- **Don't:** Don't add colour to the type or the interface
- **Don't:** Don't place body text over the busiest part of the photograph
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
