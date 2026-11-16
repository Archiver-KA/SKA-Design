# Design system — Custom Apparel Manufacturing Landing Page Template

`SN-W02736` · beauty-fashion · light mode · Sinera Atlas theme `route` · language `en`

## Direction

Stark black-and-white page with an oversized, tightly set sans headline in uppercase. The first two words are solid black and the last word is light grey, which splits the headline into a bold and a quiet part. Thin black hairline rules divide the header, and the start button is a solid black block, so the layout reads as blunt and industrial.

**Mood:** stark, blunt, industrial, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#ff4d00` · `#6b7280` · `#4b5563` · `#e5e7eb` · `#9ca3af` · `#fafafa` · `#111111` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 30px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[200px]`, `max-w-[1600px]`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="cursor-hover h-full flex items-center px-6 text-sm font-medium border-l border-black hover:bg-black hover:text-white transition-colors uppercase tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Dashboard preview (`dashboard-preview`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #000000;
  --color-muted: #9ca3af;
  --color-border: #000000;
  --color-accent: #000000;
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
    surface: '#fafafa',
    ink: '#000000',
    muted: '#9ca3af',
    line: '#000000',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase Inter at very large size, with the last line in grey (#9ca3af)
- **Do:** Use solid black blocks for the header action and keep borders black and hairline
- **Do:** Keep small outlined pill tags above the headline
- **Don't:** Don't add orange; the page is black, white and grey
- **Don't:** Don't soften the headline with a serif or italic; the type is sans throughout
- **Don't:** Don't add shadows or gradients; the page is flat black and white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
