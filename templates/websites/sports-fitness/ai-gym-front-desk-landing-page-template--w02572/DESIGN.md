# Design system — AI Gym Front Desk Landing Page Template

`SN-W02572` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A blunt, headline-driven page on a white ground: a very large, heavy black sans-serif headline in capitals, with the key phrase set in orange. The page is white with black type and a single hot orange, so the look is closer to a bold poster. Sharp corners and one solid orange button keep it direct.

**Mood:** bold, blunt, poster-like, direct, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#000000` · `#525252` · `#ffffff` · `#22c55e` · `#737373` · `#fafafa` · `#e5e5e5` · `#a3a3a3` · `#eab308` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 bg-brand-500 text-black hover:bg-brand-600 px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Bento grid (`bento-grid`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #000000;
  --color-muted: #525252;
  --color-border: #000000;
  --color-accent: #22c55e;
  --color-accent-2: #eab308;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#000000',
    muted: '#525252',
    line: '#000000',
    accent: '#22c55e',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase at very large size and colour one phrase in orange
- **Do:** Use the orange only for the header button and the highlighted phrase
- **Do:** Keep the page on white with black type and square corners
- **Don't:** Don't switch to a dark neon theme; the page is white.
- **Don't:** Don't round the buttons or cards; keep square corners throughout.
- **Don't:** Don't set more than one line of body copy beside the headline; the headline carries the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
