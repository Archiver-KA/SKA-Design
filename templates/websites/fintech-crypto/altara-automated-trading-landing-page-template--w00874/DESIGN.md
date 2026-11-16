# Design system — Altara Automated Trading Landing Page Template

`SN-W00874` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep navy page (#020617) with a large white headline where the second phrase, Absolute Precision, is set in a blue gradient. The primary button is a solid blue (#2563eb) and the secondary a quiet outline button. A faint blue glow sits behind the hero and a dashboard frame starts below the fold. Blue does the emphasis and the action, so the palette stays cool.

**Mood:** dark, cool, precise, polished, blue-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#1e293b` · `#0f172a` · `#2563eb` · `#334155` · `#3b82f6` · `#64748b` · `#020617` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-blue-900/20`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Logo cloud (`logo-cloud`)
9. Call to action (`cta`)
10. Sign-in form (`auth-form`)
11. FAQ (`faq`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #2563eb;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#334155',
    accent: '#2563eb',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline phrase in a blue gradient, and keep the first phrase white
- **Do:** Make the primary button solid blue (#2563eb) and pair it with an outline secondary
- **Do:** Keep the glow behind the hero faint and blue-tinted
- **Don't:** Don't add red to the hero; blue and navy are the only colours
- **Don't:** Don't set body copy in the gradient
- **Don't:** Don't add more than two button styles in one hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
