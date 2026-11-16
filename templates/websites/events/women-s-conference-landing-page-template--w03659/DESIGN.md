# Design system — Women’s Conference Landing Page Template

`SN-W03659` · events · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A soft cream page with a large dark serif headline, and a second line set in italic taupe (#8c705f) that gives the page its tone. A low beige wave runs across the bottom of the hero, and a row of countdown numbers sits in small grey sans-serif beneath the subtitle. The design is editorial and calm, relying on type size and one warm colour rather than imagery.

**Mood:** editorial, warm, contemplative, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#8c705f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8c705f` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d6c7b5` · `#8c705f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** Inter
- **Loaded families:** DM Serif Display, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 152px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow`
- **Content width:** `max-w-6xl`, `max-w-[50px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex bg-earth-900 text-sand-50 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-earth-800 hover:shadow-lg hover:shadow-earth-900/10 hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Team (`team`)
6. Schedule (`schedule-agenda`)
7. Bento grid (`bento-grid`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-muted: #8c705f;
  --color-border: #ffffff;
  --color-accent: #8c705f;
  --font-display: "DM Serif Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    muted: '#8c705f',
    line: '#ffffff',
    accent: '#8c705f',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large in a dark serif, with the second line in italic taupe (#8c705f)
- **Do:** Use the beige (#d6c7b5) for decorative shapes such as the wave, not for text
- **Do:** Keep the countdown and its labels small, uppercase and grey
- **Don't:** Don't add photography to the hero; the type carries the design
- **Don't:** Don't use the taupe on large buttons
- **Don't:** Don't introduce strong colours; keep to cream, beige and taupe

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
