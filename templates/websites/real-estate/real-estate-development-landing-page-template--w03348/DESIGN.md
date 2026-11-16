# Design system — Real Estate Development Landing Page Template

`SN-W03348` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome hero where an oversized lowercase Geist headline stacks over three lines in near-black, set against a grey gradient that lightens to a pale band in the centre. A small outlined icon floats mid-page, and the navigation is small text with a bold contact link. The page is greyscale, relying on scale and a trailing underscore as its signature.

**Mood:** monochrome, bold, minimal, contemporary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#1c1c1c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1800px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-12`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="mt-8 px-8 py-4 border border-brand-black/20 text-brand-black rounded-full font-medium text-sm hover:bg-brand-black transition-all w-fit hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. FAQ (`faq`)
6. Process / steps (`how-it-works`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in very large lowercase Geist, stacked over several lines
- **Do:** Keep the palette to black, white and grey
- **Do:** Use the trailing underscore as the signature mark on headlines
- **Don't:** Don't add an accent colour to the hero or navigation
- **Don't:** Don't place small text on the mid-grey gradient without checking contrast
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
