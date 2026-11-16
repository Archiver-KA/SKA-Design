# Design system — Servicii de urgență și instalații sanitare 

`SN-W00707` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `ro`

## Direction

A dark, emergency-service page: a near-black ground (#0a0a0a) with white bold headlines and cyan (#00b8ff) used to pick out key words, such as the '24/24' in the headline. Cyan also fills the primary button with black text, while the secondary call to action is a dark outlined button. Stat tiles across the lower hero repeat the cyan on their numbers, so the layout reads as a quick, reliable service.

**Mood:** urgent, dependable, dark, technical, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00b8ff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#00b8ff` · `#ffffff` · `#a1a1aa` · `#d4d4d8` · `#22d3ee` · `#71717a` · `#000000` · `#0a0a0a` · `#52525b` · `#67e8f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/20`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00B8FF] px-6 py-4 text-sm font-semibold text-black shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #00b8ff;
  --color-accent-2: #ef4444;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#00b8ff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use cyan (#00b8ff) for one highlighted phrase in each headline and for the primary button.
- **Do:** Put black text on cyan buttons; keep the secondary button dark and outlined.
- **Do:** Set stat numbers large in cyan with a small grey caption beneath.
- **Don't:** Don't use red for headlines; the red (#ef4444) is reserved for alerts only.
- **Don't:** Don't light the background; the page is dark from top to bottom.
- **Don't:** Don't add more than one highlight colour to the same headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
