# Design system — Boutique Hotel & Suites Booking Template

`SN-W03032` · travel · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A dark rooms page on near-black zinc (#18181b), with a large white serif heading whose word 'Zimmer' is set in italic. Small uppercase tracked labels sit above and below the title, and a thin info bar lists categories and check times between hairlines. Room cards are marked with small outlined tags, so the page reads as calm, dark and editorial.

**Mood:** dark, editorial, quiet, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#27272a` · `#71717a` · `#18181b` · `#e4e4e7` · `#3f3f46` · `#000000` · `#d4d4d8` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Playfair Display, Roboto, Montserrat, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="md:hidden uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full px-5 py-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set section titles in white serif, with one word in italic
- **Do:** Use uppercase tracked labels above titles
- **Do:** Separate the info strip with thin hairlines, not boxes
- **Don't:** Don't use a light ground for this page; it is near-black.
- **Don't:** Don't set titles in a heavy sans; the serif is the signature
- **Don't:** Don't add bright accent colours; the page is monochrome

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
