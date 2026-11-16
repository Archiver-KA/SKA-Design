# Design system — Portfolio of Showvik Das

`SN-W02171` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Technical and blueprint-like: a dark charcoal ground (#171717) with a soft cyan glow behind a drawing panel, and a very large uppercase Inter headline in white with the second line in grey. Numbered section labels such as 01 and 02 and a small monospaced title block on the drawing make the page feel like an engineering sheet. Cyan (#06b6d4) is used sparingly for the eyebrow and the primary action.

**Mood:** technical, architectural, bold, precise, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ecfeff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |

Palette by frequency of use: `#262626` · `#525252` · `#06b6d4` · `#a3a3a3` · `#ffffff` · `#171717` · `#737373` · `#22d3ee` · `#000000` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 48px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_rgba(6,182,212,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-xs uppercase widest-tracking font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #171717;
  --color-text: #ecfeff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #06b6d4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#171717',
    ink: '#ecfeff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#06b6d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in uppercase Inter, white with the second line in grey
- **Do:** Use cyan (#06b6d4) only for the eyebrow and the primary button
- **Do:** Put numbered labels such as 01 and 02 above section headings
- **Don't:** Don't use rounded cards; the drawing panels are square
- **Don't:** Don't fill large areas with cyan; it is an accent
- **Don't:** Don't drop the faint vertical grid texture behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
