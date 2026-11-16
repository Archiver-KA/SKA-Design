# Design system — Elegant Wedding Invitation Landing Page Template

`SN-W03592` · events · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

The wedding invitation sits on a pale warm-grey ground, with the names in a large dark serif and the ampersand in a lighter grey. Tracked uppercase navigation and a small dark button sit at the top, and the date is set on a centred line between hairline rules. A countdown in serif numerals and small caps labels completes the first screen. The palette is almost neutral, so type and spacing do the work.

**Mood:** refined, quiet, airy, classic, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e5e4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#292524` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |

Palette by frequency of use: `#292524` · `#a8a29e` · `#e7e5e4` · `#78716c` · `#ffffff` · `#1c1917` · `#57534e` · `#f5f5f4` · `#fafaf9` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Jost
- **Body:** Jost
- **Loaded families:** Cinzel, Jost
- **Scale (largest breakpoint):** h1 128px · h2 24px · h3 30px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="text-white bg-stone-800 px-6 py-2 rounded-sm hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-400/20 transition-all transform hover:-translate-y-0.5 duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

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

- **Do:** Set the names in a large dark serif, with the ampersand in lighter grey
- **Do:** Use hairline rules on either side of the date line
- **Do:** Keep the countdown numerals in serif and their labels in tracked small caps
- **Don't:** Don't add colour; keep the page in neutral greys and near-black
- **Don't:** Don't set the countdown in a heavy weight
- **Don't:** Don't use more than one dark filled button on the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
