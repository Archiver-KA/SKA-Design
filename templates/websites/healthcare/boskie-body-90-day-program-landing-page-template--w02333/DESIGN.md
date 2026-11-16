# Design system — BOSKIE BODY 90-Day Program Landing Page Template

`SN-W02333` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A bold, minimal fitness page on white with near-black controls and grey type. The headline is heavy Inter set very large in two lines, and the second line, DOSKONALE, is in light grey (#a3a3a3) for contrast. The first screen has no imagery, and the buttons are near-black pills, so the look is confident and stripped back.

**Mood:** bold, minimal, confident, stripped-back

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#404040` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#a3a3a3` · `#f5f5f5` · `#525252` · `#fafafa` · `#737373` · `#e5e5e5` · `#d4d4d4` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 16px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="text-xs font-semibold bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-700 hover:shadow-lg hover:shadow-neutral-500/20 transition-all duration-300 transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #404040;
  --color-text: #171717;
  --color-muted: #a3a3a3;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #25d366;
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
    surface: '#404040',
    ink: '#171717',
    muted: '#a3a3a3',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy Inter at display size, with the second line in grey (#a3a3a3).
- **Do:** Make the primary button a near-black (#171717) pill with white text and the secondary an outline.
- **Do:** Put uppercase, letter-spaced tagline lines under the headline on white.
- **Don't:** Don't use a red accent for large areas; the hero is near-black and grey.
- **Don't:** Don't add photography or colour blocks to the hero; the type carries it.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
