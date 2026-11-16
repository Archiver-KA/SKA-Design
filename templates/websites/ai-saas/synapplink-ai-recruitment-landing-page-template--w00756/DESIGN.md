# Design system — Synapplink AI Recruitment Landing Page Template

`SN-W00756` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A near-black hero (#0a0a0a) with a bold uppercase white Inter headline set in three lines, and a small letter-spaced burnt-orange (#c2410c) eyebrow above it. The right side holds a dark card with a faint warm tint, and the copy is grey (#a1a1aa) with small orange squares marking key points. Burnt orange is the one accent and it stays on the eyebrow and the markers.

**Mood:** bold, dark, uppercase, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c2410c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#18181b` · `#27272a` · `#c2410c` · `#0a0a0a` · `#09090b` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-black`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-primary hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded font-semibold text-base flex items-center gap-2 shadow-lg shadow-primary/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Logo cloud (`logo-cloud`)
5. Comparison (`comparison`)
6. Call to action (`cta`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #c2410c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#c2410c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter bold, uppercase, in white
- **Do:** Use burnt orange (#c2410c) only for the eyebrow label and small markers
- **Do:** Keep the right-hand card dark and slightly warm, with its copy in grey (#a1a1aa)
- **Don't:** Don't set the headline in title case; this template uses uppercase
- **Don't:** Don't fill buttons with burnt orange on the dark ground
- **Don't:** Don't use light cards on the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
