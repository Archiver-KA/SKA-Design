# Design system — Writer SaaS Landing Page Template

`SN-W00839` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic writer hero on a near-black ground, with a large white Inter headline and a grey subhead. The primary button is an amber-orange pill with a soft glow, and a stack of dark book covers on the right carries the visual weight. The amber is the only accent, and the page reads as bold and narrative.

**Mood:** cinematic, dark, narrative, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fcd34d` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#888888` · `#555555` · `#222222` · `#0a0a0a` · `#fcd34d` · `#111111` · `#333333` · `#a855f7`.

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
- **Shadows:** `shadow-[0_20px_50px_rgba(0,0,0,0.8)]`, `shadow-[0_4px_12px_rgba(0,0,0,0.45)]`, `shadow-[0_30px_60px_rgba(0,0,0,0.9)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="teams-size-btn rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-2.5 text-sm text-[#888888] font-geist transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Footer (`footer`)
10. Sign-in form (`auth-form`)
11. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #e5e7eb;
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
    surface: '#e5e7eb',
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

- **Do:** Use the amber accent (#fcd34d) only for the primary button and its glow
- **Do:** Set the headline in Inter at 72px in white, with the grey subhead below
- **Do:** Show book covers as a stacked group of dark cards on the right
- **Don't:** Don't set the page on a white background; the look depends on the dark ground
- **Don't:** Don't use the amber for body text or headings
- **Don't:** Don't add a second accent colour beside the amber

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
