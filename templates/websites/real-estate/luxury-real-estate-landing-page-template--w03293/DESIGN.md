# Design system — Luxury Real Estate Landing Page Template

`SN-W03293` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The design is cinematic and monochrome: a full-bleed architectural photograph carries nearly all of the colour, and the interface stays in white and grey. The hero headline is set in widely letter-spaced uppercase white over the image, so the type reads as a graphic layer rather than body copy. Navigation is tiny and tracked out at the top, so the building leads.

**Mood:** monochrome, cinematic, restrained, architectural

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
- **Common gaps:** `gap-10`, `gap-16`, `gap-x-12`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. About (`about`)
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

- **Do:** Set hero headlines in widely letter-spaced uppercase white over the photograph.
- **Do:** Keep interface chrome to white (#ffffff) and grey (#9ca3af) only.
- **Do:** Keep navigation small and tracked out at the top of the page.
- **Don't:** Don't add an accent colour; the page has none.
- **Don't:** Don't put small body copy over bright photograph areas.
- **Don't:** Don't set headlines in bold weights; the type stays light and wide.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
