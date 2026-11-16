# Design system — The Body Rhythm

`SN-W02537` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, cinematic hero built on outlined display type: oversized uppercase words are drawn as hairline strokes on a near-black ground (#141414), so the headline reads as structure rather than mass. A small red-brown label marks the section, and the body copy is a muted grey.

**Mood:** cinematic, austere, architectural, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141414` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#141414` · `#0f0e0e` · `#000000` · `#121212`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h3 20px · body 18px
- **Weights in use:** light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center justify-between w-full p-6 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 group hover-trigger">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Services (`services`)
6. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #141414;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141414',
    surface: '#121212',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the hero headline as outlined uppercase type with a hairline stroke
- **Do:** Keep the ground near-black (#141414) and use white for the logo and navigation
- **Do:** Use a small red-brown uppercase label above the title as the only colour
- **Don't:** Don't fill the outlined headline; it stays a stroke
- **Don't:** Don't add gradient fills to the headline type
- **Don't:** Don't set the body copy in pure white; it is a muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
