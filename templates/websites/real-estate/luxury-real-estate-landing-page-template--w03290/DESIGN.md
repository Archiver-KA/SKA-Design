# Design system — Luxury Real Estate Landing Page Template

`SN-W03290` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Photographic and warm: a dusk photograph of a villa with a pool fills the first screen, and a large white serif headline sits over it in two lines, the second in italic. The primary button is a sand-gold (#c6b07e) rectangle with dark text, and small spaced capitals give the location and price line. The sand tone is the only colour added to the photograph, so the image sets the mood.

**Mood:** photographic, warm, coastal, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#8e8579` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#c6b07e` | Primary action and highlights |
| Second accent | `#1f3a44` | Supporting highlights |

Palette by frequency of use: `#c6b07e` · `#1c1917` · `#ffffff` · `#a8a29e` · `#78716c` · `#faf9f6` · `#292524` · `#e7e5e4` · `#f5f5f4` · `#8e8579`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display, Geist, Roboto, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-stone-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-40`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-[#C6B07E] hover:bg-[#B5A070] text-white px-10 py-5 rounded-sm transition-all duration-500 hover:tracking-widest shadow-2xl shadow-[#C6B07E]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Map / location (`map-location`)
5. Stats band (`stats`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #8e8579;
  --color-text: #ffffff;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #c6b07e;
  --color-accent-2: #1f3a44;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#8e8579',
    ink: '#ffffff',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#c6b07e',
    accent2: '#1f3a44',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif, with the second line in italic.
- **Do:** Use the sand-gold (#c6b07e) for the primary button only.
- **Do:** Keep the hero photograph full-bleed, with no coloured tint over the pool.
- **Don't:** Don't add a colour overlay to the photograph.
- **Don't:** Don't make the primary button an outline; it is filled.
- **Don't:** Don't set the price and location line in lowercase; it uses spaced capitals.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
