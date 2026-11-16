# Design system — The Evolved Network NFP

`SN-W03003` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A plain nonprofit hero on a light grey ground, with a large bold sans headline in near-black, where the second line, connection, is set in a lighter grey. Black filled buttons carry the actions: Get Involved is the primary, and View Our Programs is an outline beside it. The design is neutral and typographic, with no accent colour at all.

**Mood:** neutral, plain, typographic, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e4e4e7` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#fafafa` · `#ffffff` · `#e4e4e7` · `#52525b` · `#f4f4f5` · `#27272a` · `#a1a1aa` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 20px · h3 14px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-1.5`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. About (`about`)
6. Services (`services`)
7. Articles (`blog-articles`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e4e4e7;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e4e4e7',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use black filled buttons for every primary action.
- **Do:** Set the second headline line in a lighter grey, as the hero does.
- **Do:** Keep the palette to greys and black, with no accent colour.
- **Don't:** Don't add a coloured accent to the nonprofit hero.
- **Don't:** Don't set the second headline line in black.
- **Don't:** Don't fill the buttons with a colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
