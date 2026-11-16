# Design system — Subscription Sharing Platform Landing Page Template

`SN-W00747` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A near-black page (#09090b) with a centred Inter headline in near-white, where the second half fades to grey. The one warm element is a soft orange glow in the top corner, and the rest of the colour comes from small avatar chips and a white primary button beside an outline secondary. The page is restrained, so the headline and CTA carry the weight.

**Mood:** dark, restrained, clean, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d8` · `#71717a` · `#18181b` · `#f4f4f5` · `#fafafa` · `#a1a1aa` · `#09090b` · `#27272a` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-white/5`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm relative z-10 bg-orange-500 text-white hover:bg-orange-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. Call to action (`cta`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #fb923c;
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
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#fb923c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter bold, centred, with the last phrase in a grey gradient
- **Do:** Use the orange (#fb923c) only in the corner glow and small highlights
- **Do:** Keep the primary button a solid white pill with a dark outline secondary beside it
- **Don't:** Don't fill buttons with orange on this dark ground
- **Don't:** Don't use a light background for hero sections
- **Don't:** Don't drop the blur effect from the glass panels; depth comes from blur, not shadows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
