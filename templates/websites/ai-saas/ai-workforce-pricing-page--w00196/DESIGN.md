# Design system — AI Workforce Pricing Page

`SN-W00196` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Pricing page on a deep violet-black ground (#0a0118) with a soft purple glow across the top half. The sign-up button is violet (#8b5cf6), and small outlined pills with light text list trust points under the headline. Plan cards sit below the hero, and a small bright tag above the recommended card is the one element that stands out.

**Mood:** dark, violet, glowing, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0118` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#8b5cf6` · `#9ca3af` · `#a78bfa` · `#10b981` · `#34d399` · `#2dd4bf` · `#14b8a6` · `#c4b5fd` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-violet-500/25`, `shadow-teal-500/25`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-2 text-sm font-semibold shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0118;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #8b5cf6;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0118',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#8b5cf6',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet (#8b5cf6) for the primary button and the nav sign-up button only
- **Do:** Set headings in white sans-serif, centred, with a soft purple glow behind them
- **Do:** Mark the recommended plan with a small bright tag above its card
- **Don't:** Don't use lavender for body copy; the muted grey (#9ca3af) carries the text
- **Don't:** Don't fill plan cards with violet; they stay dark and outlined
- **Don't:** Don't add a light section to the pricing page; the ground stays violet-black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
