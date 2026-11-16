# Design system — Hassan Irshad Portfolio

`SN-W02041` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, near-black portfolio with a large Inter headline set in white and a fade into grey across the name, which gives the top of the page its weight. Indigo (#6366f1) appears only in small markers such as the availability pill, so the palette stays almost monochrome. The recognisable element is the oversized, tightly set name in the hero under a floating navigation pill.

**Mood:** monochrome, technical, understated, dark, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#171717` · `#a3a3a3` · `#6366f1` · `#fafafa` · `#e5e5e5` · `#818cf8` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 12px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-black/5`, `shadow-black/20`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="nav-link px-3 sm:px-4 py-2 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)
6. About (`about`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #f97316;
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
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page monochrome and use indigo (#6366f1) only for small status markers.
- **Do:** Set the hero name in Inter at display size with a white-to-grey fade.
- **Do:** Keep the hero on near-black with the navigation as a floating pill.
- **Don't:** Don't use white section backgrounds; the look depends on the near-black ground.
- **Don't:** Don't add a second bright accent beside the indigo.
- **Don't:** Don't set the headline in a serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
