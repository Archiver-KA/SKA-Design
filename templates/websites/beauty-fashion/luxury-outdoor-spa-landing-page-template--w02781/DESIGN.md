# Design system — Luxury Outdoor Spa Landing Page Template

`SN-W02781` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic outdoor-spa hero: a forest and sunset photograph fills the frame behind a centred two-line headline. The first line is white upright sans and the second is an italic amber line (#f59e0b). Amber is used for that phrase, the primary button and a small badge, and the rest of the interface is near-black with white text, so the photograph is the main colour source.

**Mood:** cinematic, warm, dark, natural, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#f59e0b` · `#52525b` · `#ffffff` · `#e4e4e7` · `#d97706` · `#18181b` · `#71717a` · `#09090b` · `#f4f4f5` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-zinc-200/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="group relative px-8 py-3 bg-amber-500 text-zinc-950 text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-amber-400">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic and amber (#f59e0b).
- **Do:** Use amber for the primary button and one small badge, nothing else.
- **Do:** Keep the hero photograph darkened so centred white text reads clearly.
- **Don't:** Don't use amber for body copy.
- **Don't:** Don't add a second accent colour beside amber.
- **Don't:** Don't lighten the nav background over the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
