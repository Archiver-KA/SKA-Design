# Design system — Creative Agency Landing Page Template

`SN-W01478` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `it`

## Direction

A dark hero on near-black (#050505) where a bold uppercase sans stacks three lines, and the last line is set in red (#e81d25) as the only colour in the composition. A thin red rule and a small red-tinted label repeat the accent at small size. A black-and-white portrait sits in a framed panel on the right, so the photograph carries the mood while the red stays on the type.

**Mood:** bold, dramatic, editorial, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e81d25` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e81d25` · `#9ca3af` · `#000000` · `#6b7280` · `#050505` · `#111111` · `#1e3a8a` · `#d1d5db` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full py-4 bg-[#e81d25] text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Marquee (`marquee`)
6. Feature grid (`features`)
7. About (`about`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e81d25;
  --color-accent-2: #1e3a8a;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#e81d25',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase sans and colour the final line in red (#e81d25).
- **Do:** Repeat the red only in small doses: the label, the thin rule and the highlighted line.
- **Do:** Keep portraits desaturated and inside a framed panel beside the copy.
- **Don't:** Don't use red for buttons; the primary button is white on the dark ground.
- **Don't:** Don't add a blue accent.
- **Don't:** Don't place red behind body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
