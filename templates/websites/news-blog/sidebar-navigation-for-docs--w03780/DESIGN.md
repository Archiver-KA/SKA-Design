# Design system — Sidebar Navigation for Docs

`SN-W03780` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A documentation layout on a plain white ground, with a left sidebar of small grey uppercase section labels and dark link text. The active item is marked in blue text with no fill. The main column opens with one large page title and a short intro paragraph, then a stack of feature cards. The type is SF Pro at restrained sizes, with light separators giving structure.

**Mood:** functional, clean, plain, orderly

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
- **Scale (largest breakpoint):** h1 20px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="block px-2 py-1 rounded-md text-apple-gray-700 hover:text-apple-blue-500 hover:bg-apple-gray-50">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "SF Pro Display", sans-serif;
  --font-body: "SF Pro Display", sans-serif;
  --radius: 6px;
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

- **Do:** Keep the sidebar on white with small uppercase section labels above each group.
- **Do:** Mark the current page with blue text and no background fill.
- **Do:** Set page titles in SF Pro at a large size and body copy at a comfortable reading width.
- **Don't:** Don't use decorative imagery on documentation pages.
- **Don't:** Don't fill the sidebar with a background colour.
- **Don't:** Don't add a second accent colour to navigation.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
