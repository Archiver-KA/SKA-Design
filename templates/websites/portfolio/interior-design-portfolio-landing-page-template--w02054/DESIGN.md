# Design system — Interior Design Portfolio Landing Page Template

`SN-W02054` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A refined interior studio page built around a full-bleed photograph of a styled room, dimmed so a centred white serif headline can sit over it. The Polish title is set in a serif with an italic second word, and the body copy is small, light and centred beneath it. Colour comes from the photograph; the interface adds only white type and a thin, transparent navigation bar.

**Mood:** refined, photographic, calm, minimal, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8d9cb` | Page ground |
| Surface | `#fdfbf9` | Cards, panels, raised areas |
| Text | `#fdfbf9` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#0d0f0b` | Hairlines, dividers, outlines |
| Accent | `#c5a065` | Primary action and highlights |

Palette by frequency of use: `#0d0f0b` · `#c5a065` · `#ffffff` · `#9ca3af` · `#6b7280` · `#d1d5db` · `#fdfbf9` · `#e8d9cb` · `#374151` · `#f3e5d5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Montserrat, Playfair Display, Geist, Roboto, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="px-6 py-3 border border-[#0d0f0b] hover:bg-[#0d0f0b] hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. Logo cloud (`logo-cloud`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8d9cb;
  --color-surface: #fdfbf9;
  --color-text: #fdfbf9;
  --color-muted: #6b7280;
  --color-border: #0d0f0b;
  --color-accent: #c5a065;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8d9cb',
    surface: '#fdfbf9',
    ink: '#fdfbf9',
    muted: '#6b7280',
    line: '#0d0f0b',
    accent: '#c5a065',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Dim the photograph behind centred hero copy so white serif type stays readable.
- **Do:** Set the headline in a serif display face, with one italic word.
- **Do:** Keep the navigation thin and transparent over the image.
- **Don't:** Don't add coloured accents; colour comes from the photography.
- **Don't:** Don't set body copy in a heavy weight over the image.
- **Don't:** Don't place the headline over the brightest part of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
