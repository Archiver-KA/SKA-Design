# Design system — Pricing Plans Layout for AI Tools

`SN-W00643` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark pricing component with three tiers on a black ground. Purple (#c084fc) and peach (#fdba74) form one gradient that runs through the headline's last words and both primary buttons. The middle Pro card is lifted by a lilac border and a glow, which marks it as the recommended tier.

**Mood:** dark, gradient, tiered, glowing, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#101015` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#fdba74` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#c084fc` · `#fdba74` · `#f9a8d4` · `#9ca3af` · `#fed7aa` · `#e5e7eb` · `#1f2937` · `#101015`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Clashdisplay, Clash Display
- **Scale (largest breakpoint):** h2 18px · body 18px
- **Weights in use:** bold, normal, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-md`, `shadow-[0_8px_32px_0_rgba(128,0,255,0.2)]`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="inline-block w-full min-w-[190px] rounded-lg px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 hover:brightness-110 transition text-black font-bold shadow-md focus:outline-none focus:ring-4 focus:ring-orange-200 text-base">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #101015;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #fdba74;
  --color-accent-2: #c084fc;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#101015',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#fdba74',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the purple-to-peach gradient (#c084fc to #fdba74) on the highlighted headline words and primary buttons
- **Do:** Give the recommended tier a lilac border and a soft glow
- **Do:** Keep each tier's price as the largest figure, with a short checklist below
- **Don't:** Don't use the gradient on the secondary tiers' body text
- **Don't:** Don't add a fourth tier colour; each card takes the same neutral surface
- **Don't:** Don't glow more than one card; the recommended tier alone is lifted

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
