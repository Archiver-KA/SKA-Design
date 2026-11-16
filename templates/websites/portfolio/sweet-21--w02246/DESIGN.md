# Design system — Sweet 21

`SN-W02246` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A soft, sentimental birthday page on a near-white pink ground (#fdf2f4) with a dark warm-brown headline (#3b322c). The display type is a tight serif, with the second line in pink italic set at the same size as the first, so it reads like a handwritten card. Pill buttons in the dark brown give a clear action, and a thin pink progress bar runs along the top edge. The pairing of the brown serif line with the pink italic line is what makes it recognisable.

**Mood:** sentimental, soft, romantic, warm, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdf2f4` | Page ground |
| Text | `#3b322c` | Headings and primary copy |
| Muted text | `#3b322c` | Secondary copy, captions |
| Border | `#3b322c` | Hairlines, dividers, outlines |
| Accent | `#e6a8b3` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#3b322c` · `#e6a8b3` · `#ffffff` · `#fcfaf8` · `#d4af37` · `#fdf2f4` · `#f4ebe1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** DM Sans
- **Loaded families:** Cormorant Garamond, DM Sans, Alex Brush
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_20px_rgba(230,168,179,0.3)]`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-ink text-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Awards / press (`awards-press`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdf2f4;
  --color-text: #3b322c;
  --color-muted: #3b322c;
  --color-border: #3b322c;
  --color-accent: #e6a8b3;
  --color-accent-2: #d4af37;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdf2f4',
    ink: '#3b322c',
    muted: '#3b322c',
    line: '#3b322c',
    accent: '#e6a8b3',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the pink accent, italic, at the same size as the first.
- **Do:** Use the dark brown (#3b322c) for headlines and the primary button.
- **Do:** Keep the ground near-white with pink as the only tint.
- **Don't:** Don't use the gold (#d4af37) for text on the light ground
- **Don't:** Don't add a second accent colour to the headline.
- **Don't:** Don't set body copy in italic; body text stays in the sans face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
