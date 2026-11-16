# Design system — Atma Wellness Hotel Landing Page Template

`SN-W02319` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A pale stone page with a heavy black sans headline set in capitals, closing on an italic serif word, return. A tall tan panel fills the right half of the hero as a placeholder for imagery, and a black nav button anchors the top right. The stance is minimal and hospitality-led, with type and empty space carrying the page.

**Mood:** minimal, hospitable, pale, spacious, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebe8e3` | Page ground |
| Surface | `#d1d5db` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#1e1d1b` | Secondary copy, captions |
| Border | `#1e1d1b` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#8b876b` · `#1e1d1b` · `#000000` · `#9ca3af` · `#ebe8e3` · `#4b5563` · `#6b7280` · `#d1d5db` · `#ffffff` · `#1c1b1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 30px · body 18px
- **Weights in use:** light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-16`, `gap-32`, `gap-8`

**Primary button**

```html
<a class="lg:hidden px-6 flex items-center justify-center border-l grid-lines hover:bg-gray-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Services (`services`)
6. Menu list (`menu-list`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ebe8e3;
  --color-surface: #d1d5db;
  --color-text: #111111;
  --color-muted: #1e1d1b;
  --color-border: #1e1d1b;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ebe8e3',
    surface: '#d1d5db',
    ink: '#111111',
    muted: '#1e1d1b',
    line: '#1e1d1b',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans, closing on an italic serif word
- **Do:** Use the black nav button as the only dark block in the top corner
- **Do:** Keep the hero's right half as a large tan image field
- **Don't:** Don't use the khaki (#8b876b) as the page background; the ground is pale
- **Don't:** Don't add colour; the palette is stone and black
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
