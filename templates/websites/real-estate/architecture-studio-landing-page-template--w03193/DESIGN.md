# Design system — Architecture Studio Landing Page Template

`SN-W03193` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cinematic dark landing page where a full-bleed architectural photograph sits behind oversized uppercase headlines, with the image showing through the letters so the words read as windows onto the building. Small captions sit in the corners. All colour comes from the photograph.

**Mood:** cinematic, bold, editorial, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#6b7280` · `#9ca3af` · `#0a0a0a` · `#4b5563` · `#e3e1dc` · `#111111` · `#050505` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Manrope, Syncopate
- **Scale (largest breakpoint):** h2 60px · h3 36px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1600px]`, `max-w-[90vw]`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Sign-in form (`auth-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #000000;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#000000',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use a full-bleed architectural photograph as the hero background
- **Do:** Set the headline in very large uppercase, with the image showing through the letters
- **Do:** Keep captions small in the bottom corners
- **Don't:** Don't add colour to the type; the photograph supplies the colour
- **Don't:** Don't place small body text over busy parts of the photo
- **Don't:** Don't shrink the headline to sit beside the photo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
