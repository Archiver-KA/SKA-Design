# Design system — Uzbekcha ASMR 

`SN-W00789` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, immersive creator page with a purple glow behind overlapping, rounded video panels on a near-black ground. The headline is large sans text in warm cream (#f3f0e8), and a purple pill button carries the call to action. The panels stagger across the hero, so depth comes from overlap and glow rather than from borders.

**Mood:** immersive, soft, dark, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#151713` | Page ground |
| Surface | `#101310` | Cards, panels, raised areas |
| Text | `#f3f0e8` | Headings and primary copy |
| Border | `#f3f0e8` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#d8cbb5` | Supporting highlights |

Palette by frequency of use: `#f3f0e8` · `#a855f7` · `#060706` · `#151713` · `#101310` · `#000000` · `#9333ea` · `#ffffff` · `#d8cbb5` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Caveat
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-[-0.08em]`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[28px]` (28px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(168,85,247,0.4)]`, `shadow-[0_0_80px_rgba(168,85,247,0.5)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#a855f7] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#060706] transition hover:scale-[1.02] hover:bg-[#9333ea]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Video / media (`video-media`)
5. Call to action (`cta`)
6. Logo cloud (`logo-cloud`)
7. Process / steps (`how-it-works`)
8. FAQ (`faq`)
9. Sign-in form (`auth-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #151713;
  --color-surface: #101310;
  --color-text: #f3f0e8;
  --color-border: #f3f0e8;
  --color-accent: #a855f7;
  --color-accent-2: #d8cbb5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#151713',
    surface: '#101310',
    ink: '#f3f0e8',
    line: '#f3f0e8',
    accent: '#a855f7',
    accent2: '#d8cbb5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the purple (#a855f7) for the primary button and the glow only
- **Do:** Set text in warm cream (#f3f0e8) rather than pure white
- **Do:** Overlap video panels with rounded corners at the hero
- **Don't:** Don't use bright white text on the dark ground
- **Don't:** Don't add hard-edged cards; the corners are rounded
- **Don't:** Don't set purple as a large background fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
