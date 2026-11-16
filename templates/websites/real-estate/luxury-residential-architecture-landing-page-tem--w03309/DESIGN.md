# Design system — Luxury Residential Architecture Landing Page Template

`SN-W03309` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, quiet hero with a large serif headline in white, where the single italic word 'sculpted' supplies the contrast of style. A hairline rule separates the headline from a small serif paragraph, and the navigation and one link are set in tiny tracked uppercase. There is no accent colour; emphasis comes from the italic and the empty space.

**Mood:** quiet, dark, editorial, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f9f9f7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#a8a29e` · `#e7e5e4` · `#78716c` · `#57534e` · `#d6d3d1` · `#000000` · `#f5f5f4` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 60px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-screen-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mt-8 px-10 py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors flex items-center gap-4 w-fit">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f9f9f7;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #e7e5e4;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f9f9f7',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large serif in white, with one italic word for emphasis.
- **Do:** Use a hairline rule under the headline to separate it from the paragraph.
- **Do:** Keep navigation and links in tiny tracked uppercase.
- **Don't:** Don't add an accent colour; the page is white and grey on black.
- **Don't:** Don't set the paragraph in bold; it stays regular and small.
- **Don't:** Don't place a colour fill behind the links.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
