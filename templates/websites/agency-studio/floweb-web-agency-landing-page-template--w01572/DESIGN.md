# Design system — Floweb Web Agency Landing Page Template

`SN-W01572` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark charcoal ground (#161517) with a centred two-line headline that fades from white to grey, a white primary pill beside a dark outlined secondary. Lavender (#c1a5ff) appears only on a small availability badge and the logo mark, so the accent is a light touch. A dark application window under the copy shows the product in the same charcoal tones.

**Mood:** quiet, calm, dark, refined, gradient-type

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#161517` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c1a5ff` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c1a5ff` · `#737373` · `#a3a3a3` · `#161517` · `#22c55e` · `#eab308` · `#d4d4d4` · `#1a191c` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 18px · h3 14px · body 18px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_15px_rgba(193,165,255,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-[#161517] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#C1A5FF] transition-colors transform hover:scale-105 active:scale-95 duration-200 tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #161517;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c1a5ff;
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
    background: '#161517',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c1a5ff',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at large size with a white-to-grey gradient
- **Do:** Use lavender (#c1a5ff) for the badge and logo mark only
- **Do:** Pair a white primary pill with a dark outlined secondary button
- **Don't:** Don't use lavender for buttons or large fills
- **Don't:** Don't set the page on a light ground; the design is charcoal
- **Don't:** Don't add green accents; the page keeps one lavender note

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
