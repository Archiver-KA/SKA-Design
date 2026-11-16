# Design system — Architecture Studio Portfolio Landing Page Template

`SN-W01805` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Cinematic and luxurious: a dim interior photograph sits behind wide, letter-spaced white capitals that run nearly the full width, with a small grey tagline beneath. Navigation is a rounded pill at the top, and the hero is staged like a film title. Colour is held back to the photograph's warm wood and greenery, so the type stays white and the page reads as dark photography rather than a light layout.

**Mood:** cinematic, luxurious, dim, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#9ca3af` · `#6b7280` · `#0a0a0a` · `#050505` · `#4b5563` · `#e3e1dc` · `#111111` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Manrope, Syncopate
- **Scale (largest breakpoint):** h2 60px · h3 36px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1600px]`, `max-w-[90vw]`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="px-5 py-2 hover:bg-white/10 rounded-full transition-all duration-300 text-white/90 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #000000;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#000000',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the hero title in wide, letter-spaced white capitals across the width
- **Do:** Use a dim, dark photograph as the full-bleed hero background
- **Do:** Keep navigation in a rounded pill at the top of the page
- **Don't:** Don't set the hero title in colour; it stays white over the photo
- **Don't:** Don't brighten the photo under a light overlay; the mood depends on dim tones
- **Don't:** Don't add decorative icons beside the wordmark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
