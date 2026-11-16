# Design system — Futuristic SaaS Infrastructure Landing Page Template

`SN-W00412` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a centred headline in pale grey that fades from white to silver across two lines, and one outlined pill button with a faint cyan glow. The hero is quiet and symmetrical, with a short paragraph in muted grey and the next section starting at the bottom edge. Cyan (#00e5ff) is used only for the thin outline and glow of the button.

**Mood:** precise, quiet, dark, crystalline, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#0f0f12` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00e5ff` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#00e5ff` · `#d4d4d8` · `#71717a` · `#0f0f12` · `#18181b` · `#09090b` · `#000000` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h2 48px · h3 18px · body 15px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-white/5`, `shadow-[0_0_16px_rgba(0,229,255,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="cta-btn relative flex items-center justify-center mx-auto px-8 md:px-14 py-4 md:py-5 rounded-full bg-white/5 text-white font-light text-base md:text-lg border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-[#00e5ff]/10 hover:border-[#00e5ff]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.3),inset_0_0_15px_rgba(0,229,255,0.15)] group/btn">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Call to action (`cta`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #0f0f12;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #00e5ff;
  --color-accent-2: #2563eb;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
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
    accent: '#00e5ff',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the headline with a grey-to-white gradient fill rather than a flat colour
- **Do:** Use one outlined cyan button per screen as the primary action
- **Do:** Keep the 3D scene behind the hero dark so the headline stays readable
- **Don't:** Don't add more than one glowing element per section
- **Don't:** Don't set the paragraph in pure white; it uses muted grey
- **Don't:** Don't fill the primary button solid; the outline carries the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
