# Design system — Elegant Wedding Invitation Landing Page Template

`SN-W03593` · events · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

The couple's names are set in a classic serif, very large and dark on a warm white ground, with the ampersand in pale grey. A tracked uppercase line sits above the names and the date sits below in spaced caps. The navigation bar is taupe (#78716c) and carries a dark button, the only solid shape on the screen. The countdown uses the same serif for its numerals, so the page reads as one formal, quiet piece.

**Mood:** classic, quiet, formal, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e5e4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#292524` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |

Palette by frequency of use: `#292524` · `#a8a29e` · `#e7e5e4` · `#78716c` · `#ffffff` · `#1c1917` · `#57534e` · `#f8fafc` · `#f5f5f4` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Jost
- **Body:** Jost
- **Loaded families:** Cinzel, Jost
- **Scale (largest breakpoint):** h1 128px · h2 24px · h3 36px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-stone-200/50`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-8`, `gap-10`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Code / terminal (`code-terminal`)
5. Call to action (`cta`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e7e5e4;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #292524;
  --color-border: #e7e5e4;
  --color-accent: #1e293b;
  --font-display: "Jost", sans-serif;
  --font-body: "Jost", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7e5e4',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#292524',
    line: '#e7e5e4',
    accent: '#1e293b',
  },
  fontFamily: { display: ['Jost'], sans: ['Jost'] },
} }
```

## Do and don't

- **Do:** Set the names in a large dark serif, with the ampersand in pale grey
- **Do:** Use tracked uppercase for the kicker line and the date
- **Do:** Keep the top bar taupe (#78716c) with the confirm button in near-black
- **Don't:** Don't use bright colours; the page stays warm and neutral
- **Don't:** Don't set the names in a sans-serif
- **Don't:** Don't use more than one solid dark button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
