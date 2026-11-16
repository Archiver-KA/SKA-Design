# Design system — PRECOG NEXUS Tokenization Landing Page Template

`SN-W04256` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black tokenization hero with a large, light-weight white headline set in two lines, and soft green and violet glows at the left and right edges. The primary action is a solid white pill, with outline pills beside it, and small dark tags at the foot name the security layers. The glow is the main colour, and the typography stays white throughout.

**Mood:** bold, technical, dark, institutional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fafafa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#34d399` · `#22d3ee` · `#c084fc` · `#60a5fa` · `#fafafa` · `#2563eb` · `#f472b6` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** SF Pro Text
- **Body:** SF Pro Text
- **Loaded families:** SF Pro Text, SF Pro Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_50px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #fafafa;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #c084fc;
  --font-display: "SF Pro Text", sans-serif;
  --font-body: "SF Pro Text", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#fafafa',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['SF Pro Text'], sans: ['SF Pro Text'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white type, with the second line in a lighter weight
- **Do:** Use a solid white pill for the primary action and outlined pills for the rest
- **Do:** Keep the green and violet glows at the page edges, away from text
- **Don't:** Don't put the glows behind body copy
- **Don't:** Don't use the green for buttons; it appears only in the glow and tags
- **Don't:** Don't set the headline in a serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
