# Design system — Home Services SaaS Landing Page Template CAlls

`SN-W00444` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a light sans headline in two tones: white for the first line and a silver-grey fade for the second, which holds the time claim. Teal (#06b6d4) appears in the status pill and the outline glow of the primary button, and a dark outlined button sits beside it. The layout stays calm and centred, with a short grey paragraph under the headline.

**Mood:** calm, dark, precise, centred, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#0f0f12` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#06b6d4` · `#22d3ee` · `#0f0f12` · `#09090b` · `#71717a` · `#d4d4d8` · `#27272a` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 100px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, thin
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,229,255,0.1)]`, `shadow-[0_0_15px_rgba(0,229,255,0.15)]`, `shadow-[0_4px_30px_rgba(0,229,255,0.1)]`
- **Content width:** `max-w-[1200px]`, `max-w-[1000px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="text-sm font-light text-white px-5 py-2 rounded-full border border-cyan-500/30 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Benefits (`benefits`)
5. Booking form (`booking`)
6. Process / steps (`how-it-works`)
7. Integrations (`integrations`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #0f0f12;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #f97316;
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
    surface: '#0f0f12',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light sans, with the second line in a silver-grey gradient
- **Do:** Give the primary button a thin teal (#06b6d4) outline and glow, and the secondary a dark outline
- **Do:** Keep the status pill small, teal and placed above the headline
- **Don't:** Don't fill the primary button solid teal
- **Don't:** Don't add orange to the hero; teal is the only accent there
- **Don't:** Don't set the paragraph in pure white; it uses grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
