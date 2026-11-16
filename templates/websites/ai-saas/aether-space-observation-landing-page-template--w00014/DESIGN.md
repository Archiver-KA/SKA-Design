# Design system — Aether Space Observation Landing Page Template

`SN-W00014` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, photographic space hero shows a faint Earth horizon across the lower background, with a large white headline, 'We watch the silence between.', and its last phrase in grey. The primary button is solid white and the secondary is a dark outlined button, so the interface stays neutral. Below the hero, dark panels with thin borders carry the monitoring story.

**Mood:** atmospheric, serious, dark, observational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#030712` · `#cbd5e1` · `#94a3b8` · `#a5b4fc` · `#6366f1` · `#000000` · `#334155` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white hover:text-[#030712] border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all backdrop-blur-md shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Bento grid (`bento-grid`)
6. Case studies (`case-studies`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #334155;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#030712',
    surface: '#334155',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large white sans with the last phrase in grey
- **Do:** Keep call-to-action buttons neutral, a white solid button beside a dark ghost button
- **Do:** Place a faint photographic horizon behind the hero at low opacity
- **Don't:** Don't add bright accent colours to the hero
- **Don't:** Don't use the indigo (#6366f1) for buttons or links
- **Don't:** Don't place text over the brightest part of the horizon

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
