# Design system — Padel Community Landing Page Template

`SN-W03636` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A restrained, institutional page that opens on a mid-grey photographic hero, with a large white sans-serif headline set in two weights and a lighter second line. The text is small and centred, and a semi-transparent glass navigation bar floats over the image. Colour is almost absent, so the page reads as serious and measured rather than playful.

**Mood:** serious, restrained, institutional, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#0379b9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#acbc37` · `#78716c` · `#f5f5f4` · `#e7e5e4` · `#fafaf9` · `#a8a29e` · `#44403c` · `#0379b9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[3rem]` (3rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#ACBC37] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#9aa931] transition-colors inline-flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #0379b9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#0379b9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a sans-serif, white, with the second line in lighter grey
- **Do:** Keep the hero monochrome, with a semi-transparent glass bar over the image
- **Do:** Set body text small and centred on the photograph with a dark overlay
- **Don't:** Don't add bright accent colours to the hero
- **Don't:** Don't set the headline in heavy weights over the photograph
- **Don't:** Don't place body text over the brightest areas of the image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
