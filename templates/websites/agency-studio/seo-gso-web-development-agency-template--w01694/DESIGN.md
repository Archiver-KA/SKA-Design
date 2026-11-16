# Design system — SEO GSO Web Development Agency Template

`SN-W01694` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a large white sans headline, where the word DIGITAL takes a violet gradient (#a855f7 to #c084fc). Small monospaced labels sit above and beside the headline, and the primary button is solid indigo. The hero rests on type and the gradient alone.

**Mood:** dark, technical, bold, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#525252` · `#000000` · `#d4d4d4` · `#a855f7` · `#262626` · `#c084fc` · `#a3a3a3` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Mono
- **Body:** Geist Mono
- **Loaded families:** Geist, Geist Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 12px · body 14px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_12px_rgba(168,85,247,0.8)]`, `shadow-[0_0_20px_rgba(124,58,237,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-1`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-6 py-2 text-xs font-semibold tracking-widest uppercase overflow-hidden rounded-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Unicorn Studio (WebGL scenes), React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --font-display: "Geist Mono", sans-serif;
  --font-body: "Geist Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a855f7',
  },
  fontFamily: { display: ['Geist Mono'], sans: ['Geist Mono'] },
} }
```

## Do and don't

- **Do:** Set the brand word in the violet gradient (#a855f7 to #c084fc), and keep the rest of the headline white.
- **Do:** Use monospaced type for status labels and small captions.
- **Do:** Keep the background black (#030303) so the gradient carries the colour.
- **Don't:** Don't set long body copy in the monospaced face.
- **Don't:** Don't rely on a 3D scene for readability; the hero must work on type alone.
- **Don't:** Don't use the grey (#737373) for headline text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
