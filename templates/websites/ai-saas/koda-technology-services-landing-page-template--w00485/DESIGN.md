# Design system — Koda Technology Services Landing Page Template

`SN-W00485` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, editorial technology page on a cream ground (#f7f5f0), with a sand-coloured diagonal panel on the right. The headline is very large, uppercase and dark brown, with its middle word in italic for contrast. A thin rule separates the headline from a short body paragraph. Manrope gives the type a quiet, modern voice, and the palette stays in warm neutrals.

**Mood:** warm, editorial, quiet, neutral, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f5f0` | Page ground |
| Surface | `#8c7b70` | Cards, panels, raised areas |
| Text | `#2d2420` | Headings and primary copy |
| Muted text | `#8c7b70` | Secondary copy, captions |
| Border | `#2d2420` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#2d2420` · `#f7f5f0` · `#e6e1d6` · `#8c7b70` · `#c4b6a6` · `#e8e4da` · `#dcd6c8` · `#d4c5b0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Syne
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="mt-4 w-full bg-[#F7F5F0] text-[#2D2420] py-4 rounded font-medium hover:bg-[#C4B6A6] transition-colors flex justify-between px-6 items-center group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Code / terminal (`code-terminal`)
8. Feature grid (`features`)
9. Integrations (`integrations`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f7f5f0;
  --color-surface: #8c7b70;
  --color-text: #2d2420;
  --color-muted: #8c7b70;
  --color-border: #2d2420;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f5f0',
    surface: '#8c7b70',
    ink: '#2d2420',
    muted: '#8c7b70',
    line: '#2d2420',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in large uppercase Manrope, with the middle word in italic
- **Do:** Keep the palette to warm neutrals: cream (#f7f5f0) and dark brown (#2d2420)
- **Do:** Separate the headline from body copy with a thin full-width rule
- **Don't:** Don't add saturated accent colours
- **Don't:** Don't use drop shadows
- **Don't:** Don't set body copy in uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
