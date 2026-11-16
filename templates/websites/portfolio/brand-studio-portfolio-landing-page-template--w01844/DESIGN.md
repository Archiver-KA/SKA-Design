# Design system — Brand Studio Portfolio Landing Page Template

`SN-W01844` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark plum-black hero with a white serif headline and one phrase set in a lavender-to-pink gradient italic. The gradient is the only colour on the first screen, so it carries the accent. Body copy is muted slate in a sans, and the buttons are white pills, one solid and one outlined, which keeps colour restrained.

**Mood:** dark, editorial, warm, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f1a` | Page ground |
| Surface | `#0f0f1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#c084fc` · `#a855f7` · `#cbd5e1` · `#0f0f1a` · `#475569` · `#ec4899` · `#581c87`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative px-6 py-2.5 rounded-full overflow-hidden bg-white text-brand-dark font-medium text-sm transition-all hover:pr-8">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f0f1a;
  --color-surface: #0f0f1a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #ec4899;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f1a',
    surface: '#0f0f1a',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the gradient phrase in italic serif, running from lavender (#c084fc) to pink
- **Do:** Keep the ground dark (#0f0f1a) and the headline white
- **Do:** Use white pill buttons, solid for the primary and outlined for the secondary
- **Don't:** Don't use the purple (#a855f7) as a large background fill
- **Don't:** Don't set body text in the serif
- **Don't:** Don't use more than one gradient phrase per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
