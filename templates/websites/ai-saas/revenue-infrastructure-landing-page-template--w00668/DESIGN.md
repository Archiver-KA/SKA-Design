# Design system — Revenue Infrastructure Landing Page Template

`SN-W00668` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark, black hero for a B2B revenue product, with a dotted halftone field behind the headline. The headline is set large in a sans, with the first line in white and the second in mid-grey, which builds hierarchy without colour. The single white button has one clipped corner and the navigation uses small uppercase labels, giving an engineered and precise tone.

**Mood:** stark, engineered, monochrome, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#a1a1aa` · `#0a0a0a` · `#141414` · `#27272a` · `#050505` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Sans
- **Body:** Geist Sans
- **Loaded families:** Geist Sans, Geist Mono
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tech`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)]`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-[100rem]`, `max-w-[32rem]`
- **Section padding:** `py-[12rem]`, `py-[6rem]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-tech text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Stats band (`stats`)
7. Team (`team`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Geist Sans", sans-serif;
  --font-body: "Geist Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist Sans'], sans: ['Geist Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero on black (#000000) with white headline text and mid-grey for the second line
- **Do:** Use the halftone dot field as the only texture behind the headline
- **Do:** Keep the single white button flat, with its one clipped corner
- **Don't:** Don't add colour to the hero; the page is monochrome
- **Don't:** Don't run the dot field at full density behind the headline; keep the type clear
- **Don't:** Don't use a light ground for the hero; it is black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
