# Design system — AzubiPro Education Landing Page Template

`SN-W03415` · education · dark mode · Sinera Atlas theme `calm` · language `de`

## Direction

A dark, high-contrast education page built on near-black [#000000], with white headlines and a single orange [#f97316] accent on the second headline line. A glass-style navigation pill and rounded pill buttons sit above large Inter display type, and a faint orange glow behind the hero gives the page its energy.

**Mood:** dark, bold, focused, glossy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a1a1aa` · `#18181b` · `#9ca3af` · `#000000` · `#d4d4d8` · `#71717a` · `#27272a` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Manrope, Newsreader, Google Sans Flex, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full py-3 rounded-full bg-white/5 hover:bg-orange-500 hover:text-white border border-white/10 transition-all font-medium text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Inter at display size, with the second line in orange (#f97316)
- **Do:** Keep primary calls to action as rounded-full pills in orange
- **Do:** Place content on dark surfaces (#18181b) with light grey supporting text (#a1a1aa)
- **Don't:** Don't use light backgrounds for the hero or feature sections
- **Don't:** Don't use more than one accent colour in a single section
- **Don't:** Don't use square corners on buttons or cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
