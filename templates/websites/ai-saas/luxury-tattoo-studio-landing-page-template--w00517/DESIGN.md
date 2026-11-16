# Design system — Luxury Tattoo Studio Landing Page Template

`SN-W00517` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A near-black cinematic intro on #030303 with a spaced-capitals wordmark, a faint radial light in the middle and a single small call to action. Bronze (#a3825f) appears only in the muted labels, and the nav is set in tracked capitals. The screen is deliberately empty and slow, which suits a dark, artistic tattoo studio.

**Mood:** cinematic, dark, spare, artistic, slow

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#a3825f` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#a3825f` · `#000000` · `#ffffff` · `#71717a` · `#18181b` · `#030303` · `#a1a1aa` · `#09090b` · `#27272a` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Inter
- **Loaded families:** Inter, Syne
- **Scale (largest breakpoint):** h3 48px · body 14px
- **Weights in use:** light, extralight, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-gold/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-[20vh]`
- **Common gaps:** `gap-8`, `gap-16`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center space-x-4 bg-zinc-950/80 border border-gold/40 text-gold hover:text-black hover:bg-gold px-8 py-5 text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 group rounded-sm shadow-xl shadow-gold/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #000000;
  --color-text: #e5e5e5;
  --color-muted: #a3825f;
  --color-border: #18181b;
  --font-display: "Syne", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#000000',
    ink: '#e5e5e5',
    muted: '#a3825f',
    line: '#18181b',
  },
  fontFamily: { display: ['Syne'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark and nav in widely tracked capitals.
- **Do:** Keep the page on the near-black ground (#030303) with a faint central glow.
- **Do:** Use the bronze (#a3825f) for small labels only.
- **Don't:** Don't fill the empty hero with imagery or bright colour.
- **Don't:** Don't set body copy in the bronze.
- **Don't:** Don't use rounded buttons; the call to action is a thin outline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
