# Design system — Novara Pro AI SaaS Landing Page Template

`SN-W00603` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `de`

## Direction

A dark German-language AI landing page on a near-black ground (#030304) with a soft radial glow behind the hero. The headline is large white sans, with its second phrase in a pale lavender-indigo gradient (#818cf8). A solid white pill carries the primary call to action, and a filled indigo button sits in the nav. The indigo is used for emphasis in type and the nav, and white for the action.

**Mood:** dark, confident, glowing, modern, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030304` | Page ground |
| Surface | `#0a0a0c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#64748b` · `#94a3b8` · `#818cf8` · `#cbd5e1` · `#1e293b` · `#f87171` · `#4f46e5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-indigo-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. About (`about`)
6. Team (`team`)
7. Stats band (`stats`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)
12. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030304;
  --color-surface: #0a0a0c;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030304',
    surface: '#0a0a0c',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black (#030304) with a single soft radial glow behind the hero.
- **Do:** Use the indigo (#6366f1) for the nav button and the lavender (#818cf8) only inside the headline gradient.
- **Do:** Keep the primary call to action a solid white pill (#ffffff).
- **Don't:** Don't set body copy in indigo; supporting copy is grey.
- **Don't:** Don't use the red accent (#f87171) on the first screen.
- **Don't:** Don't add a second glow; one radial glow is the hero's only backdrop.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
