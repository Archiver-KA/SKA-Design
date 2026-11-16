# Design system — SoulShell Neurodivergent Workflow Landing Page Template

`SN-W00726` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark manifesto hero: a black ground with a warm orange glow in the upper right corner and a very large uppercase headline in pale grey, stacked over three lines and bleeding off the right edge. Small glass-effect cards carry one bold stat and a short label, overlapping the type. Copy is kept to short labels, so the page reads as a statement.

**Mood:** manifesto, dark, bold, atmospheric, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#6b7280` · `#9ca3af` · `#ea580c` · `#000000` · `#4b5563` · `#d1d5db` · `#7c2d12` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 48px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[200px]`, `max-w-[240px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-3`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #e5e7eb;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#e5e7eb',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase pale grey, large enough to bleed off the right edge.
- **Do:** Use glass-effect cards with one bold stat and a short label each.
- **Do:** Keep the warm orange glow in the corner, behind the type.
- **Don't:** Don't set the headline in pure white; it is pale grey.
- **Don't:** Don't use orange as a solid button colour in the first screen; it appears as glow only.
- **Don't:** Don't add a light background behind the cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
