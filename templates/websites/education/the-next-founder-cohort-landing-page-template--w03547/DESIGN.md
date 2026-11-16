# Design system — The NEXT Founder Cohort Landing Page Template

`SN-W03547` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The NEXT is a black, cinematic page where gold (#c9a24c) carries the brand. Wide-tracked uppercase gold headings sit above large white serif statements, so hierarchy comes from scale and contrast rather than colour. The page is nearly monochrome, with event dates in small gold capitals in the top strip. The restraint and the classical serif give it the feel of a high-end event.

**Mood:** cinematic, monochrome, classical, premium, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111418` | Cards, panels, raised areas |
| Text | `#b8b8b8` | Headings and primary copy |
| Muted text | `#7a7a7a` | Secondary copy, captions |
| Accent | `#c9a24c` | Primary action and highlights |

Palette by frequency of use: `#c9a24c` · `#b8b8b8` · `#ffffff` · `#0a0a0a` · `#111418` · `#7a7a7a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 14px · body 16px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Content width:** `max-w-3xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-6`, `gap-12`, `gap-20`

**Primary button**

```html
<a class="inline-block border border-[#C9A24C] bg-[#C9A24C] text-[#0A0A0A] font-medium text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-sm hover:bg-[#C9A24C]/90 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Map / location (`map-location`)
5. Feature grid (`features`)
6. 3D / canvas scene (`3d-canvas`)
7. Logo cloud (`logo-cloud`)
8. Team (`team`)
9. FAQ (`faq`)
10. Product grid (`product-grid`)
11. Case studies (`case-studies`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111418;
  --color-text: #b8b8b8;
  --color-muted: #7a7a7a;
  --color-accent: #c9a24c;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#111418',
    ink: '#b8b8b8',
    muted: '#7a7a7a',
    accent: '#c9a24c',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the primary words in wide-tracked uppercase gold (#c9a24c)
- **Do:** Use white serif type for the statement lines
- **Do:** Keep the page on near-black (#0a0a0a) with no coloured sections
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use sans-serif body copy
- **Don't:** Don't put gold fills behind text blocks

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
