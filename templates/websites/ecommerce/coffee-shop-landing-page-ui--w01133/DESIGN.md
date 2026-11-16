# Design system — Coffee Shop Landing Page UI

`SN-W01133` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A light, friendly coffee page on a pale blue-white ground, with a two-tone headline where the first line is dark and the second line is brown (#92400e). A brown primary button sits beside a plain text link, and a subscription card over a dark photograph sits at right. Poppins and rounded corners make the page approachable, with brown kept to the headline, buttons and subscribe action.

**Mood:** friendly, approachable, clean, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0f9ff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#92400e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#92400e` · `#4b5563` · `#fde68a` · `#b45309` · `#6b7280` · `#78350f` · `#fffbeb` · `#f0f9ff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 14px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Section padding:** `py-12`
- **Common gaps:** `gap-12`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-amber-800 text-white px-6 py-3 rounded-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Timeline (`timeline`)
5. Awards / press (`awards-press`)
6. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f0f9ff;
  --color-surface: #ffffff;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #92400e;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0f9ff',
    surface: '#ffffff',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#92400e',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set headlines in Poppins, with the second line in brown (#92400e)
- **Do:** Use brown (#92400e) for the primary button and the subscribe button
- **Do:** Keep the subscription card as a white panel with rounded corners over a photograph
- **Don't:** Don't use the pale blue ground for buttons or cards; it is the page background
- **Don't:** Don't add a third accent colour; the amber tints are for chips only
- **Don't:** Don't set body copy in brown; it stays slate grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
