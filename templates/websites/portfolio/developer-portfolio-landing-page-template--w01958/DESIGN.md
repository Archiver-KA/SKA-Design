# Design system — Developer Portfolio Landing Page Template

`SN-W01958` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Editorial and poster-like: a near-black ground (#090909) carries very large uppercase Inter headlines in warm off-white (#d3c8b8), with one word set in orange-red (#ff5b36) for emphasis. Colour is limited to that single accent, so the hero reads as a typographic block rather than a set of cards. Depth comes from the type scale and the flat dark surfaces, not from shadows.

**Mood:** bold, typographic, monochrome, warm, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#090909` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#d3c8b8` | Headings and primary copy |
| Muted text | `#7d766c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff5b36` | Primary action and highlights |

Palette by frequency of use: `#ff5b36` · `#ffffff` · `#d3c8b8` · `#7d766c` · `#a79d90` · `#918879` · `#090909` · `#f7f2ea` · `#9f978a` · `#bfb4a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 176px · h2 112px · h3 36px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #090909;
  --color-surface: #111111;
  --color-text: #d3c8b8;
  --color-muted: #7d766c;
  --color-border: #ffffff;
  --color-accent: #ff5b36;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#090909',
    surface: '#111111',
    ink: '#d3c8b8',
    muted: '#7d766c',
    line: '#ffffff',
    accent: '#ff5b36',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in uppercase Inter at display size (about 176px)
- **Do:** Use #ff5b36 for one highlighted word per headline only
- **Do:** Keep headline and body text in the warm neutral #d3c8b8 rather than pure white
- **Don't:** Don't add a second accent colour beside #ff5b36
- **Don't:** Don't use rounded cards; keep the flat dark surfaces
- **Don't:** Don't set headlines in mixed case or light weights; the heavy uppercase block is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
