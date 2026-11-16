# Design system — Men’s Fitness Landing Page Template

`SN-W02653` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A photographic, monochrome hero: a black-and-white athlete image sits under white headlines on a black ground. The headline sets a large sans-serif statement with one word switched to an italic serif, which adds a single editorial note. There is no hue at all; the pale grey accent is used for the white buttons. Depth comes from the photograph and the dark surfaces, not from colour.

**Mood:** monochrome, editorial, stark, cinematic, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#000000` · `#78716c` · `#e7e5e4` · `#a8a29e` · `#57534e` · `#d6d3d1` · `#f5f5f4` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Instrument Serif, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="px-6 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors z-50 border border-transparent bg-white text-black hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Services (`services`)
6. Articles (`blog-articles`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #e2e8f0;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Pair a large white sans-serif headline with one italic serif word.
- **Do:** Use a black-and-white photograph as the hero background, darkened to keep the text readable.
- **Do:** Make primary buttons white with black text and a circular arrow icon.
- **Don't:** Don't introduce a colour accent; the page is monochrome.
- **Don't:** Don't set the italic serif for body text.
- **Don't:** Don't place text over the brightest part of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
