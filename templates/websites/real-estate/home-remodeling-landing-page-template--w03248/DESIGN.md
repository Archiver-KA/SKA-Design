# Design system — Home Remodeling Landing Page Template

`SN-W03248` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold, black-on-white real-estate page where a very large heavy sans headline runs across several lines, with the second phrase opening on a long dash. A near-black pill button anchors the copy, and a photograph sits in a tall rounded frame with a small floating card holding three round social icons. Colour is absent, and the layout is open and editorial, relying on scale and contrast.

**Mood:** bold, editorial, monochrome, open

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#a3a3a3` · `#f5f5f5` · `#e5e5e5` · `#262626` · `#fafafa` · `#525252` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 112px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[80px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large heavy black sans, across three or four lines.
- **Do:** Use near-black (#171717) for the primary button and keep it the only solid fill.
- **Do:** Place the photograph in a tall rounded frame with one small floating card over its corner.
- **Don't:** Don't add colour; the palette is black, white and greys.
- **Don't:** Don't set the headline in light weights; it reads heavy and large.
- **Don't:** Don't use a grey page ground; the background is near-white (#fafafa).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
