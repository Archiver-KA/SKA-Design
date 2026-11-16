# Design system — Marcel Creative Portfolio Template

`SN-W02105` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A brutalist developer portfolio on near-black [#0a0a0a], with a very large, tightly set sans headline that steps down in tone across four lines: white, mid-grey, grey, then white again. The type is the whole first screen, with a three-word nav and a thin outlined tag for freelance availability at the top right. No colour or imagery is used.

**Mood:** brutalist, stark, tonal, confident, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#f0f0f0` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#222222` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f0f0f0` · `#888888` · `#0a0a0a` · `#222222` · `#333333` · `#a0a0a0` · `#111111` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 140px · h2 12px · h3 30px · body 64px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Content width:** `max-w-[1600px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-3`, `gap-12`

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** GSAP, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #333333;
  --color-text: #f0f0f0;
  --color-muted: #888888;
  --color-border: #222222;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#333333',
    ink: '#f0f0f0',
    muted: '#888888',
    line: '#222222',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large bold sans, tightly leaded over four lines.
- **Do:** Step the tone down through the headline: white, mid-grey (#888888), grey, then white.
- **Do:** Keep the top-right status tag as a thin outline with small uppercase text.
- **Don't:** Don't add colour; the page uses only greys on black.
- **Don't:** Don't round the corners of the tag or any block; the radius is none.
- **Don't:** Don't set the headline in a serif or in mixed case.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
