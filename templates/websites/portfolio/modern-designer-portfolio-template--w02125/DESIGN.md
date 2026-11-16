# Design system — Modern Designer Portfolio Template

`SN-W02125` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark black portfolio (#050505) with oversized uppercase white display type that fills the first screen. Signal red-orange (#ff3000) is the single accent, used as a solid block beside the headline and as the active marker in the numbered side index. Vertical grey micro-text and the numbered index give it a poster-like, editorial system, with depth coming from scale rather than effects.

**Mood:** bold, brutal, poster-like, high-contrast, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ff3000` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff3000` · `#a3a3a3` · `#262626` · `#171717` · `#737373` · `#000000` · `#525252` · `#050505` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 144px · h2 72px · h3 24px · body 18px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-screen-2xl`, `max-w-[150px]`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex bg-[#FF3000] text-white text-xs font-semibold tracking-widest uppercase px-6 py-4 items-center gap-3 hover:bg-white hover:text-black transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Integrations (`integrations`)
7. Timeline (`timeline`)
8. 3D / canvas scene (`3d-canvas`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ff3000;
  --color-accent-2: #22c55e;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
    accent: '#ff3000',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase at display size, white on #050505.
- **Do:** Use #ff3000 for one solid block or the active index marker per screen.
- **Do:** Keep the numbered side index (01, 02, 03) and the vertical micro-text as navigation cues.
- **Don't:** Don't use the red-orange for body text or long link lists.
- **Don't:** Don't soften the headlines with light weights or gradients.
- **Don't:** Don't add decorative shadows; the page is flat black with hard-edged blocks.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
