# Design system — Compass Sales Advisory Landing Page Template

`SN-W00291` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, nearly black page with a faint green cast, where the hero sets a large white headline and one italic line in mint [#00ffc4]. The mint is the only accent and appears in the italic phrase and the primary button, while the scrolling word band behind the hero adds a quiet texture. Inter at large sizes carries the look, and the page reads as confident and corporate.

**Mood:** dark, confident, corporate, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ffc4` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00ffc4` · `#171717` · `#d4d4d4` · `#a3a3a3` · `#000000` · `#059669` · `#737373` · `#525252` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 48px · h2 60px · h3 30px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#00ffc4]/10 hover:bg-[#00ffc4]/20 text-[#00ffc4] border border-[#00ffc4]/30 px-4 py-1 rounded-full text-xs font-semibold transition-colors flex items-center gap-1 group">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Announcement bar (`announcement-bar`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Stats band (`stats`)
6. About (`about`)
7. Services (`services`)
8. Process / steps (`how-it-works`)
9. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #00ffc4;
  --color-accent-2: #ef4444;
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
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#00ffc4',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter with one italic phrase in mint (#00ffc4)
- **Do:** Use the mint (#00ffc4) only for the italic phrase and the primary button
- **Do:** Keep the scrolling word band low in contrast behind the hero
- **Don't:** Don't use the mint for body text or borders
- **Don't:** Don't use the red (#ef4444) in the hero
- **Don't:** Don't brighten the background to a flat grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
