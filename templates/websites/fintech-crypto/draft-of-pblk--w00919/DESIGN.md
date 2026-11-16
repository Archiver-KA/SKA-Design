# Design system — Draft of PBLK

`SN-W00919` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pale, institutional hero on warm off-white, with a dark stone headline stacked in three uppercase lines and the middle line in mid grey. A narrow icon rail on the left is the only navigation chrome, and a faint vertical rule separates it from the content. Primary actions are soft grey pills rather than saturated colour, so the page reads as a private-markets document.

**Mood:** institutional, restrained, warm, document-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#9945ff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e7e5e4` · `#a8a29e` · `#1c1917` · `#000000` · `#78716c` · `#f5f5f4` · `#d6d3d1` · `#292524` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h2 32px · h3 24px · body 14px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`, `shadow-[0_0_25px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="group relative p-3 rounded-xl hover:bg-stone-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Bento grid (`bento-grid`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #10b981;
  --color-accent-2: #9945ff;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#10b981',
    accent2: '#9945ff',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase with the middle line in mid grey
- **Do:** Keep the icon rail on the left as the only navigation chrome
- **Do:** Use soft grey pill buttons, not saturated colours, for primary actions
- **Don't:** Don't add bright colours to the hero; green is reserved for status dots
- **Don't:** Don't set the headline in a bold weight above the grey line
- **Don't:** Don't use the purple (#9945ff) as a button colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
