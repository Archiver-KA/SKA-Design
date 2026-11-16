# Design system — Woodworking Services Landing Page Template

`SN-W04135` · business-services · light mode · Sinera Atlas theme `route` · language `nl`

## Direction

A warm off-white hero with a heavy, uppercase sans headline in near-black (#1c1917), set in short stacked lines. A full-height wood photograph fills the right edge, so the natural wood tones supply the colour in the layout. Buttons are dark pills, and a small pill label sits above the headline.

**Mood:** warm, bold, natural, uppercase, craft-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f2ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#c4a484` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#57534e` · `#44403c` · `#d6d3d1` · `#f5f5f4` · `#78716c` · `#fafaf9` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif, Merriweather
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm bg-stone-900 hover:bg-stone-800 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. FAQ (`faq`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f2ef;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #c4a484;
  --color-accent-2: #25d366;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f2ef',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#c4a484',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans-serif in near-black (#1c1917), stacked in short lines
- **Do:** Let the wood photography carry the colour on the right edge
- **Do:** Use dark pill buttons on the warm off-white ground (#f5f2ef)
- **Don't:** Don't tint the wood photography
- **Don't:** Don't add bright colours to the hero
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
