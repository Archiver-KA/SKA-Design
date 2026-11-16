# Design system — Heavy Lifting Services Landing Page Template

`SN-W03929` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page where a two-line uppercase headline sets white against a golden yellow second line (#eab308), giving the page an industrial, machinery feel. A solid yellow button leads the actions, with a dark outlined button beside it. On the right, a dark telemetry panel with thin progress bars and green status tags shows live machine data in small uppercase labels. The look is focused and utilitarian.

**Mood:** industrial, focused, utilitarian, bold, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#000000` · `#a1a1aa` · `#71717a` · `#09090b` · `#18181b` · `#52525b` · `#27272a` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-yellow-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-sm text-sm font-medium tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Listings (`listings`)
7. Logo cloud (`logo-cloud`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase, with the second line in yellow (#eab308).
- **Do:** Use the solid yellow button for the primary action and a dark outlined button for the secondary.
- **Do:** Frame data panels as dark cards with small uppercase labels and thin progress bars.
- **Don't:** Don't use yellow for body copy; it is for the headline and the primary button.
- **Don't:** Don't use bright green beyond the status tags and progress bars.
- **Don't:** Don't set data panels on light backgrounds.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
