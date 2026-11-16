# Design system — Cybersecurity SaaS Landing Page Template

`SN-W00319` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark SaaS hero on a near-black ground [#0b0c10], with a large white headline and the phrase 'speed of code' set in a cyan-to-blue gradient. A wide dashboard window sits below the hero, showing blue-tinted charts and metric cards. Plus Jakarta Sans gives the page a clean, modern voice, and the blue ties the gradient to the product interface.

**Mood:** clean, modern, techy, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0c10` | Page ground |
| Surface | `#0b0c10` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#94a3b8` · `#2563eb` · `#60a5fa` · `#06b6d4` · `#cbd5e1` · `#22d3ee` · `#f87171` · `#0b0c10`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(59,130,246,0.1)]`, `shadow-[0_0_20px_rgba(59,130,246,0.2)]`, `shadow-[0_0_5px_#10b981]`
- **Content width:** `max-w-7xl`, `max-w-[240px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-cyan-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Code / terminal (`code-terminal`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0c10;
  --color-surface: #0b0c10;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #f87171;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0c10',
    surface: '#0b0c10',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the blue gradient (#60a5fa) on one headline phrase per hero
- **Do:** Frame the dashboard in a dark window with blue highlights
- **Do:** Keep Plus Jakarta Sans for all headings and body text
- **Don't:** Don't use the full blue (#3b82f6) as the page background
- **Don't:** Don't put the gradient on body copy
- **Don't:** Don't add colours beyond the blue and the soft red accent (#f87171)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
