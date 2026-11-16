# Design system — Formare Community Management Landing Page Template

`SN-W03605` · events · light mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

The community management page is a clean SaaS landing page on white (#ffffff). Its headline is a heavy near-black sans, centred, with a bold grey subhead beneath. A solid indigo (#4f46e5) pill carries the primary action beside an outline pill, and a small indigo-tinted tag sits above the headline. Indigo is the only accent, and the sections are plain, with generous spacing.

**Mood:** clear, saas, confident, practical, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#4f46e5` · `#e5e5e5` · `#525252` · `#ffffff` · `#f5f5f5` · `#d4d4d4` · `#e0e7ff` · `#818cf8` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-x-8`, `gap-8`

**Primary button**

```html
<a class="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl px-8 text-lg font-medium transition-colors shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy near-black sans, centred
- **Do:** Use indigo (#4f46e5) for the primary button and the top tag only
- **Do:** Pair a solid indigo pill with an outline pill for the hero actions
- **Don't:** Don't use the pale indigo tint as a page background
- **Don't:** Don't add a second brand colour
- **Don't:** Don't set the subhead in a heavy weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
