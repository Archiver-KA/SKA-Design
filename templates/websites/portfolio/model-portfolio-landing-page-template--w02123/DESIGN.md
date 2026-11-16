# Design system — Model Portfolio Landing Page Template

`SN-W02123` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet editorial model page on a near-white ground (#fafafa) with near-black type set in Inter throughout. The hero pairs a large two-line headline with a grey subtitle, and a measurements card sits beside a large portrait in a thin-bordered white panel. Colour is almost absent from the first screen, so the page reads as a fashion spec sheet rather than a branded site.

**Mood:** editorial, minimal, clean, spec-sheet, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#e4e4e7` · `#f4f4f5` · `#a1a1aa` · `#ffffff` · `#d4d4d8` · `#52525b` · `#fafafa` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-medium border border-zinc-200 rounded-full px-4 py-2 hover:bg-zinc-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set measurements as label and value rows, grey labels with near-black values.
- **Do:** Keep panels white on the #fafafa ground with thin borders instead of shadows.
- **Do:** Use Inter for the headline, subtitle and labels, with generous space between them.
- **Don't:** Don't add a bright accent to the hero; the first screen carries no accent colour.
- **Don't:** Don't replace the measurement rows with icons or progress bars.
- **Don't:** Don't put the first screen on a dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
