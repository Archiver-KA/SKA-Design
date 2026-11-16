# Design system — Real Estate Agent Landing Page Template

`SN-W03339` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm, personal page on a cream ground (#fdfcf8). The headline is large and dark warm black (#1c1917) with a conversational, first-person tone, and the navigation button is deep green (#344e41), which is also the main action colour. A rounded portrait sits beside the copy, and a scrolling announcement strip runs across the top.

**Mood:** warm, personal, conversational, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#a3b18a` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#a3b18a` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#344e41` | Primary action and highlights |
| Second accent | `#bc4749` | Supporting highlights |

Palette by frequency of use: `#344e41` · `#ffffff` · `#a3b18a` · `#fdfcf8` · `#57534e` · `#1c1917` · `#f5f5f4` · `#a8a29e` · `#e8eddf` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-[#344E41]/20`
- **Content width:** `max-w-6xl`, `max-w-[220px]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#344E41] hover:bg-[#3A5A40] text-white text-xs font-semibold py-3 px-6 rounded-full transition-all shadow-lg shadow-[#344E41]/20 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Stats band (`stats`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Map / location (`map-location`)
6. Listings (`listings`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #a3b18a;
  --color-text: #1c1917;
  --color-muted: #a3b18a;
  --color-border: #f5f5f4;
  --color-accent: #344e41;
  --color-accent-2: #bc4749;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#a3b18a',
    ink: '#1c1917',
    muted: '#a3b18a',
    line: '#f5f5f4',
    accent: '#344e41',
    accent2: '#bc4749',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use deep green (#344e41) for the primary button and key actions
- **Do:** Keep the page ground cream (#fdfcf8) with dark warm text (#1c1917)
- **Do:** Pair the headline with a portrait in a large rounded frame
- **Don't:** Don't use the deep green for long body copy; keep it for buttons and emphasis
- **Don't:** Don't switch to a dark page background; the design is light
- **Don't:** Don't use heavy sales language; the copy stays first-person and casual

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
