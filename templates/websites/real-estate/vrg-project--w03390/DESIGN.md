# Design system — VRG Project

`SN-W03390` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Monochrome investment-group page with a greyscale photograph of towers under a heavy dark overlay. The headline is white serif at very large size, with its last word faded to grey, which gives a two-tier emphasis. A short column of light-grey copy and small uppercase grey labels sits at the right, so the page reads as quiet and institutional.

**Mood:** monochrome, institutional, quiet, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Text | `#cbd5e1` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#030303` · `#10b981` · `#cbd5e1` · `#34d399` · `#000000` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 120px · h2 60px · h3 24px · body 16px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.15em] font-medium hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Map / location (`map-location`)
5. Pricing (`pricing`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-text: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    ink: '#cbd5e1',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero photograph greyscale and under a heavy dark overlay.
- **Do:** Set the headline in white serif and fade its last word to grey.
- **Do:** Set sector labels in small uppercase grey, placed under the body copy.
- **Don't:** Don't introduce colour into the photograph or the headline.
- **Don't:** Don't place body copy over the brightest parts of the towers.
- **Don't:** Don't add a colour accent; the page has none.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
