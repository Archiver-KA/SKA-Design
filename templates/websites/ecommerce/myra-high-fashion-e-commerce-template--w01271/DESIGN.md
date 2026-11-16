# Design system — MYRA High-Fashion E-commerce Template

`SN-W01271` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A restrained fashion page that sits on warm off-white, not black: a pale stone header and a grey-beige hero gradient carry a white serif wordmark. Colour comes only from neutral stone tones (#f4f2eb, #d6cec3) with no accent, so the photography and type carry the look. Uppercase labels and the two gender-split buttons give it a quiet editorial stance.

**Mood:** minimal, editorial, warm neutral, luxurious, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#eae7e1` | Page ground |
| Surface | `#f4f2eb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#d6cec3` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#f4f2eb` · `#d6cec3` · `#eae7e1` · `#0a0a0a` · `#e8e4dc` · `#ebe7e0` · `#171717` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Libre Baskerville, DM Sans
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 14px · body 12px
- **Weights in use:** normal, light, extralight
- **Letter spacing:** `tracking-[0.1em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_50px_rgba(0,0,0,0.03)]`
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-px`

**Primary button**

```html
<a class="anim-fade-up inline-block px-10 py-4 text-xs tracking-[0.1em] bg-neutral-950 text-white transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-0.5 pointer-events-auto font-dm-sans">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #eae7e1;
  --color-surface: #f4f2eb;
  --color-text: #000000;
  --color-border: #d6cec3;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#eae7e1',
    surface: '#f4f2eb',
    ink: '#000000',
    line: '#d6cec3',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Keep the page on warm neutrals (#eae7e1, #f4f2eb) with black (#000000) text
- **Do:** Set the wordmark and hero title in a white or near-black serif, uppercase for the logo
- **Do:** Let fashion photography fill full-width hero and grid cells without tinting
- **Don't:** Don't add a saturated accent colour; the palette is neutral only
- **Don't:** Don't put the page on black; the light stone base is the look
- **Don't:** Don't set the wordmark in sans-serif; keep the serif logo.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
