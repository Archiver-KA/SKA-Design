# Design system — Architecture Studio Landing Page Template

`SN-W03197` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

A stark black page where the headline is set in heavy uppercase, with words alternating between grey and white, and the final line in lime green (#ccff00) as the only colour. Navigation is small and white, and a short grey paragraph sits on the right. The contrast between black, grey and lime carries the brutalist tone.

**Mood:** brutal, high-contrast, bold, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#ccff00` · `#171717` · `#a3a3a3` · `#737373` · `#262626` · `#ffffff` · `#525252` · `#000000` · `#404040` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, &quot
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-8`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="group flex items-center gap-3 text-sm font-semibold tracking-wide uppercase border border-neutral-700 hover:border-[#ccff00] px-6 py-4 rounded-full transition-all duration-300 hover:bg-[#ccff00] hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #ccff00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
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
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#ccff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#ccff00) only for the final headline line and one call to action
- **Do:** Set headlines in heavy uppercase sans-serif, with words alternating grey and white
- **Do:** Keep the page on near-black (#050505) with grey body copy
- **Don't:** Don't use lime for body text or large fills
- **Don't:** Don't introduce a second bright colour
- **Don't:** Don't soften the headlines with a serif or italic

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
