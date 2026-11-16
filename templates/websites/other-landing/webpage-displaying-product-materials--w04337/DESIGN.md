# Design system — Webpage Displaying Product Materials

`SN-W04337` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark product page on near-black, where the Buy Now button and small status marks are bright yellow [#ffe600], the only loud colour on the page. Specifications sit in a two-column list with the label on the left and the value on the right, separated by thin rules. A green-tinted panel highlights the recyclable materials claim, and the product panels show line icons inside dark frames.

**Mood:** technical, premium, dark, precise, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffe600` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#262626` · `#a3a3a3` · `#ffffff` · `#f5f5f5` · `#171717` · `#d4d4d4` · `#0a0a0a` · `#22c55e` · `#404040` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 24px · h2 30px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex gap-2 bg-brand-500 hover:bg-brand-400 transition sm:px-4 text-sm font-medium text-neutral-950 rounded-xl pt-2 pr-3 pb-2 pl-3 items-center">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product detail (`product-detail`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ffe600;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#ffe600',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#ffe600) for the Buy Now button and one highlight per section
- **Do:** Set specification labels on the left and values on the right with thin rules
- **Do:** Keep the green (#22c55e) inside the sustainability panel only
- **Don't:** Don't use light backgrounds for the product sections
- **Don't:** Don't add yellow to body text
- **Don't:** Don't use the green outside the sustainability panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
