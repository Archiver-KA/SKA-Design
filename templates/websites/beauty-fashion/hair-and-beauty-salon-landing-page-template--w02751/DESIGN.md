# Design system — Hair & Beauty Salon Landing Page Template

`SN-W02751` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark, warm-black hero with a white serif headline whose second and third lines are set in pale cream italic. The primary action is a white filled pill with dark text, beside a dark outlined pill, and the header button is white. A soft warm glow at the base of the hero gives the page a candle-lit mood.

**Mood:** warm, dark, candle-lit, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#57534e` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#1c1917` · `#292524` · `#78716c` · `#fafaf9` · `#a8a29e` · `#d6d3d1` · `#57534e` · `#000000` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-stone-900 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-gold-50 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #57534e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#57534e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the second and third lines in pale cream italic
- **Do:** Use white filled pills with dark text for the main action
- **Do:** Keep the warm near-black ground (#1c1917) with a faint glow at the bottom of the hero
- **Don't:** Don't use a light page ground; the template is dark although its mode is listed as light
- **Don't:** Don't use bright gold fills; the cream italic is the only warm accent
- **Don't:** Don't set the headline in a sans serif; the contrast depends on the serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
