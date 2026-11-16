# Design system — Gaming VC Landing Page Template

`SN-W03711` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

Near-black page with a heavy sans headline in white, and a second line set in an amber-to-orange gradient (#f59e0b). A thin row of uppercase tags sits above a short paragraph, followed by a solid light primary button and a dark outlined secondary. A faint hexagonal emblem with small labels sits on the right, and amber is the only warm colour in the first screen.

**Mood:** bold, gamified, dark, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#1f2937` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#000000` · `#22c55e` · `#8b5cf6` · `#050505` · `#1a1a1a` · `#1f2937` · `#d97706` · `#4c1d95`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 30px · body 12px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_4px_0_0_#f59e0b]`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="relative px-6 py-2 overflow-hidden border border-white/20 bg-white/5 hover:bg-amber-500 hover:border-amber-500 text-white text-xs font-bold tracking-wide transition-all group clip-corner">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Footer (`footer`)
6. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #1f2937;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#1f2937',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the amber gradient (#f59e0b)
- **Do:** Use square-cornered buttons, with a solid light primary and an outlined secondary
- **Do:** Keep small uppercase tags in a thin outline above the paragraph
- **Don't:** Don't set the page on a light amber background
- **Don't:** Don't use green for buttons or headlines
- **Don't:** Don't add bright colour to the decorative emblem

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
