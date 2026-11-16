# Design system — AI Coaching Services Landing Page Template

`SN-W03404` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark, AI-focused consulting page on near-black with a centred white sans headline, its second line in a soft indigo gradient. Indigo is kept to the navbar demo button and the gradient, while the hero's primary action is a white pill, so the brand colour stays in the header. Supporting copy is grey and the page sits on a plain dark ground.

**Mood:** precise, modern, measured, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030304` | Page ground |
| Surface | `#0a0a0c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#64748b` · `#94a3b8` · `#818cf8` · `#475569` · `#cbd5e1` · `#000000` · `#0a0a0c` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-indigo-500/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Services (`services`)
6. Team (`team`)
7. Timeline (`timeline`)
8. Testimonials (`testimonials`)
9. Process / steps (`how-it-works`)
10. Contact form (`contact-form`)
11. Footer (`footer`)
12. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030304;
  --color-surface: #0a0a0c;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #ef4444;
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
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white (#ffffff) with the second phrase in an indigo gradient (#6366f1).
- **Do:** Use indigo (#6366f1) for the navbar demo button only; the hero action is a white pill.
- **Do:** Keep supporting copy in grey (#94a3b8) at a lighter weight than the headline.
- **Don't:** Don't place indigo fills behind the hero copy.
- **Don't:** Don't make the navbar button white; it stays indigo.
- **Don't:** Don't set body copy in the gradient.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
