# Design system — Luxury Real Estate Agency Landing Page Template

`SN-W03286` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Warm and local: a wide photograph of a winding road through red-brown hills fills the first screen under a dark tint, with a centred white serif headline in italic quotation marks. The logo and header button are set in gold outline, and the single call to action is a thin outlined pill. The gold (#c5a55a) is the only accent, and the landscape supplies the warmth.

**Mood:** warm, local, landscape, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2d2d2d` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a55a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c5a55a` · `#1a1a2e` · `#2d2d2d` · `#f8f6f0` · `#e8e4df` · `#e8efe9` · `#e3ecf5` · `#f5f1e3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** DM Sans
- **Loaded families:** Cormorant Garamond, DM Sans
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[#1A1A2E]/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-[#C5A55A] text-[#1A1A2E] font-semibold text-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl mb-6">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Bento grid (`bento-grid`)
6. Logo cloud (`logo-cloud`)
7. Team (`team`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2d2d2d;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c5a55a;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2d2d2d',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c5a55a',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif italic, centred over the landscape photograph.
- **Do:** Use the gold (#c5a55a) for the logo, the header button outline and small highlights.
- **Do:** Keep the photograph under a dark tint so the white type stays readable.
- **Don't:** Don't fill the header button with gold; the outline is the style.
- **Don't:** Don't replace the landscape with interior photos; the hero is outdoors.
- **Don't:** Don't set body copy in gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
