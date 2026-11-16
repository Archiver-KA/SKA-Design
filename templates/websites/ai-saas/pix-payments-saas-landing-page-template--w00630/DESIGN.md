# Design system — Pix Payments SaaS Landing Page Template

`SN-W00630` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-br`

## Direction

A black developer-payments page where lime green (#84cc16) is the single accent, used on the primary button, a thin left rule beside the intro and small labels. The headline is large white uppercase Inter, with its first line letter-spaced like a system label. Outline-only icon tiles and an olive-tinted button keep the page quiet and technical.

**Mood:** dark, technical, developer, precise, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#030303` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#84cc16` · `#a3e635` · `#64748b` · `#000000` · `#cbd5e1` · `#94a3b8` · `#365314` · `#c084fc` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Syncopate, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(132,204,22,0.3)]`, `shadow-[0_0_30px_rgba(132,204,22,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 text-white px-6 py-3 rounded hover:bg-lime-500/10 hover:border-lime-500/50 hover:text-lime-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #030303;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #84cc16;
  --color-accent-2: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#030303',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#84cc16',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#84cc16) for the primary button, the intro's left rule and status labels only
- **Do:** Set the hero headline in uppercase Inter, white on black (#000000)
- **Do:** Keep icon tiles small and outline-only beside the intro copy
- **Don't:** Don't fill large areas with lime; it marks actions and labels
- **Don't:** Don't set body copy in pure white; use the slate grey (#cbd5e1)
- **Don't:** Don't letter-space body copy; the wide spacing belongs to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
