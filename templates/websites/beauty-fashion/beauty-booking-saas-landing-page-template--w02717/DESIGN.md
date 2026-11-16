# Design system — Beauty Booking SaaS Landing Page Template

`SN-W02717` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Salon booking SaaS page on a near-black ground (#0f1116). The headline is heavy white sans, and its last phrase fades through a coral-to-amber gradient. Two pill buttons sit under the copy, one solid white and one outlined, and a small brand mark in coral is the only other colour. The page reads as a dark, confident software launch.

**Mood:** confident, dark, software, gradient accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f1116` | Page ground |
| Surface | `#1c1c1e` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#64748b` · `#94a3b8` · `#3b82f6` · `#1c1c1e` · `#0f1116` · `#a855f7` · `#fb7185` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 12px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-rose-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full px-4 text-xs font-medium text-white transition-all bg-white/5 hover:bg-white/10 border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f1116;
  --color-surface: #1c1c1e;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f1116',
    surface: '#1c1c1e',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#f43f5e',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on near-black (#0f1116) with white heavy sans headlines.
- **Do:** Use the coral (#f43f5e) gradient on one headline phrase and the brand mark only.
- **Do:** Pair one solid white pill with one outlined pill as the hero action pair.
- **Don't:** Don't set the page ground in coral (#f43f5e); the ground is near-black.
- **Don't:** Don't use the blue (#3b82f6) in the hero; coral is the accent.
- **Don't:** Don't set body copy in pure white; use the muted slate (#94a3b8).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
