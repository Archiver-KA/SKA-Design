# Design system — Music Distribution Landing Page Template

`SN-W03727` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Black page with a heavy sans headline in white, the first line solid and the second in mid grey, set large and left-aligned. Buttons have one clipped corner: a solid white primary and a thin outlined secondary. Small monospaced readouts sit in the lower right as data labels, which gives an instrument-panel feel while keeping colour out of the layout.

**Mood:** sharp, technical, stark, data-driven

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff5f` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#a3a3a3` · `#0a0a0a` · `#d4d4d4` · `#525252` · `#050505` · `#00ff5f` · `#888888`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h3 14px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_50px_rgba(255,255,255,0.03)]`
- **Content width:** `max-w-[clamp(65rem,95vw,90rem)]`, `max-w-3xl`
- **Section padding:** `py-[clamp(4rem,8vw,8rem)]`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="btn-tech text-white border border-white/20 font-semibold text-xs px-6 py-3 w-fit tracking-widest uppercase hover:bg-white hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #00ff5f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#00ff5f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans, with a white first line and a grey second line
- **Do:** Clip one corner of primary buttons for a sharp, angled edge
- **Do:** Place small monospaced readouts in the corners as data labels
- **Don't:** Don't add colour to the hero headline
- **Don't:** Don't use rounded pills for the primary button
- **Don't:** Don't set the readouts at a large size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
