# Design system — Designer Studio SaaS Landing Page Template

`SN-W00338` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A monochrome portfolio on black with no accent colour. The page leans on white type, grey labels and thin dividers, with a very large light Inter headline centred in the hero. A ghost pill button handles the secondary action and small figures sit below.

**Mood:** minimal, monochrome, quiet, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f5f5f5` | Primary action and highlights |

Palette by frequency of use: `#262626` · `#171717` · `#525252` · `#e5e5e5` · `#a3a3a3` · `#f5f5f5` · `#737373` · `#000000` · `#ffffff` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** thin, normal, extralight
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,0,0,0.5)]`, `shadow-[0_0_8px_rgba(200,200,200,0.5)]`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-normal tracking-tight text-neutral-500 border border-transparent hover:border-neutral-800 hover:text-neutral-200 hover:bg-neutral-900/30 transition-all duration-500 w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Case studies (`case-studies`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #f5f5f5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#f5f5f5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page monochrome, using only white, grey and black
- **Do:** Set headlines in large light Inter with generous space above
- **Do:** Use thin dividers and pill-shaped ghost buttons for secondary actions
- **Don't:** Don't introduce a brand colour; none is set
- **Don't:** Don't fill the primary button solid colour; use a pale pill
- **Don't:** Don't add bright colour to figures or icons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
