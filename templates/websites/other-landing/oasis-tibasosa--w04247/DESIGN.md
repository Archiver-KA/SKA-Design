# Design system — Oasis Tibasosa

`SN-W04247` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black, nearly empty opening screen with a single bold sans-serif word set in white at the centre. There is no colour, no navigation and no imagery on the first screen, so the design relies on the title and the space around it. Bold grotesque type in white against pure black is the whole look.

**Mood:** stark, minimal, monochrome, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e3e1dc` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#fef08a` | Primary action and highlights |
| Second accent | `#bae6fd` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#121212` · `#e3e1dc` · `#1a1a1a` · `#374336` · `#9ca3af` · `#111111` · `#fed7aa` · `#bae6fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Manrope, Syncopate
- **Scale (largest breakpoint):** h2 72px · h3 30px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-[0.3em]`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_20px_40px_rgba(0,0,0,0.25)]`, `shadow-[0_20px_40px_rgba(0,0,0,0.1)]`
- **Content width:** `max-w-[1800px]`
- **Common gaps:** `gap-6`, `gap-2`, `gap-x-16`

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-muted: #e3e1dc;
  --color-border: #000000;
  --color-accent: #fef08a;
  --color-accent-2: #bae6fd;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#121212',
    ink: '#ffffff',
    muted: '#e3e1dc',
    line: '#000000',
    accent: '#fef08a',
    accent2: '#bae6fd',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the ground pure black (#000000) with white type only
- **Do:** Use a single bold sans-serif word or title centred on the screen
- **Do:** Leave generous black space around the title
- **Don't:** Don't add colour or accent shapes to the opening screen
- **Don't:** Don't add navigation or imagery above the title in this style
- **Don't:** Don't set the title in a light weight; the bold weight carries it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
