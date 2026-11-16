# Design system — Creative Coder Portfolio Website Template

`SN-W01881` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A playful, poster-like layout on a cream ground (#fffdf5), with oversized uppercase Space Grotesk headlines in near-black. Three saturated colours, pink, blue and yellow, appear only as blurred glow shapes and as the words in a black scrolling marquee band. Pill buttons and that hard black band tie the colour together, so the page reads as loud but ordered.

**Mood:** playful, loud, graphic, cheerful, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#f9a8d4` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#f9a8d4` · `#2563eb` · `#fde047` · `#f5f5f4` · `#0f172a` · `#fffdf5` · `#64748b` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Syne
- **Scale (largest breakpoint):** h2 96px · h3 48px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-3xl` (24px)
- **Shadows:** `shadow-none`, `shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`, `shadow-lg`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fffdf5;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #000000;
  --color-accent: #f9a8d4;
  --color-accent-2: #2563eb;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf5',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#000000',
    accent: '#f9a8d4',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in Space Grotesk, uppercase, at display size in near-black.
- **Do:** Use the pink (#f9a8d4), blue (#2563eb) and yellow (#fde047) only as glow shapes and marquee words.
- **Do:** Frame sections with the black marquee band and pill-shaped buttons.
- **Don't:** Don't set body text on top of the coloured glow shapes.
- **Don't:** Don't use the three bright colours as flat fills behind text blocks.
- **Don't:** Don't set headlines in thin weights; the style depends on heavy shapes.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
