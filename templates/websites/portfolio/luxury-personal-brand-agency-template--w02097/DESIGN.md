# Design system — Luxury Personal Brand Agency Template

`SN-W02097` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, editorial agency page on a warm off-white ground [#f5f3ef], with a near-black announcement strip above the nav. The hero headline is a large serif over three lines with the final phrase in italic, and the only solid colour is the dark pill button on the right of the nav. Small uppercase kicker labels sit above headlines, so the copy reads like a magazine opener.

**Mood:** editorial, warm, confident, clean, magazine-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f3ef` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#f5f3ef` · `#292524` · `#a8a29e` · `#d6d3d1` · `#ffffff` · `#57534e` · `#78716c` · `#ebe8e0` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** DM Serif Display, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 48px · body 20px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[#D1CEC7]/50`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="px-8 py-4 border border-stone-300 text-stone-900 rounded-full hover:bg-stone-200 transition-all duration-300 w-full md:w-auto font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Case studies (`case-studies`)
8. Articles (`blog-articles`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f3ef;
  --color-surface: #1c1917;
  --color-text: #1c1917;
  --color-muted: #a8a29e;
  --color-border: #d6d3d1;
  --color-accent: #1c1917;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f3ef',
    surface: '#1c1917',
    ink: '#1c1917',
    muted: '#a8a29e',
    line: '#d6d3d1',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large serif, with the closing phrase in italic.
- **Do:** Use the near-black (#1c1917) pill for the primary action only.
- **Do:** Open each section with a small uppercase kicker above the headline.
- **Don't:** Don't set the page on a dark ground; the hero is warm off-white.
- **Don't:** Don't use the announcement strip for more than one line of text.
- **Don't:** Don't set whole sentences in italic; italic is for one phrase per headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
