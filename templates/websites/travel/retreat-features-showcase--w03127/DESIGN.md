# Design system — Retreat Features Showcase

`SN-W03127` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome, quiet features page. A darkened photograph of layered misty mountain ridges fills the background, and a centred light-weight League Spartan headline with small grey supporting copy sits over it. No accent colour appears; the greys of the photo and the text do the work. Depth comes from the imagery rather than from shadows or borders.

**Mood:** monochrome, quiet, atmospheric, restrained, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#27272a` · `#ffffff` · `#09090b` · `#d4d4d8` · `#000000` · `#18181b` · `#e4e4e7` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** League Spartan
- **Body:** League Spartan
- **Loaded families:** League Spartan, Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 16px
- **Weights in use:** light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`, `gap-10`

**Primary button**

```html
<a class="inline-block bg-white text-black font-light text-base px-8 py-3 rounded-full shadow hover:bg-zinc-100 transition">…</a>
```

## Page structure

Blocks in page order:

1. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), GSAP

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #d4d4d8;
  --color-border: #27272a;
  --font-display: "League Spartan", sans-serif;
  --font-body: "League Spartan", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#d4d4d8',
    line: '#27272a',
  },
  fontFamily: { display: ['League Spartan'], sans: ['League Spartan'] },
} }
```

## Do and don't

- **Do:** Set the headline in League Spartan at light weight, centred
- **Do:** Keep the section ground a darkened photograph or near-black (#000000) with no colour accents
- **Do:** Use the muted greys (#d4d4d8 for body copy) and let the imagery carry the mood
- **Don't:** Don't add saturated accent colours; this page has none
- **Don't:** Don't set body copy in pure white over the photo, it loses contrast
- **Don't:** Don't use heavy weights for headlines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
