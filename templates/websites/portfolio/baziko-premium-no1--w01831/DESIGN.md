# Design system — Baziko Premium — автоматизированная швейная фабрика №1 в Кыргызстане по рубашкам, блузкам и платьям

`SN-W01831` · portfolio · light mode · Sinera Atlas theme `route` · language `ru`

## Direction

Fashion-led on an off-white ground (#fefdfb): a full-bleed model photograph sits under a grey wash, with a large uppercase sans wordmark across the middle and an outlined button below. Navigation is small uppercase sans in one line. The look is black, grey and the photograph, and the layout is quiet and clean.

**Mood:** fashion, quiet, photographic, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fefdfb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#7f7f7f` | Secondary copy, captions |
| Border | `#7f7f7f` | Hairlines, dividers, outlines |
| Accent | `#4a3728` | Primary action and highlights |

Palette by frequency of use: `#7f7f7f` · `#ffffff` · `#1a1a1a` · `#000000` · `#fefdfb` · `#d1d1d1` · `#857262` · `#f5f5f5` · `#d4c5b9` · `#f9f7f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 36px · h2 96px · h3 48px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-black/5`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-dark text-xs font-light tracking-widest px-8 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-90 group-hover:scale-100 font-manrope">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fefdfb;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #7f7f7f;
  --color-border: #7f7f7f;
  --color-accent: #4a3728;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fefdfb',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#7f7f7f',
    line: '#7f7f7f',
    accent: '#4a3728',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the full-bleed photograph as the hero and set the wordmark over it
- **Do:** Keep navigation small, uppercase and in one line
- **Do:** Use outlined buttons with a small arrow
- **Don't:** Don't use a bright accent.
- **Don't:** Don't put body text directly on the photo without the grey wash
- **Don't:** Don't set the hero on a dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
