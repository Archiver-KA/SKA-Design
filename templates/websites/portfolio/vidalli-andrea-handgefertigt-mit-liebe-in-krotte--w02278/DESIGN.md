# Design system — Vidalli Andrea - handgefertigt mit Liebe in Krottendorf

`SN-W02278` · portfolio · light mode · Sinera Atlas theme `workshop` · language `de`

## Direction

A quiet jewellery page on white: a large black serif headline with its second line in gold italic, a short gold rule above it, and a grey square product panel on the right with small tracked captions in its corners. The gold italic line is the only colour on the page and the recognisable device.

**Mood:** premium, minimal, warm, quiet, artisanal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#9ca3af` · `#6b7280` · `#f9fafb` · `#f3f4f6` · `#4b5563` · `#374151` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** normal, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-8`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-normal text-center overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f3f4f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the gold italic for the second headline line only.
- **Do:** Keep product photography in a flat grey square panel on the right.
- **Do:** Set small tracked uppercase captions in the panel corners.
- **Don't:** Don't use the gold for buttons; the buttons are black.
- **Don't:** Don't set body copy in serif; body text stays small sans.
- **Don't:** Don't add shadows to the image panel; the frame is flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
