# Design system — Arquitetura & Interiores Landing Page Template

`SN-W01809` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

Architectural and dark: the hero is a photo-led scene under a dark gradient, with a white sans headline in spaced capitals across two short lines. The palette is black, white and smoke. The effect is moody and editorial, with generous dark space behind the type.

**Mood:** moody, editorial, dark, architectural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#222222` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#c9a84c` · `#0a0a0a` · `#000000` · `#0f0f0f` · `#151515` · `#111111` · `#222222` · `#f2f2f2` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Lato
- **Loaded families:** Cormorant Garamond, Lato, Montserrat
- **Scale (largest breakpoint):** h2 60px · h3 72px · body 12px
- **Weights in use:** light
- **Letter spacing:** `tracking-[0.3em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/5`
- **Content width:** `max-w-[90rem]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-12`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#C9A84C]/40 text-[0.65rem] font-mono tracking-[0.3em] text-white hover:bg-[#C9A84C] hover:text-[#0a0a0a] transition-all duration-500 group relative overflow-hidden bg-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #222222;
  --color-border: #ffffff;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Lato", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#222222',
    line: '#ffffff',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Set the hero on a near-black ground with white type
- **Do:** Use spaced capitals for the headline lines
- **Do:** Keep the photograph under a dark gradient so the type stays legible
- **Don't:** Don't use the gold (#c9a84c) as a background.
- **Don't:** Don't set body text in dark grey over dark photos
- **Don't:** Don't add a light section above the fold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
