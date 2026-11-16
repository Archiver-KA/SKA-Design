# Design system — Portfolio Layout with Navigation

`SN-W02170` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A single dark window component styled like a code editor: a grey title bar with three dots and the domain, on a near-black card (#171717 family). Type is small and monochrome, with white section headings over muted grey body copy and underlined links, and no colour beyond that. Hierarchy comes from weight and spacing alone.

**Mood:** monochrome, compact, technical, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f5f5f5` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#f5f5f5` · `#a3a3a3` · `#262626` · `#0a0a0a` · `#737373` · `#525252` · `#171717` · `#f87171` · `#facc15` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Contact form (`contact-form`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #f5f5f5;
  --color-accent-2: #f87171;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#f5f5f5',
    accent2: '#f87171',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use white section headings over muted grey body copy
- **Do:** Frame the component in a title bar with three dots and a domain
- **Do:** Keep links underlined and monochrome
- **Don't:** Don't add colour; the component is grey on black
- **Don't:** Don't use large type; the scale stays small inside the window
- **Don't:** Don't add a second background tone inside the window

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
