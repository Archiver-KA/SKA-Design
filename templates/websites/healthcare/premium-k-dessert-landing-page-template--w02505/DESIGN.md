# Design system — Premium K-Dessert Landing Page Template

`SN-W02505` · healthcare · dark mode · Sinera Atlas theme `calm` · language `ko`

## Direction

A near-black page with a gold header button and small, widely spaced uppercase navigation set in a serif. The palette is black and white with one gold accent. Cormorant Garamond runs through headings and body, giving a quiet, luxurious tone that relies on gold for its single highlight.

**Mood:** dark, quiet, luxurious, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter, Noto Serif KR
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[87.5rem]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="font-heading text-xs-rem font-normal tracking-widest uppercase text-black bg-gold px-4 py-2 transition-all hover:bg-gold-light hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #f5f5f5;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#f5f5f5',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set navigation in small, widely spaced uppercase serif
- **Do:** Use gold for the header inquiry button and one highlight per section
- **Do:** Keep the ground near-black and let photography carry the hero
- **Don't:** Don't add bright colours; the page is black and white with one gold accent
- **Don't:** Don't place light grey panels over the black ground
- **Don't:** Don't set long passages in pure white on black; use the off-white text (#f5f5f5)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
