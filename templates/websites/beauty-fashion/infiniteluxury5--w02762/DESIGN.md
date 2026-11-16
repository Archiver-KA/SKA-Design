# Design system — infiniteluxury5

`SN-W02762` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Cinematic luxury page: a darkened photograph of a vintage blue racing car fills the hero, with a white light-weight headline set on the left over the image. Amber (#f59e0b) marks a small eyebrow label and a dashed progress rule along the bottom, giving the page a precise, instrumented accent. The look is dark and measured, with the object as the star.

**Mood:** cinematic, dark, measured, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#71717a` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#f4f4f5` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#f59e0b` · `#09090b` · `#f4f4f5` · `#a1a1aa` · `#27272a` · `#d4d4d8` · `#fafafa` · `#3f3f46` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h2 60px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[calc(100%-1.5rem)]`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="text-zinc-400 hover:text-amber-500 transition-colors p-2 border border-zinc-800 rounded-full hover:border-amber-500/50 bg-zinc-950/50 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #71717a;
  --color-text: #fafafa;
  --color-muted: #f4f4f5;
  --color-border: #27272a;
  --color-accent: #f59e0b;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#71717a',
    ink: '#fafafa',
    muted: '#f4f4f5',
    line: '#27272a',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a light sans in white, left-aligned over the darkened photograph
- **Do:** Use amber (#f59e0b) for the small eyebrow label and the dashed progress rule
- **Do:** Darken the hero photograph with an overlay so the object sits behind the copy
- **Don't:** Don't use amber for buttons or large fills; it marks labels and the progress rule
- **Don't:** Don't place body copy over the bright parts of the car; it reads poorly there
- **Don't:** Don't brighten the photograph; the page depends on the dark overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
