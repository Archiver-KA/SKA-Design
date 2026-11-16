# Design system — Bia Estetica e Beleza

`SN-W02329` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark, photographic clinic page on pure black (#050505), with the hero photo in grayscale behind large cream display type (#efe4d9). The only colour is a dusty pink (#dda7a5) full stop after the brand name, which works as the single accent. Large Inter headlines and light outlined pill buttons give a confident, editorial tone.

**Mood:** dark, editorial, minimal, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#5c8a79` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#5c8a79` | Secondary copy, captions |
| Border | `#2a3b34` | Hairlines, dividers, outlines |
| Accent | `#dda7a5` | Primary action and highlights |

Palette by frequency of use: `#2a3b34` · `#efe4d9` · `#5c8a79` · `#dda7a5` · `#ffffff` · `#050505` · `#b99452` · `#f4d8d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Fragment Mono, Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 30px · body 18px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_-30px_60px_rgba(0,0,0,0.6)]`, `shadow-xl`, `shadow-[0_-20px_50px_rgba(0,0,0,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-3`, `gap-12`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-[#EFE4D9] text-[#2A3B34] px-8 py-4 rounded-full text-base font-light hover:bg-[#DDA7A5] hover:text-[#050505] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #5c8a79;
  --color-text: #ffffff;
  --color-muted: #5c8a79;
  --color-border: #2a3b34;
  --color-accent: #dda7a5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#5c8a79',
    ink: '#ffffff',
    muted: '#5c8a79',
    line: '#2a3b34',
    accent: '#dda7a5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand name as a huge cream headline and end it with a dusty pink (#dda7a5) full stop.
- **Do:** Keep hero photography grayscale and place text over it with a dark gradient.
- **Do:** Use light outlined pill buttons for calls to action on the black ground.
- **Don't:** Don't add colour to photos; the hero stays grayscale.
- **Don't:** Don't use the green (#5c8a79) for large areas; it does not appear on the first screen.
- **Don't:** Don't set small body text directly over the photo; keep it on solid black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
