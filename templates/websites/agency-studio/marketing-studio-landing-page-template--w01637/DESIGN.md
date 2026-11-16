# Design system — Marketing Studio Landing Page Template

`SN-W01637` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark portfolio-style intro: a left rail of plain text links and a very large heavy black headline on a white ground. The page is essentially black and white, with the primary action as a solid black pill. Depth and hierarchy come from type scale and the rail, not from colour, which keeps the page plain and typographic.

**Mood:** stark, typographic, monochrome, direct, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#1e293b` · `#0f172a` · `#fafafa` · `#475569` · `#16a34a` · `#020617` · `#334155` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 64px · h2 36px · body 20px
- **Weights in use:** semibold, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[24px]` (24px), `rounded-[28px]` (28px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[620px]`, `max-w-[800px]`
- **Common gaps:** `gap-8`, `gap-x-8`, `gap-y-8`

**Primary button**

```html
<a class="bg-black hover:bg-slate-900 text-white font-medium text-lg px-8 py-4 rounded-xl transition-all shadow-sm mb-12 lg:mb-24 w-full max-w-[280px] sm:max-w-none sm:w-fit flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Feature grid (`features`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy Inter in near-black (#0f172a) at display size
- **Do:** Keep the primary button solid black with white text and a full pill radius
- **Do:** Use a narrow left column of plain text links as the site navigation
- **Don't:** Don't add a second accent colour; the page has none
- **Don't:** Don't put the headline in a light weight; the design relies on weight contrast
- **Don't:** Don't use the Upwork review badge style as a pattern for other sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
