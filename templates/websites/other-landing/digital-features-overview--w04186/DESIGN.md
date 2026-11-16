# Design system — Digital Features Overview

`SN-W04186` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm white page where the serif headline (Lora) and rounded sans body (Nunito Sans) give a calm, bookish tone. Coral (#ff8c69) is used sparingly, on small pill labels, icon glyphs and text links, while the feature cards stay white with soft rounded corners. Spacing is generous and the copy is short and friendly.

**Mood:** calm, warm, gentle, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#ff8c69` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ff8c69`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lora
- **Body:** Nunito Sans
- **Loaded families:** Nunito Sans, Lora
- **Scale (largest breakpoint):** h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-lg`, `shadow`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-8`, `gap-12`

**Primary button**

```html
<a class="inline-block px-6 py-3 bg-pastel-primary text-white font-semibold rounded-full shadow transition-all duration-300 hover:bg-pastel-primaryHover hover:shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Feature grid (`features`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #ff8c69;
  --font-display: "Lora", serif;
  --font-body: "Nunito Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    accent: '#ff8c69',
  },
  fontFamily: { display: ['Lora'], sans: ['Nunito Sans'] },
} }
```

## Do and don't

- **Do:** Set headings in Lora and body text in Nunito Sans
- **Do:** Use coral (#ff8c69) for icons, links and small labels only
- **Do:** Round the feature cards generously on a plain white ground
- **Don't:** Don't fill large areas with coral; it is an accent only
- **Don't:** Don't set body copy in the serif face
- **Don't:** Don't add heavy borders or shadows to the feature cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
