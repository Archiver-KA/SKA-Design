# Design system — SaaS Beauty & Hair Salon Landing Page Template

`SN-W02811` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A dark, quiet salon page on near-black (#09090b) with a white wordmark and a pale pill button in the navigation. The hero is an empty dim field with a soft warm glow in the centre, and colour appears only in small details. Type is system sans-serif, and the look is built from rounded pills on a near-black ground with light text.

**Mood:** dark, quiet, modern, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f4f4f5` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#a1a1aa` · `#d4d4d8` · `#09090b` · `#27272a` · `#f4f4f5` · `#71717a` · `#18181b` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="glass px-5 py-2.5 rounded-full text-base font-medium hover:bg-white/10 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Booking form (`booking`)
6. Call to action (`cta`)
7. Modal / overlay (`modal-overlay`)
8. FAQ (`faq`)
9. Map / location (`map-location`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #fafafa;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #f4f4f5;
  --color-accent-2: #4ade80;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#fafafa',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#f4f4f5',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the near-black (#09090b) as the page ground with white text
- **Do:** Make the primary button a light pill with dark text
- **Do:** Keep the navigation to white and grey
- **Don't:** Don't use a serif face; the page uses system sans-serif
- **Don't:** Don't add a second bright colour to the navigation
- **Don't:** Don't place the warm glow behind body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
