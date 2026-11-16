# Design system — Fighting Tournament App Landing Page Template

`SN-W00387` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A hard-edged split page: the left half is black and carries a heavy italic uppercase headline in alternating white and red blocks, while the right half is red with a fine halftone texture and a black bracket panel. Slanted rules and a yellow tag (#facc15) add a competitive, arcade energy. The page works like a poster, and the red, black and white contrast does most of the work.

**Mood:** aggressive, poster-like, competitive, bold, hard-edged

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dc2626` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#dc2626` · `#6b7280` · `#facc15` · `#ef4444` · `#9ca3af` · `#171717` · `#d1d5db` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Oswald
- **Loaded families:** Anton, Oswald, Permanent Marker
- **Scale (largest breakpoint):** h1 36px · h2 60px · h3 30px · body 24px
- **Weights in use:** bold, medium, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[4px_4px_0px_#D92323]`, `shadow-[4px_4px_0px_#fff]`, `shadow-[0_0_50px_rgba(217,35,35,0.4)]`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Stats band (`stats`)
3. Comparison (`comparison`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #dc2626;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #000000;
  --color-border: #000000;
  --color-accent: #facc15;
  --color-accent-2: #facc15;
  --font-display: "Oswald", sans-serif;
  --font-body: "Oswald", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#dc2626',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#000000',
    line: '#000000',
    accent: '#facc15',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Oswald'], sans: ['Oswald'] },
} }
```

## Do and don't

- **Do:** Split the hero into hard-edged black and red panels, with the headline on the black side.
- **Do:** Set headlines in heavy italic uppercase, alternating white text and red blocks for emphasis.
- **Do:** Use the yellow (#facc15) only for small tags, such as the 'new challenger' label.
- **Don't:** Don't soften the panel edges with rounded corners or gradients; the cuts are straight.
- **Don't:** Don't use the yellow for body text or large areas.
- **Don't:** Don't add a third panel colour; the page is black, red and white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
