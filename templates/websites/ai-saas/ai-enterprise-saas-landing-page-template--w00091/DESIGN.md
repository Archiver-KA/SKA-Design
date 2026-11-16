# Design system — AI Enterprise SaaS Landing Page Template

`SN-W00091` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

AI UK Solutions is a dark, centred enterprise page on a near-black ground (#0a0a0b), with a large Inter headline whose second line is set in a blue gradient (#3b82f6 to a lighter blue). Two solid pill buttons sit under a short subline, and a small outline badge sits above the title. The blue carries the emphasis and the rest of the page stays neutral grey.

**Mood:** dark, sober, enterprise, centred, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0b` | Page ground |
| Surface | `#0f1012` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#60a5fa` · `#64748b` · `#94a3b8` · `#cbd5e1` · `#2563eb` · `#475569` · `#0a0a0b` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-blue-500/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/15 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0b;
  --color-surface: #0f1012;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0b',
    surface: '#0f1012',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Inter, centred, with the key phrase in a blue gradient (#3b82f6)
- **Do:** Use the solid white pill button for the primary action and the outline pill for the second
- **Do:** Keep the rest of the page in neutral greys
- **Don't:** Don't use purple (#a855f7) as an accent; blue is the only accent
- **Don't:** Don't left-align the hero; the layout is centred
- **Don't:** Don't add a second gradient to the same section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
