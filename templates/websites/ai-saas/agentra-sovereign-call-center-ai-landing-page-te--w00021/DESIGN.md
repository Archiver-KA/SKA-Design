# Design system — Agentra Sovereign Call Center AI Landing Page Template

`SN-W00021` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white, quiet page with a heavy black sans headline, 'Stop Guessing.', and a mid-grey second line, 'Start Knowing.', sets up the contrast. A soft mint glow sits in the top-left corner, and a thin top nav and a single black button do the rest. The key claim, zero data leakage, sits in a small outlined pill above the headline.

**Mood:** calm, precise, restrained, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#737373` · `#e5e5e5` · `#171717` · `#ffffff` · `#059669` · `#10b981` · `#a3a3a3` · `#d4d4d4` · `#fafafa` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 10px · h3 30px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[1px]` (1px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-block w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 text-xs font-semibold tracking-wide hover:bg-emerald-500 transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Code / terminal (`code-terminal`)
8. Pricing (`pricing`)
9. Team (`team`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #262626;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #059669;
  --color-accent-2: #ef4444;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#262626',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#059669',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black sans with the second line in mid grey
- **Do:** Use a small outlined pill above the headline for the key claim
- **Do:** Keep the only solid button black with white text
- **Don't:** Don't use the mint glow as a solid section background
- **Don't:** Don't add more than one solid button per screen
- **Don't:** Don't set body text behind the mint glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
