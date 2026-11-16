# Design system — Football Club Landing Page Template

`SN-W02615` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A full-bleed black football-club hero. A large centred headline in heavy uppercase, white on top and a metallic grey lower line, sits over a dark ground with a small grey meta line beneath. Two buttons, a solid white and an outline, carry the action. Red (#ef4444) is kept for nav highlights and tags, so the page reads as monochrome with a restrained red signal.

**Mood:** monochrome, heavy, centred, restrained, sporty

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#ef4444` · `#000000` · `#525252` · `#a3a3a3` · `#171717` · `#7f1d1d` · `#dc2626` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.3)]`, `shadow-[0_20px_50px_rgba(0,0,0,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-x-4`, `gap-y-3`, `gap-6`

**Primary button**

```html
<a class="px-8 py-3 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Team (`team`)
6. Timeline (`timeline`)
7. Product grid (`product-grid`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in heavy uppercase, white with a metallic grey second line.
- **Do:** Use red (#ef4444) for active nav items and small tags only.
- **Do:** Pair one solid white button with one outline button in the hero.
- **Don't:** Don't fill the hero with the dark red (#7f1d1d); it is a shade, not the ground.
- **Don't:** Don't set the small uppercase meta line in white; keep it grey.
- **Don't:** Don't add a third button to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
