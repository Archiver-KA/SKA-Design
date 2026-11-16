# Design system — Cinema Archive Interface Landing Page Template

`SN-W03676` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal dark archive interface on near-black, with an elegant serif title set large and white in the lower third. Red is used sparingly, on one word in the header and on the small subtitle marker, which ties the brand to the film theme. Filter pills in small uppercase sit at the top, with a white pill marking the active decade.

**Mood:** archival, cinematic, restrained, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#27272a` · `#09090b` · `#18181b` · `#a1a1aa` · `#000000` · `#f4f4f5` · `#dc2626` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 14px · h2 36px · h3 30px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-4 py-1.5 text-xs bg-zinc-100 text-zinc-950 font-medium rounded shadow-sm transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set titles in a white serif, large, in the lower part of the screen
- **Do:** Use the red (#dc2626) for a single word in the header and for small markers only
- **Do:** Keep filter pills small, uppercase, with one white active state
- **Don't:** Don't use red for buttons or large fills
- **Don't:** Don't add background imagery that competes with the title
- **Don't:** Don't set titles in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
