# Design system — Crypto SaaS Landing Page Template

`SN-W00906` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark SaaS hero on near-black [#09090b] with a single yellow [#eab308] primary button. The centred headline is large, bold Inter, and its second half is set in muted grey, which splits the message into a firm statement and a softer qualifier. Secondary actions are ghost-style, so the yellow button is the only filled action in the hero.

**Mood:** confident, dark, minimal, product-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#3f3f46` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#27272a` · `#71717a` · `#a1a1aa` · `#18181b` · `#3f3f46` · `#09090b` · `#52525b` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_20px_rgba(234,179,8,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Integrations (`integrations`)
7. Stats band (`stats`)
8. Case studies (`case-studies`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Process / steps (`how-it-works`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #3f3f46;
  --color-border: #ffffff;
  --color-accent: #eab308;
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
    background: '#09090b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#3f3f46',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#eab308) for the primary button only
- **Do:** Set the second half of a headline in muted grey for contrast
- **Do:** Keep secondary actions as outlined buttons or text links
- **Don't:** Don't add a second filled button beside the yellow one
- **Don't:** Don't use yellow as a background colour; it is reserved for actions
- **Don't:** Don't set body copy in yellow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
