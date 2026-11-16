# Design system — Gym & Fitness Landing Page Template

`SN-W02629` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, data-flavoured fitness hero on a near-black navy ground (#020617). A large white headline with its second phrase in cyan (#22d3ee) sits left, and a dimmed gym photograph fills a tall card on the right, with a small output panel overlapping its corner. Cyan is the only accent, on the primary button and progress bars.

**Mood:** dark, layered, data-driven, cyan-accented, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#64748b` · `#0f172a` · `#94a3b8` · `#020617` · `#1e293b` · `#06b6d4` · `#334155` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 30px · body 10px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(34,211,238,0.05)]`, `shadow-[0_0_30px_rgba(34,211,238,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-cyan-400 text-slate-950 text-xs font-semibold rounded-full hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. About (`about`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Articles (`blog-articles`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, with the second phrase in cyan (#22d3ee).
- **Do:** Use cyan (#22d3ee) for the primary button and the progress bars only.
- **Do:** Keep the photograph in a tall card with the output panel overlapping its corner.
- **Don't:** Don't set body copy in cyan.
- **Don't:** Don't put light backgrounds behind the cards; they sit on the navy ground.
- **Don't:** Don't add a second accent colour next to the cyan.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
