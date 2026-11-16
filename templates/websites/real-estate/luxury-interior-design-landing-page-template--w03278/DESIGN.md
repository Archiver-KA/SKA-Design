# Design system — Luxury Interior Design Landing Page Template

`SN-W03278` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Understated and residential: a dim photograph of a wood-panelled wall sits under a grey overlay, carrying a white serif headline in two lines with the second line in italic. A small tracked capitals line sits beneath, and the navigation is plain text. The palette is neutral, so the warm wood of the room supplies the colour and the type stays quiet.

**Mood:** understated, residential, elegant, dim

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#171717` · `#000000` · `#fafafa` · `#e5e5e5` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 12px · body 14px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-4xl`, `max-w-[1920px]`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-normal hover:bg-[#E5E5E5] transition-colors duration-300 text-center flex justify-center items-center gap-3 group mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Logo cloud (`logo-cloud`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif face, with the second line in italic.
- **Do:** Keep the photograph under a grey overlay so the white type stays readable.
- **Do:** Use small tracked capitals for the subtitle line under the headline.
- **Don't:** Don't add accent colours to the hero; the photograph supplies the warmth.
- **Don't:** Don't lighten the overlay; the white headline needs the dim ground.
- **Don't:** Don't set the headline over the brightest part of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
