# Design system — Gaming Reward & Gift Card Landing Page Template

`SN-W03710` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Deep navy ground with a sans headline in white, where the product name is set in gold (#c89b3c) across the middle lines. The primary action is a solid gold block beside a navy outlined secondary, and a dark card with a gold edge glow illustrates the digital reward. A blue glow in the background keeps the page moody and gaming-led rather than corporate.

**Mood:** premium, moody, gaming, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08111f` | Page ground |
| Text | `#cbd5e1` | Headings and primary copy |
| Accent | `#c89b3c` | Primary action and highlights |
| Second accent | `#c89b3c` | Supporting highlights |

Palette by frequency of use: `#1f6feb` · `#00d4ff` · `#061426` · `#c89b3c` · `#94a3b8` · `#785a28` · `#08111f` · `#cbd5e1` · `#0a58ca` · `#f0c674`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Rajdhani
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,212,255,0.1)]`, `shadow-[0_0_20px_rgba(200,155,60,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#1f6feb] text-white font-medium text-base rounded-sm hover:bg-[#0a58ca] glow-cyan transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Comparison (`comparison`)
7. Process / steps (`how-it-works`)
8. FAQ (`faq`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #08111f;
  --color-text: #cbd5e1;
  --color-accent: #c89b3c;
  --color-accent-2: #c89b3c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08111f',
    ink: '#cbd5e1',
    accent: '#c89b3c',
    accent2: '#c89b3c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the product name in gold (#c89b3c) within the headline
- **Do:** Use a solid gold block for the primary button and a navy outline for the secondary
- **Do:** Keep the blue glow in the background, away from the text
- **Don't:** Don't use bright cyan for text or buttons
- **Don't:** Don't put light backgrounds behind the hero
- **Don't:** Don't set body copy in gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
