# Design system — Tandem Beam

`SN-W04301` · other-landing · dark mode · Sinera Atlas theme `circuit`

## Direction

A near-black page with little visible above the fold: a thin-line logo, a row of muted navigation links and a glass-effect button in the corner. Section breadcrumbs run in small, widely spaced uppercase grey, and a thin vertical line with a small caption marks the scroll cue. The restraint is deliberate, so the page relies on motion and type rather than colour.

**Mood:** restrained, dark, spacious, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050508` | Page ground |
| Surface | `#0d0d12` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8b8ea0` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c7c2ff` | Primary action and highlights |

Palette by frequency of use: `#8b8ea0` · `#ffffff` · `#9da1ae` · `#050508` · `#f3f2ff` · `#e9e7ff` · `#c7c2ff` · `#f6f5ff` · `#0d0d12` · `#9a9aa6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono, Roboto Mono, Inter
- **Scale (largest breakpoint):** h3 26px · body 15px
- **Weights in use:** medium
- **Letter spacing:** `tracking-[.17em]`, `tracking-[.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-[760px]`, `max-w-[640px]`
- **Section padding:** `py-28`
- **Common gaps:** `gap-[18px]`, `gap-[68px]`, `gap-[22px]`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Sidebar (`sidebar`)
4. Modal / overlay (`modal-overlay`)
5. Code / terminal (`code-terminal`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #050508;
  --color-surface: #0d0d12;
  --color-text: #ffffff;
  --color-muted: #8b8ea0;
  --color-border: #ffffff;
  --color-accent: #c7c2ff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050508',
    surface: '#0d0d12',
    ink: '#ffffff',
    muted: '#8b8ea0',
    line: '#ffffff',
    accent: '#c7c2ff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the page ground near-black (#050508) with no colour blocks
- **Do:** Set breadcrumb labels in small, widely spaced uppercase grey
- **Do:** Use a glass-effect button with a thin light edge for the main call to action
- **Don't:** Don't add bright colour to the navigation
- **Don't:** Don't fill the empty hero with decorative shapes
- **Don't:** Don't use heavy weights for the small labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
