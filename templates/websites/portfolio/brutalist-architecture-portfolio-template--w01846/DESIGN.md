# Design system — Brutalist Architecture Portfolio Template

`SN-W01846` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A photography-led architecture page: a full-bleed image of a timber and glass house fills the first screen, and an oversized all-caps headline sits across it. The white letters use blend and transparency effects, so the photograph shows through the type. Colour comes from the image; the interface is monochrome, with small tracked labels.

**Mood:** cinematic, monumental, architectural, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#1a1a1a` · `#d1d5db` · `#e3e1dc` · `#374151` · `#111111` · `#4b5563` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1800px]`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-10`, `gap-16`, `gap-12`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Sign-in form (`auth-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use full-bleed photography behind oversized all-caps headlines
- **Do:** Let the headline blend with the image using blend modes, not a solid colour
- **Do:** Keep UI chrome small, tracked and monochrome
- **Don't:** Don't add accent colours to the interface; the photograph carries the colour
- **Don't:** Don't set the headline in a light body weight
- **Don't:** Don't place body copy over the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
