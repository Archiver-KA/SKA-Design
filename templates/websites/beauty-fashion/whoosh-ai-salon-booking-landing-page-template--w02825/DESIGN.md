# Design system — Whoosh Ai Salon Booking Landing Page Template

`SN-W02825` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark SaaS hero on near-black (#0b0c10) with a faint red glow above the headline. The headline is heavy white Inter, and its final phrase is set in a pink-to-blue-to-cyan gradient (#f43f5e to #3b82f6). The primary action is a white pill beside a dark outline pill, with a small pill badge above the headline carrying the news. The look is product-led, and the interface cards sit below the fold.

**Mood:** product-led, dark, energetic, gradient-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0c10` | Page ground |
| Surface | `#12141c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#3b82f6` · `#737373` · `#12141c` · `#a3a3a3` · `#fb7185` · `#06b6d4` · `#60a5fa` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-rose-500/20`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full px-4 text-xs font-medium text-white transition-all bg-white/10 hover:bg-white/20 border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0c10;
  --color-surface: #12141c;
  --color-text: #ffffff;
  --color-muted: #737373;
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
    background: '#0b0c10',
    surface: '#12141c',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f43f5e',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy white Inter, with one gradient phrase per hero
- **Do:** Use the pink (#f43f5e) to blue (#3b82f6) gradient only on the highlighted phrase
- **Do:** Make the primary button a white pill and the secondary a dark outline pill
- **Don't:** Don't gradient-fill whole headlines or body copy
- **Don't:** Don't set display-size text in the cool grey (#94a3b8)
- **Don't:** Don't add a glow behind text blocks; the glow sits above the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
