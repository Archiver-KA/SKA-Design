# Design system — ECHOES Visual Experience Landing Page Template

`SN-W02001` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black stage (#000000) with a hairline-bordered navigation bar and oversized, almost invisible display type reading CREATIVE behind a centred glow. The glow mixes a deep red and a violet from the palette, so colour arrives as light rather than as fills. The wordmark is a spaced serif at the top left and the links are a small sans. The result is cinematic and quiet, with type that recedes behind imagery.

**Mood:** cinematic, dark, atmospheric, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#000000` · `#a3a3a3` · `#a855f7` · `#f59e0b` · `#171717` · `#dc2626` · `#450a0a` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 36px · body 14px
- **Weights in use:** light, extralight, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-red-600/50`, `shadow-white/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group inline-flex items-center gap-3 transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50 font-light text-white tracking-wide bg-red-600 px-8 py-4 relative">…</a>
```

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Timeline (`timeline`)
6. About (`about`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #a855f7;
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
    surface: '#171717',
    ink: '#f5f5f5',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at pure black (#000000) with light text (#f5f5f5)
- **Do:** Use blurred red and violet glows as the only colour, behind the content
- **Do:** Set the wordmark in spaced uppercase serif at the top left
- **Don't:** Don't add solid colour fills to large sections
- **Don't:** Don't make the oversized display text fully opaque
- **Don't:** Don't use bright white for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
