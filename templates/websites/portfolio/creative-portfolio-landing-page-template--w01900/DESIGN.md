# Design system — Creative Portfolio Landing Page Template

`SN-W01900` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a tight white sans headline stacked over four lines, where the last line is set in lighter grey. Dark pill buttons, one outlined and one plain, sit under the headline, and a cluster of floating dark cards with thin borders fills the right side. Depth comes from layered card edges rather than colour, so the page reads as sleek and technical.

**Mood:** sleek, technical, dark, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e0e11` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#d4d4d8` · `#71717a` · `#e4e4e7` · `#34d399` · `#0e0e11` · `#52525b` · `#18181b` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_20px_40px_rgba(0,0,0,0.3)]`, `shadow-2xl`, `shadow-[0_0_10px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-2xl`, `max-w-[280px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-base font-normal transition-colors px-4 py-2 backdrop-blur-sm border rounded-full text-zinc-300 hover:text-white bg-black/50 border-zinc-700/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Integrations (`integrations`)
7. Process / steps (`how-it-works`)
8. Case studies (`case-studies`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0e0e11;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e0e11',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a tight white sans, with the final line in grey.
- **Do:** Keep buttons as dark pills, one outlined and one plain.
- **Do:** Layer the floating cards with thin borders rather than colour.
- **Don't:** Don't add bright fills to the cards; they stay dark with light edges.
- **Don't:** Don't set the page on a white ground; the look depends on the dark field.
- **Don't:** Don't introduce a colour accent; the page has none.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
