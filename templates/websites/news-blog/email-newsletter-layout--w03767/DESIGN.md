# Design system — Email Newsletter Layout

`SN-W03767` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain white email-style column with a sender header row, a single body block and a light grey featured card. The card holds a bold title, a short grey description and a text link, and two small tiles with icons sit below it. Type is a plain system sans-serif in dark ink, and hairline dividers and white space do the structuring.

**Mood:** plain, functional, neutral, compact, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** SF Pro Display
- **Body:** SF Pro Display
- **Loaded families:** SF Pro Display
- **Scale (largest breakpoint):** h2 20px · body 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-lg`
- **Common gaps:** `gap-4`

**Primary button**

```html
<a class="inline-block bg-apple-blue-500 hover:bg-apple-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition">…</a>
```

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "SF Pro Display", sans-serif;
  --font-body: "SF Pro Display", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['SF Pro Display'], sans: ['SF Pro Display'] },
} }
```

## Do and don't

- **Do:** Keep the message in a single narrow white column
- **Do:** Set titles in dark sans-serif and descriptions in grey
- **Do:** Use text links for calls to action inside the featured card
- **Don't:** Don't put a background colour behind the whole message
- **Don't:** Don't add more than two tiles to the feature row
- **Don't:** Don't use heavy shadows on the card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
