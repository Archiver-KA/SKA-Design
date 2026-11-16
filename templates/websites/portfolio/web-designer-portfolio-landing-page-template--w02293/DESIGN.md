# Design system — Web Designer Portfolio Landing Page Template

`SN-W02293` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page with a large uppercase sans headline, a small spaced label above it, and a dark card with floating overlay chips on the right. Contrast comes from dark objects set against pale space, so the black button and dark cards carry the page.

**Mood:** bold, contrast, modern, airy, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#e5e5e5` · `#a3a3a3` · `#000000` · `#737373` · `#f5f5f5` · `#d4d4d4` · `#10b981` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]`, `shadow-[0_0_30px_rgba(0,0,0,0.8)]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-4`

**Primary button**

```html
<a class="font-mono text-xs tracking-widest uppercase border border-white/10 text-neutral-400 bg-white/5 px-2.5 py-1 rounded hover:bg-white/10 hover:text-white transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #171717;
  --color-text: #171717;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#171717',
    ink: '#171717',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans with a small spaced label above it
- **Do:** Use dark cards and a dark button as the contrast objects on the pale ground
- **Do:** Layer small overlay chips over the card edge to show project facts
- **Don't:** Don't set the headline in a pale tint on the cream ground
- **Don't:** Don't use the orange as a page background; it appears only in small chips
- **Don't:** Don't flatten the dark card into the light ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
