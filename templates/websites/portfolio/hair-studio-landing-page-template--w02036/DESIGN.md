# Design system — Hair Studio Landing Page Template

`SN-W02036` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, airy salon hero where a photograph of a stylist at work fills the right side and fades into the off-white ground on the left. The headline is a serif in near-black over three lines, with the middle phrase in rose italic (#fb7185). A solid black pill and an outlined pill sit under a short intro paragraph. The palette stays warm neutral, and rose is the only colour accent.

**Mood:** light, airy, refined, warm-neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#fb7185` · `#78716c` · `#e7e5e4` · `#fafaf9` · `#fda4af` · `#57534e` · `#f5f5f4` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-8`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-stone-900 hover:bg-rose-300 hover:text-stone-900 transition-all duration-300 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #fb7185;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the rose (#fb7185) italic on one phrase of the headline only
- **Do:** Use a black filled pill for the primary action and an outlined pill for the secondary
- **Do:** Fade the hero photograph into the off-white ground on the left
- **Don't:** Don't use the rose for buttons; it highlights type
- **Don't:** Don't set the headline in a sans; the serif carries the look
- **Don't:** Don't put the intro text over the busy part of the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
