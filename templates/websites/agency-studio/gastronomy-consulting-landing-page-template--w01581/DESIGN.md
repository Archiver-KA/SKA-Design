# Design system — Gastronomy Consulting Landing Page Template

`SN-W01581` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `sk`

## Direction

A warm light-grey ground (#e8e8e6) with a very large heavy black headline in two lines, the second word set in wine (#722f37) as the single colour note. A small outlined label sits above in spaced uppercase, and a short body column on the right gives the layout a magazine feel. The wine is a headline accent, not a background, so the page stays mostly neutral.

**Mood:** editorial, neutral, bold, refined, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8e8e6` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#d4d4d4` | Hairlines, dividers, outlines |
| Accent | `#722f37` | Primary action and highlights |

Palette by frequency of use: `#722f37` · `#ffffff` · `#a3a3a3` · `#171717` · `#d4d4d4` · `#e8e8e6` · `#e5e5e5` · `#525252` · `#ff4d4d` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[#722F37]/40`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full py-6 mt-8 bg-gradient-to-r from-[#722F37] via-[#a31621] to-[#722F37] btn-gradient-animate text-white text-sm font-bold uppercase tracking-[0.2em] hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Marquee (`marquee`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8e8e6;
  --color-surface: #171717;
  --color-text: #171717;
  --color-muted: #a3a3a3;
  --color-border: #d4d4d4;
  --color-accent: #722f37;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8e8e6',
    surface: '#171717',
    ink: '#171717',
    muted: '#a3a3a3',
    line: '#d4d4d4',
    accent: '#722f37',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black sans at display size, with the second word in wine (#722f37)
- **Do:** Use the wine (#722f37) for the single headline accent and small links only
- **Do:** Frame section labels in a thin outlined pill with spaced uppercase text
- **Don't:** Don't use wine as the page ground; the page is light and neutral
- **Don't:** Don't set the headline in white; it is black on the light ground
- **Don't:** Don't add colours beside the wine; keep the rest neutral

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
