# Design system — Modern Womenswear E-commerce Landing Page Template

`SN-W01267` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A quiet fashion landing on a near-white cream ground with an editorial serif headline, Effortless set upright over Elegance in italic. A black solid button sits beside a white outlined one, and a thin taupe strip runs above the nav. The only accent is a rose-red Sale link in the nav, and the hero is otherwise black and cream.

**Mood:** editorial, soft, classic, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#a48f7f` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#3f3f46` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |
| Second accent | `#e8dcc4` | Supporting highlights |

Palette by frequency of use: `#a48f7f` · `#ffffff` · `#18181b` · `#e4e4e7` · `#71717a` · `#000000` · `#f4f4f5` · `#a1a1aa` · `#3f3f46` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1400px]`, `max-w-[1440px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="p-1 rounded-full transition-colors hover:bg-zinc-50">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Call to action (`cta`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #a48f7f;
  --color-text: #18181b;
  --color-muted: #3f3f46;
  --color-border: #e4e4e7;
  --color-accent: #f87171;
  --color-accent-2: #e8dcc4;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#a48f7f',
    ink: '#18181b',
    muted: '#3f3f46',
    line: '#e4e4e7',
    accent: '#f87171',
    accent2: '#e8dcc4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif, with the second word in italic
- **Do:** Keep the Sale link as the only red in the nav
- **Do:** Use one black solid button beside one outlined button
- **Don't:** Don't tint the page background pink; the ground is cream
- **Don't:** Don't set body copy in serif
- **Don't:** Don't add a second accent beside the rose-red

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
