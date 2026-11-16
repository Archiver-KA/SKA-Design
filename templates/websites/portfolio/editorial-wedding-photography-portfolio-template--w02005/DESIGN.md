# Design system — Editorial Wedding Photography Portfolio Template

`SN-W02005` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An off-white (#fdfcf8) hero with a very large serif headline set over a grey photograph panel, and a solid white button beside an outlined one. Small uppercase labels in a monospace-like face run along the nav and the footnote line. The hero is a framed panel rather than full-bleed, which gives the page a gallery feel. Colour is neutral throughout, with the gold accent kept sparse.

**Mood:** gallery-like, framed, minimal, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#e0dcd6` | Cards, panels, raised areas |
| Text | `#121212` | Headings and primary copy |
| Muted text | `#8a8581` | Secondary copy, captions |
| Border | `#e0dcd6` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#121212` · `#8a8581` · `#fdfcf8` · `#ffffff` · `#d4af37` · `#e0dcd6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** body 10px
- **Weights in use:** light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[clamp(70rem,95vw,100rem)]`, `max-w-[40ch]`
- **Section padding:** `py-[clamp(5rem,10vw,10rem)]`, `py-[clamp(6rem,12vw,12rem)]`
- **Common gaps:** `gap-8`, `gap-4`, `gap-6`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Awards / press (`awards-press`)
6. About (`about`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Timeline (`timeline`)
9. Testimonials (`testimonials`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #e0dcd6;
  --color-text: #121212;
  --color-muted: #8a8581;
  --color-border: #e0dcd6;
  --color-accent: #d4af37;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#e0dcd6',
    ink: '#121212',
    muted: '#8a8581',
    line: '#e0dcd6',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Frame the hero photograph inside a panel, not full-bleed
- **Do:** Keep headlines large serif in near-black, set in short lines
- **Do:** Use a solid white button for the primary call to action beside an outlined secondary one
- **Don't:** Don't let headline words break mid-word
- **Don't:** Don't leave the photograph without an image
- **Don't:** Don't set long paragraphs in the display serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
