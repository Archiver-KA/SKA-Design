# Design system — Executive Profile Landing Page Template

`SN-W02011` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A plain white corporate profile on a clean grid: a black sans name set large at the top left, small grey uppercase category labels, and a pull quote in regular weight. A tall photograph column sits on the right. Colour is limited to near-black ink and greys, with no accent in use.

**Mood:** corporate, plain, structured, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#d4d4d8` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#ffffff` · `#a1a1aa` · `#71717a` · `#e4e4e7` · `#27272a` · `#d4d4d8` · `#3f3f46` · `#f4f4f5` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`, `max-w-[240px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group flex flex-col md:flex-row gap-6 items-start justify-between p-6 -mx-6 hover:bg-zinc-50 rounded-lg transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #d4d4d8;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#d4d4d8',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in Inter at large size, black, over two lines
- **Do:** Use small grey uppercase labels above headings and under the nav
- **Do:** Keep the palette to black, white and greys
- **Don't:** Don't add an accent colour; the page is monochrome
- **Don't:** Don't leave the portrait column without an image
- **Don't:** Don't set the pull quote in bold or in a colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
