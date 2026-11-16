# Design system — Funnel Design Course Landing Page Template

`SN-W03473` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A high-contrast dark sales page on near-black (#0a0a0a) where the second phrase of the hero headline is set in italic amber (#f59e0b). Large sans headlines, a glowing amber primary button and grey supporting copy make a plain, direct layout. Timeline steps and a comparison block separate the sections, with rounded cards and no decorative imagery in the hero.

**Mood:** direct, high-contrast, focused, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#171717` · `#737373` · `#262626` · `#a3a3a3` · `#0a0a0a` · `#000000` · `#d97706` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(217,119,6,0.4)]`, `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(245,158,11,0.3)] text-lg tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. About (`about`)
5. Comparison (`comparison`)
6. Feature grid (`features`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #ef4444;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the second phrase of the hero headline in italic amber (#f59e0b)
- **Do:** Use amber for the primary button and the timeline markers
- **Do:** Keep the hero to headline, copy and one button, with no imagery
- **Don't:** Don't use amber for body copy
- **Don't:** Don't add more than one highlight colour; red is secondary only
- **Don't:** Don't put light cards on the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
