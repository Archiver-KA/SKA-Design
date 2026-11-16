# Design system — Real Estate Investment Landing Page Template

`SN-W01028` · fintech-crypto · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, cinematic landing page built on black (#000000), with orange (#f97316) used as the single point of light: glowing node markers float across the black field above the headline. Inter is set very large and tight, with the headline mixing white and grey words. The recognisable element is the orange node network, which reads as a map of an operating chain rather than decoration.

**Mood:** cinematic, restrained, technical, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#000000` · `#a3a3a3` · `#d4d4d4` · `#737373` · `#171717` · `#525252` · `#ffcc00` · `#ff3300`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, inherit !important
- **Scale (largest breakpoint):** h1 240px · h2 60px · h3 72px · body 30px
- **Weights in use:** extralight, thin, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_20px_rgba(249,115,22,1)]`, `shadow-[0_0_8px_currentColor]`, `shadow-[0_0_15px_rgba(249,115,22,1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="flex items-center gap-3 bg-white rounded-full px-8 py-4 text-black hover:bg-orange-500 hover:text-white transition-all duration-300 group text-sm tracking-[0.2em] font-light ml-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Services (`services`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #000000;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#000000',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground black (#000000) and use the orange (#f97316) only for glowing markers and one primary action
- **Do:** Set headlines in Inter at very large size with tight leading, mixing white and grey words
- **Do:** Place the orange node map behind the hero as a backdrop, not beside the text
- **Don't:** Don't fill large surfaces with the orange; it is a point of light, not a background
- **Don't:** Don't introduce light-grey sections into the hero; the ground stays black
- **Don't:** Don't use the pill badge shape for large containers; it is reserved for small labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
