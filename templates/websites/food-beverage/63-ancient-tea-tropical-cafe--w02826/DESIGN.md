# Design system — 63 Ancient Tea - Tropical Café

`SN-W02826` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A tropical café page built on a deep green photographic hero, a dimmed garden scene with tables and plants. The headline is a light, high-contrast serif in cream, with its second word in italic, and the navigation is a pale cream strip with dark green type. The look is calm and botanical, with one thin outline button in the hero and a palette held to greens and cream.

**Mood:** botanical, calm, photographic, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf9f6` | Page ground |
| Surface | `#f4f0e6` | Cards, panels, raised areas |
| Text | `#1c3028` | Headings and primary copy |
| Muted text | `#8b9e94` | Secondary copy, captions |
| Border | `#fbf9f6` | Hairlines, dividers, outlines |
| Accent | `#efeae1` | Primary action and highlights |

Palette by frequency of use: `#fbf9f6` · `#efeae1` · `#c25e40` · `#1c3028` · `#8b9e94` · `#e3dbcc` · `#5a7366` · `#4a6b5d` · `#2d4a3e` · `#f4f0e6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="inline-block border border-[#fbf9f6] px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#fbf9f6] hover:text-[#2d4a3e] transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbf9f6;
  --color-surface: #f4f0e6;
  --color-text: #1c3028;
  --color-muted: #8b9e94;
  --color-border: #fbf9f6;
  --color-accent: #efeae1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf9f6',
    surface: '#f4f0e6',
    ink: '#1c3028',
    muted: '#8b9e94',
    line: '#fbf9f6',
    accent: '#efeae1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif with the second word in italic
- **Do:** Use a thin cream outline button on dark imagery
- **Do:** Keep the palette to deep green (#1c3028) and cream (#efeae1)
- **Don't:** Don't set body copy at small size over the photograph; keep it on the green overlay
- **Don't:** Don't add bright colours; the palette stays green and cream
- **Don't:** Don't drop the pale navigation strip over the photograph without its background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
