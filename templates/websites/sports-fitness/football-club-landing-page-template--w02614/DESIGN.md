# Design system — Football Club Landing Page Template

`SN-W02614` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark football-club card on a white page. The hero is a rounded near-black panel with a faint red glow, a large uppercase name in white to grey gradient, and a red live-match tag. The page itself is white and the card carries all the colour, so the club reads as a dark, premium block framed by a plain header. Red (#dc2626) marks live status and the score card.

**Mood:** dark, premium, uppercase, club-branded, framed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#dc2626` · `#ef4444` · `#a3a3a3` · `#262626` · `#e5e5e5` · `#f5f5f5` · `#1d1d1f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 48px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-neutral-200`
- **Content width:** `max-w-[1600px]`, `max-w-[95%]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-black text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Comparison (`comparison`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #dc2626;
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
    background: '#ffffff',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the dark hero as a rounded card on the white page.
- **Do:** Set the club name in heavy uppercase with a white-to-grey gradient.
- **Do:** Use red (#dc2626) for the live indicator and the score card only.
- **Don't:** Don't make the outer page dark; the white ground frames the card.
- **Don't:** Don't use red for large buttons; the buttons are white and outlined.
- **Don't:** Don't add photographs behind the club name.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
