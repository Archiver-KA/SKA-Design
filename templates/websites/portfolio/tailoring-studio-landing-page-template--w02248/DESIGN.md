# Design system — Tailoring Studio Landing Page Template

`SN-W02248` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

An editorial tailoring page on a warm off-white ground (#fafaf9), with a large dark-charcoal serif headline. One word in each headline is set in a rose italic, which is the page's signature and appears in the hero. The layout uses a black pill button and a framed sketch image panel with a small card overlaid on its corner, so the page reads as a craft studio rather than a retail shop.

**Mood:** editorial, craft, refined, warm, tactile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#fafaf9` · `#f43f5e` · `#fb7185` · `#f5f5f4` · `#a8a29e` · `#78716c` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-main)
- **Body:** var(--font-main)
- **Loaded families:** Manrope, Playfair Display, Instrument Serif, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[4px]` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="flex-1 py-3 bg-stone-900 text-stone-50 text-[11px] font-semibold uppercase tracking-widest hover:bg-rose-500 transition-colors rounded-sm text-center">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #fb7185;
  --font-display: "var(--font-main)", sans-serif;
  --font-body: "var(--font-main)", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#fb7185',
  },
  fontFamily: { display: ['var(--font-main)'], sans: ['var(--font-main)'] },
} }
```

## Do and don't

- **Do:** Set one headline word in the rose italic (#fb7185) per section, no more.
- **Do:** Use the charcoal (#1c1917) for headlines and the black pill for the main action.
- **Do:** Keep the ground at #fafaf9 with white cards for content.
- **Don't:** Don't use rose for body text or links; it is reserved for the italic accent.
- **Don't:** Don't introduce a second serif for headings; the page uses one family.
- **Don't:** Don't use a dark hero background; this style is light throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
