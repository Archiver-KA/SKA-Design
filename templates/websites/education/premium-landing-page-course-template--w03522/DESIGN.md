# Design system — Premium Landing Page Course Template

`SN-W03522` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark promotional page on near-black (#050505), with a heavy white headline whose key phrase is filled with a yellow-to-orange gradient (#facc15). A dark product box with a red icon sits at the right, adding depth through its angle and shadow. White and dark ghost pills form the calls to action, keeping the page confident and direct.

**Mood:** confident, direct, dark, promotional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#ef4444` · `#d4d4d4` · `#0a0a0a` · `#22c55e` · `#facc15` · `#171717` · `#f43f5e` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 12px
- **Weights in use:** light, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="group relative flex items-center justify-center px-8 h-12 rounded-lg bg-white text-black text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Sign-in form (`auth-form`)
5. Call to action (`cta`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #facc15;
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
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#facc15',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Fill the key headline phrase with a yellow-to-orange gradient (#facc15)
- **Do:** Use a white pill button as the main action beside a dark outlined button
- **Do:** Show the product as a dark angled box with a small red icon
- **Don't:** Don't use the gradient for body copy
- **Don't:** Don't put the yellow gradient on light backgrounds
- **Don't:** Don't add more than one gradient phrase to a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
