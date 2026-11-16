# Design system — Creative Portfolio Landing Page Template

`SN-W01895` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A playful collage on a warm off-white ground, where navigation sits in small coloured sticker pills of yellow, blue, pink and green. A torn-paper panel in the centre holds a large cropped word, and a handwritten caption and a sticky note add a casual, handmade tone. Colour is applied to small stickers and never to large areas, so the page stays light and quick to read.

**Mood:** playful, handmade, casual, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4efea` | Page ground |
| Surface | `#f4efea` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#1f2937` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#6ec1ff` | Primary action and highlights |
| Second accent | `#ff7fbf` | Supporting highlights |

Palette by frequency of use: `#111111` · `#1f2937` · `#ffd84d` · `#292524` · `#f4efea` · `#000000` · `#333333` · `#e7e5e4` · `#ffffff` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 160px · body 36px
- **Weights in use:** semibold, extrabold
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[6px_6px_0px_rgba(0,0,0,0.2)]`, `shadow-[4px_4px_0px_rgba(0,0,0,0.15)]`, `shadow-sm`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-x-2`, `gap-y-2`

**Primary button**

```html
<a class="bg-[#5ED48F] text-[#111111] font-display font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.15)] border-2 border-transparent transition-all duration-300 group-hover:scale-110 group-hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] group-hover:rotate-2 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f4efea;
  --color-surface: #f4efea;
  --color-text: #111111;
  --color-muted: #1f2937;
  --color-border: #f5f5f4;
  --color-accent: #6ec1ff;
  --color-accent-2: #ff7fbf;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4efea',
    surface: '#f4efea',
    ink: '#111111',
    muted: '#1f2937',
    line: '#f5f5f4',
    accent: '#6ec1ff',
    accent2: '#ff7fbf',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep navigation as small coloured pills, one colour each: yellow, blue, pink and green.
- **Do:** Use a handwritten caption style for one short line per section.
- **Do:** Keep the torn-paper panel at the centre of the composition.
- **Don't:** Don't fill large areas with the sticker colours.
- **Don't:** Don't set the captions in a serif; they stay casual.
- **Don't:** Don't square off the pills; they are full rounded shapes.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
