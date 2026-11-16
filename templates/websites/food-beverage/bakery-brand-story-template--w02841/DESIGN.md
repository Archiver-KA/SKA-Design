# Design system — Bakery Brand Story Template

`SN-W02841` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `hu`

## Direction

A warm, sandy bakery story page on a flat beige ground (#e7daba), with dark green-grey text (#40453e) throughout. The navigation is small uppercase Montserrat with the current page underlined, and a large rounded image frame dominates the content. The palette is two tones only, so the page relies on its photography and typography for interest.

**Mood:** warm, earthy, plain, bakery-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7daba` | Page ground |
| Text | `#40453e` | Headings and primary copy |
| Border | `#40453e` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#40453e` · `#e7daba`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat
- **Scale (largest breakpoint):** h2 48px · h3 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-12`, `gap-24`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#40453e] text-[#e7daba] text-sm font-medium hover:bg-[#40453e]/90 hover:scale-[1.02] transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e7daba;
  --color-text: #40453e;
  --color-border: #40453e;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7daba',
    ink: '#40453e',
    line: '#40453e',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use the sandy beige (#e7daba) as the ground and dark green-grey (#40453e) for type
- **Do:** Set navigation in small uppercase with the current page underlined
- **Do:** Let the photographs carry the colour; keep the page itself to the two tones
- **Don't:** Don't add a third colour; the palette is these two tones
- **Don't:** Don't use pure black for text; the page uses dark green-grey
- **Don't:** Don't crop the wide image frame into a square

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
