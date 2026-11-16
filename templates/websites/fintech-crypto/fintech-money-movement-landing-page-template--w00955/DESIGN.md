# Design system — Fintech Money Movement Landing Page Template

`SN-W00955` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero (#0f172a) carries a teal-green gradient (#10b981) on the second headline line, which is the page's main colour move. Type is set large in a geometric sans, with a white first line and muted grey supporting copy. The page is a dark design, not a light one.

**Mood:** dark, technical, gradient-accented, precise, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#10b981` · `#94a3b8` · `#64748b` · `#e2e8f0` · `#475569` · `#1e293b` · `#34d399` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Manrope
- **Loaded families:** Plus Jakarta Sans, Manrope, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-emerald-500/20`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-[1200px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-3.5 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Code / terminal (`code-terminal`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #94a3b8;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #1e293b;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#94a3b8',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use teal-green (#10b981) for the headline gradient and the primary button.
- **Do:** Keep the page ground dark navy (#0f172a) with white headlines.
- **Do:** Set headlines in a bold geometric sans at large size.
- **Don't:** Don't use light-page styling on this dark design.
- **Don't:** Don't add a second bright accent next to the teal.
- **Don't:** Don't set grey supporting copy below the contrast minimum.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
