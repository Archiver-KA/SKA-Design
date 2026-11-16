# Design system — Industrial Catering & Camp Management Landing Page Template

`SN-W02915` · food-beverage · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A photo-backed hero where an overhead food photograph sits under a light grey-blue gradient, and a white sans headline is stacked in three lines with a fading middle and last line. The nav is a frosted pill with a navy 'Contact Us' button (#0f172a), and a single white pill button sits below the copy. The stance is corporate, with slate-blue neutrals over the photo; the body copy is faint.

**Mood:** corporate, calm, slate, photographic, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#94a3b8` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#cbd5e1` · `#475569` · `#e2e8f0` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #0f172a;
  --color-accent-2: #34d399;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#334155',
    accent: '#0f172a',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans, stacked in lines, over a light overlay on the photo.
- **Do:** Use the navy (#0f172a) for the nav contact button only.
- **Do:** Keep the nav in a frosted pill bar floating over the hero.
- **Don't:** Don't set light body copy over the photo without an overlay; it becomes faint.
- **Don't:** Don't use green (#34d399) as a link colour; the palette is navy and white.
- **Don't:** Don't set the hero over a dark photo; it relies on a light gradient.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
