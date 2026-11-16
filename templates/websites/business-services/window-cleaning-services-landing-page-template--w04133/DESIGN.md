# Design system — Window Cleaning Services Landing Page Template

`SN-W04133` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark slate hero (#1f2937) with a large white serif headline, paired with a sky-blue (#0ea5e9) solid button and an outline button for the second action. Small outlined pill tags sit above the headline in uppercase, and light grey support text stays quiet beneath. The classic serif set against a clean sans for labels gives the page a steady, trustworthy tone.

**Mood:** classic, dark, steady, clean, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1f2937` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#ffffff` · `#0ea5e9` · `#f8fafc` · `#1f2937` · `#000000` · `#0284c7` · `#f1f5f9` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-full` (9999px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-[1600px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-6 py-2.5 rounded-full bg-[#0ea5e9] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#0284c7] transition shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Booking form (`booking`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1f2937;
  --color-surface: #f8fafc;
  --color-text: #1a1a1a;
  --color-border: #1a1a1a;
  --color-accent: #0ea5e9;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1f2937',
    surface: '#f8fafc',
    ink: '#1a1a1a',
    line: '#1a1a1a',
    accent: '#0ea5e9',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif face in white on the dark slate hero
- **Do:** Use sky blue (#0ea5e9) for the primary button only
- **Do:** Use outlined uppercase tags above the headline for service labels
- **Don't:** Don't set body copy in serif
- **Don't:** Don't use sky blue for body text
- **Don't:** Don't turn the content sections dark; the contrast is set by the hero alone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
