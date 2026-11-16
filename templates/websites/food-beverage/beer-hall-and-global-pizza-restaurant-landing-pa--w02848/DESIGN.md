# Design system — Beer Hall & Global Pizza Restaurant Landing Page Template

`SN-W02848` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The same visual system as its sibling Godwin's variant: a near-black ground (#0c0a09), white headlines, and amber (#f59e0b) on the second headline line. This version places a dimmed photo of beer taps behind the hero, with a dark gradient over the image so the centred text stays legible. Amber is held to one headline line and the nav action, and the photo supplies the warmth.

**Mood:** dark, atmospheric, photographic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#a8a29e` · `#d97706` · `#292524` · `#78350f` · `#b45309` · `#1c1917` · `#78716c` · `#7f1d1d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 20px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. About (`about`)
3. Feature grid (`features`)
4. Map / location (`map-location`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #f59e0b;
  --color-accent-2: #7f1d1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#292524',
    accent: '#f59e0b',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Dim any photo behind the hero with a dark overlay before placing type on it
- **Do:** Set one headline line in amber (#f59e0b) and keep the rest white
- **Do:** Keep the ground at #0c0a09 with cards on #1c1917
- **Don't:** Don't place the hero text over an undimmed photo
- **Don't:** Don't use amber for body copy
- **Don't:** Don't switch the hero to a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
