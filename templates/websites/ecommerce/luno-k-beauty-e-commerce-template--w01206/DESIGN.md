# Design system — LUNO K-Beauty E-commerce Template

`SN-W01206` · ecommerce · dark mode · Sinera Atlas theme `market` · language `pt`

## Direction

A dark, gentle skincare stance: a charcoal page with the headline in off-white sans-serif on two lines, the second line in soft peach. Peach marks emphasis, not a bright colour, and small uppercase text carries the navigation. The layout is in the same family as the K-Beauty template.

**Mood:** gentle, dark, quiet, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#212322` | Page ground |
| Surface | `#252726` | Cards, panels, raised areas |
| Text | `#f2f2f1` | Headings and primary copy |
| Border | `#f2f2f1` | Hairlines, dividers, outlines |
| Accent | `#ecbaa8` | Primary action and highlights |
| Second accent | `#f1bdc8` | Supporting highlights |

Palette by frequency of use: `#f2f2f1` · `#b4b5df` · `#212322` · `#f1bdc8` · `#252726` · `#b5e3d8` · `#ecbaa8` · `#1a1b1a` · `#1e1f1e` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** normal, light, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg'`
- **Content width:** `max-w-[160px]`, `max-w-[1600px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#B4B5DF] text-[#212322] text-xs font-normal tracking-widest uppercase rounded-lg px-8 py-4 hover:bg-[#F2F2F1] transition-colors whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Call to action (`cta`)
5. Stats band (`stats`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #212322;
  --color-surface: #252726;
  --color-text: #f2f2f1;
  --color-border: #f2f2f1;
  --color-accent: #ecbaa8;
  --color-accent-2: #f1bdc8;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#212322',
    surface: '#252726',
    ink: '#f2f2f1',
    line: '#f2f2f1',
    accent: '#ecbaa8',
    accent2: '#f1bdc8',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in peach (#ecbaa8) and keep the rest off-white.
- **Do:** Keep the charcoal (#212322) as the ground for the hero and page sections.
- **Do:** Use small uppercase, tracked text for eyebrow labels and navigation.
- **Don't:** Don't use the lavender (#b4b5df) as a hero emphasis colour.
- **Don't:** Don't rely on the logo image alone; provide a text fallback.
- **Don't:** Don't use pure black or pure white; the palette is charcoal and warm off-white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
