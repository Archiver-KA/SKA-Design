# Design system — CyberNut K-12 Security Awareness 

`SN-W00309` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page with a heavy white sans headline whose final line is set in bright blue [#60a5fa]. The hero pairs the text with a dark console panel of metric cards, each with a large white figure and a small blue label. Inter sets the type throughout, and the navy ground gives the page a serious, institutional tone.

**Mood:** institutional, dark, clear, serious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#172554` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#94a3b8` · `#60a5fa` · `#2563eb` · `#1e3a8a` · `#93c5fd` · `#172554` · `#020204` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(59,130,246,0.4)]`, `shadow-[0_0_25px_rgba(59,130,246,0.5)]`, `shadow-[0_0_35px_rgba(59,130,246,0.7)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. Stats band (`stats`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #172554;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#172554',
    surface: '#000000',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline line in bright blue (#60a5fa) only
- **Do:** Use dark console panels with large white figures and small blue labels
- **Do:** Keep the pill badge above the headline small, with a blue dot
- **Don't:** Don't use the blue as a page background; it is an accent on navy
- **Don't:** Don't use red (#ef4444) in the hero
- **Don't:** Don't set the headline in a light weight; it is set heavy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
