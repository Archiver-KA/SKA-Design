# Design system — Luxury Salon Landing Page Template

`SN-W02787` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark luxury salon hero on near-black (#050505) with faint violet and rose glows at the edges. The white serif headline's italic second line carries a blush gradient from pale rose to peach (#e1bfa3). A peach primary button sits beside an outlined secondary, so blush is the only warm colour.

**Mood:** dark, romantic, luxurious, soft, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f5f5f5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e1bfa3` | Primary action and highlights |
| Second accent | `#881337` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e1bfa3` · `#000000` · `#d8b4fe` · `#050505` · `#881337` · `#581c87` · `#bfdbfe` · `#18181b` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 36px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_30px_rgba(225,191,163,0.4)]`, `shadow-[0_20px_50px_rgba(225,191,163,0.1)]`, `shadow-[0_20px_50px_rgba(168,85,247,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 bg-[#e1bfa3] text-black rounded-full font-medium tracking-wide hover:shadow-[0_0_30px_rgba(225,191,163,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 w-full md:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Team (`team`)
5. Services (`services`)
6. About (`about`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Product grid (`product-grid`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #f5f5f5;
  --color-border: #ffffff;
  --color-accent: #e1bfa3;
  --color-accent-2: #881337;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#f5f5f5',
    line: '#ffffff',
    accent: '#e1bfa3',
    accent2: '#881337',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic with a blush gradient from pale rose to #e1bfa3.
- **Do:** Use peach (#e1bfa3) for the primary button and keep the secondary button outlined.
- **Do:** Keep the background near-black (#050505) with the glows only at the edges.
- **Don't:** Don't make the glows brighter; they stay behind the content.
- **Don't:** Don't use the violet (#581c87) as a fill colour.
- **Don't:** Don't set the italic headline line in solid white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
