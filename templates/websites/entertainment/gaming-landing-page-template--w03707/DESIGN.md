# Design system — Gaming Landing Page Template

`SN-W03707` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

Charcoal-black ground with a bold italic serif wordmark set very large in white and right-aligned, followed by a short sans-serif tagline. Navigation is a plain row of grey uppercase labels with one active item in a dark chip, and a small address card sits in the corner as a utility element. The layout is restrained and monochrome, which leaves the large type to carry the page.

**Mood:** bold, monochrome, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c28e3a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c28e3a` · `#d1d5db` · `#000000` · `#18181b` · `#27272a` · `#9ca3af` · `#6b7280` · `#e5e7eb` · `#d4a045`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Monda
- **Body:** Monda
- **Loaded families:** Cinzel, Monda
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 20px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-5`

**Primary button**

```html
<a class="clip-card-btn px-8 py-2.5 bg-[#c28e3a] text-zinc-900 text-base font-semibold uppercase tracking-wider hover:bg-[#d4a045] transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #c28e3a;
  --font-display: "Monda", sans-serif;
  --font-body: "Monda", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
    accent: '#c28e3a',
  },
  fontFamily: { display: ['Monda'], sans: ['Monda'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a large bold italic serif, right-aligned
- **Do:** Keep navigation as uppercase grey labels with one active item in a dark chip
- **Do:** Keep the page to white and near-black, with no extra colour in the hero
- **Don't:** Don't set the wordmark in a sans-serif
- **Don't:** Don't add gradient or glow effects to the hero
- **Don't:** Don't set body copy in all caps

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
