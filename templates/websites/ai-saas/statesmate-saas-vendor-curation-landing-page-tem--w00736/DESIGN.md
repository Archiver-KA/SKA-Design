# Design system — Statesmate SaaS Vendor Curation Landing Page Template

`SN-W00736` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean, light marketplace hero: a near-white ground with a heavy near-black headline, where 'Best Vendors.' is underlined by a lime (#c1ff72) bar. The primary button is lime with dark text, and the secondary is a plain outline. Floating white cards on the right show vendor matches with small status tags, so the marketplace is shown rather than described.

**Mood:** clean, fresh, confident, marketplace, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#1c1917` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#c1ff72` | Primary action and highlights |
| Second accent | `#d1fae5` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#57534e` · `#a8a29e` · `#c1ff72` · `#78716c` · `#e7e5e4` · `#292524` · `#e0f2fe` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Geist
- **Loaded families:** Montserrat, Geist, Roboto, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-8`

**Primary button**

```html
<a class="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #1c1917;
  --color-border: #e7e5e4;
  --color-accent: #c1ff72;
  --color-accent-2: #d1fae5;
  --font-display: "Manrope", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#1c1917',
    line: '#e7e5e4',
    accent: '#c1ff72',
    accent2: '#d1fae5',
  },
  fontFamily: { display: ['Manrope'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Underline one headline phrase with a lime (#c1ff72) bar.
- **Do:** Make the primary button lime with near-black text.
- **Do:** Show matches as small white cards with status tags on the right.
- **Don't:** Don't fill large sections with lime; keep it to the button and the underline.
- **Don't:** Don't set lime text on white; it is too pale to read.
- **Don't:** Don't round the cards beyond the rounded-xl used in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
