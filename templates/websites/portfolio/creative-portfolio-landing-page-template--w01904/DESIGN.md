# Design system — Creative Portfolio Landing Page Template

`SN-W01904` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An off-white page with a very large, tightly set black grotesk headline, set flush right across four lines, which makes the type blunt and confident. The year is set in pale grey as a second level, and small grey copy and tracked labels sit at the left edge. The only colour is a small green availability dot, so the type carries the whole first screen.

**Mood:** blunt, typographic, confident, raw

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#fcfbf9` · `#171717` · `#a3a3a3` · `#737373` · `#f5f5f5` · `#e5e5e5` · `#ffffff` · `#262626` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[100px]` (100px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #10b981;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#10b981',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Set the headline very large, tight, black grotesk, flush right.
- **Do:** Set the year in pale grey below the headline as a second level.
- **Do:** Keep the green (#10b981) to the availability dot.
- **Don't:** Don't soften the headline with a serif or a light weight.
- **Don't:** Don't add imagery to the first screen; the type is the image.
- **Don't:** Don't centre the headline; it runs flush right.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
