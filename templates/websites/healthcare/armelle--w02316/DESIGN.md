# Design system — Armelle

`SN-W02316` · healthcare · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A dark brown-black page with a warm sepia photograph of hands holding a bottle. Text is white, with a light italic serif for the intro line and a sans title below it, and a large ghosted wordmark sits faded at the bottom. The olive-green dot (#a3b77a) is the single accent, and the atmosphere is intimate and natural.

**Mood:** intimate, natural, dark, warm, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#a3b77a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#292524` · `#a3b77a` · `#e7e5e4` · `#78716c` · `#1c1917` · `#0c0a09` · `#44403c` · `#6b7f4a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Cormorant Garamond, Plus Jakarta Sans, Cinzel
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-stone-950/20`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:block uppercase hover:bg-[#5a6d3a] hover:border-[#8a9d6a] transition-all duration-300 shadow-stone-950/20 text-xs font-medium text-white tracking-[0.15em] bg-[#6b7f4a]/80 border-[#8a9d6a] border rounded-sm py-3 px-8 shadow-xl backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Services (`services`)
5. Feature grid (`features`)
6. About (`about`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #0c0a09;
  --color-text: #f5f5f4;
  --color-muted: #a8a29e;
  --color-border: #292524;
  --color-accent: #a3b77a;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#0c0a09',
    ink: '#f5f5f4',
    muted: '#a8a29e',
    line: '#292524',
    accent: '#a3b77a',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the intro line in light italic serif and the title in sans
- **Do:** Use olive (#a3b77a) only for small dots and accents
- **Do:** Keep the ghosted wordmark faint at the bottom of the hero
- **Don't:** Don't brighten the photograph above the dark overlay
- **Don't:** Don't add bright colours to the nav
- **Don't:** Don't set the wordmark at full opacity

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
