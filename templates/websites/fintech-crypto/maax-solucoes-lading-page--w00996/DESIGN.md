# Design system — Maax Soluções Lading Page

`SN-W00996` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark fintech page with a green accent: a near-black (#0a0a0a) ground, white bold sans-serif headlines, and the second headline line set in emerald (#10b981). The navigation floats as a dark pill over a faint green glow, and the buttons are a white pill and a dark grey pill. Green appears in the headline and a few badges, and the rest of the page stays neutral.

**Mood:** dark, fintech, bold, green, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#737373` · `#34d399` · `#0a0a0a` · `#d4d4d4` · `#a3a3a3` · `#22c55e` · `#050505` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_40px_rgba(255,255,255,0.05)]`, `shadow-[0_0_20px_rgba(0,0,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden md:block text-[10px] font-semibold border border-white/10 px-4 py-1.5 rounded-full transition-all active:scale-95 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] text-white bg-white/5 hover:bg-white/10 hover:border-emerald-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Dashboard preview (`dashboard-preview`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #fbbf24;
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
    surface: '#262626',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in emerald (#10b981).
- **Do:** Use a white pill for the primary button and a dark grey pill for the secondary.
- **Do:** Keep the navigation as a floating dark pill over the hero.
- **Don't:** Don't use the green as a button fill.
- **Don't:** Don't put a light background behind the hero copy.
- **Don't:** Don't add a second bright hue such as yellow to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
