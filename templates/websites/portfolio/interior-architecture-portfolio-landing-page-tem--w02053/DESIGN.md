# Design system — Interior Architecture Portfolio Landing Page Template

`SN-W02053` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, editorial studio page where a large white serif headline, with an italic second line, sits over a dimmed interior photograph. Navigation is small, spaced uppercase and kept along the top edge, and the palette is almost entirely near-black and warm white. The round mirror and the dimmed room behind the headline make the photograph the page's colour.

**Mood:** editorial, elegant, dark, photographic, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5f5f4` | Primary action and highlights |

Palette by frequency of use: `#f5f5f4` · `#ffffff` · `#78716c` · `#e7e5e4` · `#0c0a09` · `#57534e` · `#a8a29e` · `#44403c` · `#1c1917` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 160px · h2 48px · h3 36px · body 10px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-stone-100 text-stone-950 px-8 py-4 text-[0.65rem] font-semibold tracking-[0.2em] uppercase hover:bg-white transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #0c0a09;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f5f5f4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#0c0a09',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f5f5f4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif with the second line in italic, white on the photograph.
- **Do:** Dim the interior photograph behind the hero so the headline stays readable.
- **Do:** Keep navigation small, uppercase and spaced along the top edge.
- **Don't:** Don't add bright accent colours; the page uses near-black and warm white only.
- **Don't:** Don't place the headline over a bright area of the photograph.
- **Don't:** Don't set the headline in a bold weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
