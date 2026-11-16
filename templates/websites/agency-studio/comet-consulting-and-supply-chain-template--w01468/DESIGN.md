# Design system — Comet Consulting & Supply Chain Template

`SN-W01468` · agency-studio · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A pure black ground ([#000000]) with white display type set very large in three stacked lines, and the middle word in orange ([#f97316]). A soft warm glow sits behind the headline, and the call-to-action is a solid orange pill with black text. The contrast is strong, and the hierarchy depends on scale and the one orange word.

**Mood:** bold, dark, stark, industrial, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#f97316` · `#000000` · `#71717a` · `#ffffff` · `#a1a1aa` · `#d4d4d8` · `#27272a` · `#431407` · `#ea580c` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 14px · h3 60px · body 16px
- **Weights in use:** normal, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_30px_rgba(249,115,22,0.2)]`, `shadow-[0_0_20px_rgba(249,115,22,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="magnetic tilt-wrapper rounded-full w-full sm:w-auto px-8 py-4 bg-orange-500 text-black text-sm font-normal tracking-widest uppercase hover:bg-orange-400 transition-all flex items-center justify-center gap-2 relative overflow-hidden group shadow-[0_0_30px_rgba(249,115,22,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Benefits (`benefits`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for the middle headline word and the primary call-to-action only
- **Do:** Set the headline in Inter at very large size, stacked in three lines
- **Do:** Keep the ground at #000000 with a soft warm glow behind the headline
- **Don't:** Don't use orange for body copy
- **Don't:** Don't put the orange call-to-action on a light ground
- **Don't:** Don't use more than one orange word per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
