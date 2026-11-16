# Design system — Digital Creative Portfolio Website Template

`SN-W01981` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Split portfolio: a white left panel holds a very large black grotesque name in two lines, with a grey role line and a short Selected Work link lower down. The right half is a pale grey panel meant for a portrait, and two small white buttons float at the lower right. Black, white and pale grey are the whole palette, so the layout depends on the split and the scale of the name.

**Mood:** stark, editorial, black-and-white, spacious, grotesque

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#030712` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#f9fafb` · `#e5e7eb` · `#6b7280` · `#f3f4f6` · `#4b5563` · `#000000` · `#111827` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 56px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-screen-xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Product grid (`product-grid`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Bento grid (`bento-grid`)
7. Stats band (`stats`)
8. Awards / press (`awards-press`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #030712;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#030712',
    muted: '#6b7280',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in a tight grotesque at very large size, in black
- **Do:** Keep the split between a white text panel and a pale grey image panel
- **Do:** Put secondary controls in small white buttons at the lower right
- **Don't:** Don't add an accent colour; the palette is black, white and grey
- **Don't:** Don't leave the portrait panel empty.
- **Don't:** Don't set the grey role line in black; it is muted

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
