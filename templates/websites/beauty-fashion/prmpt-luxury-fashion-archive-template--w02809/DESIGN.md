# Design system — prmpt® Luxury Fashion Archive Template

`SN-W02809` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome, brutalist-leaning fashion archive on white (#ffffff) with near-black type (#111111) and no accent colour. The lowercase wordmark is set very large in a grotesk, and body text is tiny and uppercase, so the scale contrast does most of the work. Empty space and a small circled mark keep the page feeling like an exhibition rather than a storefront.

**Mood:** monochrome, brutalist, exhibition-like, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Common gaps:** `gap-1`, `gap-2`, `gap-5`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
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
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Set the wordmark very large in Inter Tight as the main graphic element
- **Do:** Keep body and label text small, uppercase and near-black
- **Do:** Use black and white only; add no accent colour to buttons or links
- **Don't:** Don't soften the wordmark with rounded or decorative type
- **Don't:** Don't introduce grey panels; the page uses white and black
- **Don't:** Don't use drop shadows or gradients for depth

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
