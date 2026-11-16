# Design system — Global Beer Network - V1

`SN-W02030` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, photographic hero: a close-up of beer taps and a glass under a dark brown overlay, so the first screen reads as an amber-toned evening scene. A stacked white logo mark sits centred above a large serif headline with one word in italic. The layout is symmetric and ceremonial, and the warm amber of the beer supplies the only colour, with no added accent.

**Mood:** ceremonial, warm, photographic, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141414` | Page ground |
| Surface | `#f2f0ea` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#0a0a0a` · `#000000` · `#141414` · `#eab308` · `#050505` · `#f2f0ea` · `#f97316` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-40`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Stats band (`stats`)
5. Bento grid (`bento-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #141414;
  --color-surface: #f2f0ea;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141414',
    surface: '#f2f0ea',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#eab308',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Place the headline in a large serif with one italic word over a darkened photograph
- **Do:** Keep the logo mark white and centred above the headline
- **Do:** Let the warm photograph supply the colour rather than adding a gold accent
- **Don't:** Don't put a white ground behind the hero; the hero is dark
- **Don't:** Don't set the headline in a bold sans; the serif carries the tone
- **Don't:** Don't use bright yellow text on the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
