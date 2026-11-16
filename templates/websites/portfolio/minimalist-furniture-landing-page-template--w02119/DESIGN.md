# Design system — Minimalist Furniture Landing Page Template

`SN-W02119` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet furniture-catalogue layout on a plain white page (#ffffff) with near-black text (#111111). Type is a neutral system sans, and the hierarchy comes from size and whitespace rather than colour. The product photography and the short two-line statements carry the look, with the interface kept almost invisible.

**Mood:** calm, minimal, monochrome, gallery-like, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), React

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the page on #ffffff with #111111 text and no tinted sections.
- **Do:** Let size and spacing create the hierarchy; use the system sans for both display and body.
- **Do:** Show products as large photography with a short caption and price beneath.
- **Don't:** Don't add a brand accent colour; the page is monochrome.
- **Don't:** Don't put decorative graphics or gradients behind the product images.
- **Don't:** Don't crowd the hero with more than one headline and a short line of copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
