# Design system — Qlad - A Trust Orchestrator Built For Quantum

`SN-W00653` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black security page with a crisp white headline in three lines, where the last line drops to grey so the closing argument reads as a secondary note. The right side holds a dark status card with key-value rows in a monospace style, and green check marks flag healthy values. Solid and outlined buttons sit side by side, and the page reads as a precise security tool rather than a brochure.

**Mood:** sharp, dark, security, precise, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f7f7f7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#e6e6e6` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#666666` · `#999999` · `#777777` · `#888888` · `#e6e6e6` · `#e5e5e5` · `#f7f7f7` · `#bbbbbb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Inter Tight
- **Scale (largest breakpoint):** h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-[30px]`

**Primary button**

```html
<a class="inline-flex items-center text-xs font-semibold uppercase px-4 py-2 text-black bg-white hover:bg-[#E5E5E5]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Services (`services`)
6. Team (`team`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f7f7f7;
  --color-text: #ffffff;
  --color-muted: #666666;
  --color-border: #e6e6e6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f7f7f7',
    ink: '#ffffff',
    muted: '#666666',
    line: '#e6e6e6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold white sans on black (#000000), with the final line in grey (#666666)
- **Do:** Use a dark status card with key-value rows and small monospace labels as the product proof
- **Do:** Use green only for healthy values inside the status card
- **Don't:** Don't set the page on white; it is black
- **Don't:** Don't use a bright colour for buttons; the solid button is white
- **Don't:** Don't add gradient fills to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
