# Design system — Cinematic Travel Filmmaker Portfolio

`SN-W01863` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black travel-film page built on a very large light-weight sans headline, with the middle line dimmed to grey so the three lines read in two tones. Small uppercase tracked labels sit above the headline and in the nav, and a short grey paragraph with one underlined link sits bottom right. The layout is asymmetric, with the text weight on the left and open space on the right.

**Mood:** cinematic, airy, quiet, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#171717` · `#0a0a0a` · `#262626` · `#000000` · `#a3a3a3` · `#525252` · `#0f0f0f` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Content width:** `max-w-[1800px]`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Articles (`blog-articles`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light-weight sans at very large size, dimming the middle line
- **Do:** Use small uppercase tracked labels above the headline and in the nav
- **Do:** Anchor the paragraph and link bottom right, away from the headline
- **Don't:** Don't use a white page ground; this design is black
- **Don't:** Don't set the headline in a bold weight
- **Don't:** Don't add colour accents

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
