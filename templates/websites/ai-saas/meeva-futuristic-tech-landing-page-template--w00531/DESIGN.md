# Design system — Meeva Futuristic Tech Landing Page Template

`SN-W00531` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bare lowercase wordmark sits centred on white with a hairline rule beneath it, so the design reads as stark and minimal. Outfit is the display face and Inter the body face, with a red (#e60000) accent for single points of emphasis and GSAP driving the motion.

**Mood:** minimal, airy, restrained, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8f9fa` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#666666` | Hairlines, dividers, outlines |
| Accent | `#e60000` | Primary action and highlights |

Palette by frequency of use: `#e60000` · `#1a1a1a` · `#666666` · `#ffffff` · `#f8f9fa` · `#000000` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-black/5`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1800px]`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-6`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-neutral hover:text-dark hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Bento grid (`bento-grid`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-text: #1a1a1a;
  --color-muted: #666666;
  --color-border: #666666;
  --color-accent: #e60000;
  --font-display: "Outfit", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8f9fa',
    ink: '#1a1a1a',
    muted: '#666666',
    line: '#666666',
    accent: '#e60000',
  },
  fontFamily: { display: ['Outfit'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground white (#ffffff) with near-black (#1a1a1a) type
- **Do:** Set display headings in Outfit and body copy in Inter
- **Do:** Use the red accent (#e60000) for single points of emphasis only
- **Don't:** Don't switch the ground to a dark colour; the template is built on white
- **Don't:** Don't add decoration around the wordmark; it stands alone
- **Don't:** Don't replace Outfit with a system sans-serif for headings

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
