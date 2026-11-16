# Design system — Synapse AI Generative Studio Landing Page Template

`SN-W00757` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black hero with a purple (#8b5cf6) glow behind the top, and a large centred Geist headline in two tones: Reasoning at the in white and Speed of Thought. in grey. Purple is kept to the logo, the status tag and the glow, while a single white-edged input sits below the copy as the main control. The effect is a calm, product-led hero with the glow as its one colour.

**Mood:** dark, calm, product-led, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a78bfa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#8b5cf6` · `#a78bfa` · `#a3a3a3` · `#000000` · `#262626` · `#525252` · `#d4d4d4` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(139,92,246,0.15)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 text-[13px] font-medium text-white transition-all hover:bg-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Video / media (`video-media`)
5. Stats band (`stats`)
6. Bento grid (`bento-grid`)
7. 3D / canvas scene (`3d-canvas`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a78bfa;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#a78bfa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in Geist at large size, with the second line in grey
- **Do:** Use the purple (#8b5cf6) for the glow and small accents only
- **Do:** Put a single full-width input with a round white action button as the hero control
- **Don't:** Don't add more than one purple glow per screen
- **Don't:** Don't set body text in the purple accent
- **Don't:** Don't fill the hero with cards; the dashboard previews sit at the bottom edge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
