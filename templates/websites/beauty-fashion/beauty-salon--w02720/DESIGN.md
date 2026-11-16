# Design system — Beauty Salon 

`SN-W02720` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Beauty salon page on a near-white ground (#fafaf9) with only a soft pink glow in the corners. The headline is a large dark serif, centred, with a grey paragraph below and a rose-pink primary button beside an outlined secondary. A green chat bubble sits in the corner, so the page is light, warm and quietly feminine.

**Mood:** light, warm, feminine, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#f5f5f4` · `#78716c` · `#fb7185` · `#fafaf9` · `#f43f5e` · `#57534e` · `#44403c` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Playfair Display, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** normal, extralight
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full text-base font-normal hover:bg-stone-800 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Newsletter signup (`newsletter`)
8. Timeline (`timeline`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #fb7185;
  --color-accent-2: #25d366;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#fb7185',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-white (#fafaf9) with a faint pink glow only in the corners.
- **Do:** Set headlines in a dark serif, centred, with the grey paragraph beneath.
- **Do:** Use the rose (#fb7185) for the primary button and the green (#25d366) for the chat bubble only.
- **Don't:** Don't set the page ground in pink (#fecdd3); the pink is a glow, not the ground.
- **Don't:** Don't use the green for headings or buttons other than the chat action.
- **Don't:** Don't add a third accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
