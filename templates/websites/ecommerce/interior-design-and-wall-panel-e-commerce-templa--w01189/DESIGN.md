# Design system — Interior Design & Wall Panel E-commerce Template

`SN-W01189` · ecommerce · dark mode · Sinera Atlas theme `market` · language `hu`

## Direction

A dark, minimal wall-panel showroom page on near-black (#0a0a0a) with a wide-tracked uppercase wordmark and small uppercase navigation in light grey. The hero headline is bold white sans with generous space around it, and the two buttons are a white solid block and a white outline, so the page uses no colour at all.

**Mood:** minimal, monochrome, architectural, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#000000` · `#262626` · `#171717` · `#404040` · `#737373` · `#0a0a0a` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors bg-neutral-900 border border-neutral-800 rounded px-3 py-1.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ffffff;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the wordmark and navigation in uppercase with wide letter-spacing.
- **Do:** Use white solid and white outline rectangles for buttons; the page has no colour accents.
- **Do:** Keep the near-black ground (#0a0a0a) and bold white sans for headlines.
- **Don't:** Don't add a colour accent; the design is monochrome.
- **Don't:** Don't set the headline in a serif; the style is one sans.
- **Don't:** Don't round the buttons; the rectangles are part of the style.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
