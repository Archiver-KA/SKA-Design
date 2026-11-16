# Design system — Luxury Real Estate Landing Page Template

`SN-W03299` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The first screen is a near-black (#18181b) field with a centred wordmark, a few tiny tracked uppercase labels and an outlined button at the top right. The page is almost empty, so the small caps type carries the message and the white outline does the work of an accent. Inter sets every label, and white is the only colour on this screen.

**Mood:** monochrome, minimal, dark, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#18181b` · `#52525b` · `#a1a1aa` · `#d4d4d8` · `#000000` · `#71717a` · `#e4e4e7` · `#27272a` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-[500px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-transparent border border-black px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-black hover:bg-black hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Services (`services`)
3. Call to action (`cta`)
4. Product grid (`product-grid`)
5. Marquee (`marquee`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#52525b',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero field near-black (#18181b) with white type.
- **Do:** Set labels in small uppercase with wide letter spacing.
- **Do:** Style the top call to action as an outlined button, not a filled one.
- **Don't:** Don't add colour to the first screen; the design is monochrome.
- **Don't:** Don't use heavy weights for labels; they stay light and small.
- **Don't:** Don't crowd the top bar; the links are small and widely spaced.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
