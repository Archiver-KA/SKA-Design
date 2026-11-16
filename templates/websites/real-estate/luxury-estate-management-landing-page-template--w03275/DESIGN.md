# Design system — Luxury Estate Management Landing Page Template

`SN-W03275` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Photographic and tailored: a dim, warm-toned interior photograph sits under a dark overlay, with a large white sans headline in two lines and the final word set in italic. Supporting copy is muted grey, and the calls to action are one solid white button beside a dark outline. The palette stays near-monochrome, so the photograph supplies the warmth and the type stays quiet.

**Mood:** photographic, refined, dim, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#262626` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#525252` · `#737373` · `#a3a3a3` · `#000000` · `#171717` · `#050505` · `#e5e5e5` · `#c5a059` · `#222222`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 36px · body 12px
- **Weights in use:** normal, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-8`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2.5 border border-white-faint text-white hover:bg-white hover:text-black transition-all duration-500 text-xs font-normal uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Testimonials (`testimonials`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #262626;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c5a059;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#262626',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c5a059',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place a dim interior photograph under the hero with a dark overlay.
- **Do:** Set the final headline word in italic white.
- **Do:** Make the primary button solid white and the secondary a dark outline.
- **Don't:** Don't brighten the overlay; the headline needs the dim ground.
- **Don't:** Don't set the hero copy in bright colours; it stays white and grey.
- **Don't:** Don't set body copy in pure white at full size.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
