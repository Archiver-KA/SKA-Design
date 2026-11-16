# Design system — Interactive Keyboard Shortcut Cards

`SN-W04219` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark feature cards on a black ground (#000000) show keyboard layouts as interactive illustrations: a key grid, a command list and a status panel. Blue and green icon tiles mark the feature groups, and an amber tile holds the lightning symbol. Card text is white with muted grey labels, and the cards are glass-like with backdrop blur, rounded corners and soft glow.

**Mood:** dark, layered, technical, glassy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#475569` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#cbd5e1` · `#334155` · `#8b5cf6` · `#475569` · `#ffffff` · `#60a5fa` · `#34d399` · `#000000` · `#a78bfa` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h3 30px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/40`, `shadow-3xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

## Page structure

Blocks in page order:

1. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #475569;
  --color-text: #ffffff;
  --color-muted: #cbd5e1;
  --color-border: #475569;
  --color-accent: #8b5cf6;
  --color-accent-2: #60a5fa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#475569',
    ink: '#ffffff',
    muted: '#cbd5e1',
    line: '#475569',
    accent: '#8b5cf6',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show each feature as an interactive illustration with a short caption
- **Do:** Use a coloured icon tile for each feature group
- **Do:** Keep the cards glass-like with backdrop blur and rounded corners
- **Don't:** Don't use light cards on this dark ground
- **Don't:** Don't add more than four icon colours
- **Don't:** Don't use drop shadows; the glow and blur provide depth

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
