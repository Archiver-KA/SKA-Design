# Design system — Nuhaus HP

`SN-W00605` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black, gallery-like page with a very wide-tracked white wordmark top left and a grey intro line below it. A dark control card on the right holds two white-knobbed sliders, and section navigation sits as large grey words on the left, the active item in white. Colour is absent, so spacing, tracking and the sliders do the work.

**Mood:** minimal, gallery-like, monochrome, spacious, exacting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#e5e5e5` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Afacad
- **Body:** Afacad
- **Loaded families:** Afacad
- **Scale (largest breakpoint):** h2 60px · body 20px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.8)]`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-white/5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Product grid (`product-grid`)
3. About (`about`)
4. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Afacad", sans-serif;
  --font-body: "Afacad", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Afacad'], sans: ['Afacad'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in widely tracked white capitals on a pure black ground (#050505).
- **Do:** Use white slider knobs (#ffffff) on thin grey tracks inside a dark rounded card.
- **Do:** Show the active section in white and the others in grey (#e5e5e5 or lower).
- **Don't:** Don't add any accent colour; the first screen is achromatic.
- **Don't:** Don't set the wordmark in tight tracking; the wide spacing is the identity.
- **Don't:** Don't crowd the controls; each slider sits with generous space around it.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
