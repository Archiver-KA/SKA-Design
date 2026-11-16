# Design system — Untitled Design

`SN-W04318` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark storefront landing page on near-black, with very large white headlines set in a tight stack that mixes two languages. Translucent book-cover cards stack to the right of the hero, and an orange-edged pill button in the header and hero gives the single warm accent. The layout is loud and text-led, and the copy does most of the work.

**Mood:** bold, text-led, dark, loud, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fcd34d` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#555555` · `#888888` · `#fcd34d` · `#222222` · `#0a0a0a` · `#a855f7` · `#333333` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_20px_50px_rgba(0,0,0,0.8)]`, `shadow-[0_30px_60px_rgba(0,0,0,0.9)]`, `shadow-[0_0_15px_#fff]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="teams-size-btn rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-2.5 text-sm text-[#888888] font-geist transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)
7. Sign-in form (`auth-form`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #ffffff;
  --color-accent: #fcd34d;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#888888',
    line: '#ffffff',
    accent: '#fcd34d',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines white and large with tight line spacing
- **Do:** Use the orange-edged pill for the header and hero buttons only
- **Do:** Show product covers as stacked translucent cards to the right of the hero
- **Don't:** Don't use light backgrounds in the hero
- **Don't:** Don't set body copy in a bright colour; keep it muted
- **Don't:** Don't add more than one warm accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
