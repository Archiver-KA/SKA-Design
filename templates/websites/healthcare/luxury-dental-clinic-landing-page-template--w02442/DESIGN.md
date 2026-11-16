# Design system — Luxury Dental Clinic Landing Page Template

`SN-W02442` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A stark, monochrome page on near-black (#030303) where the type does the work. The headline runs very large in a light serif with its middle line in muted grey, and the only solid element is a white reserve button. Colour is absent by design; depth comes from the smoky grey photographic texture at the edges of the hero.

**Mood:** stark, editorial, monochrome, cinematic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#030303` · `#27272a` · `#52525b` · `#a1a1aa` · `#18181b` · `#000000` · `#3f3f46` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="text-[10px] font-semibold uppercase tracking-[0.2em] bg-white text-black px-8 py-3 hover:bg-zinc-300 transition-all rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Articles (`blog-articles`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at near-black (#030303) with white headline type
- **Do:** Set the headline very large, with the middle line in muted grey (#71717a)
- **Do:** Use the white reserve button as the only solid fill in the hero
- **Don't:** Don't add saturated colour; the palette is greys and white
- **Don't:** Don't add drop shadows; depth comes from the photographic texture
- **Don't:** Don't set secondary copy in pure white; use the muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
