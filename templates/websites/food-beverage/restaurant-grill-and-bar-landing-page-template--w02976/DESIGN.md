# Design system — Restaurant Grill & Bar Landing Page Template

`SN-W02976` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A dark Spanish grill page on a near-black ground (#0c0a09) with a two-tone headline: the first word in white decorative wood-type capitals and the second in amber (#f59e0b). The primary button is a burnt orange (#b45309) fill beside a dark outlined secondary, and the amber highlight does most of the colour work.

**Mood:** rustic, bold, dark, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#292524` · `#ffffff` · `#0c0a09` · `#f59e0b` · `#a8a29e` · `#b45309` · `#78350f` · `#44403c` · `#1c1917` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Rye
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-black/40`, `shadow-amber-900/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-medium bg-amber-950/30 hover:bg-amber-900/40 border border-amber-900/50 px-5 py-2 rounded transition-all text-amber-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Menu list (`menu-list`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #0c0a09;
  --color-text: #f5f5f5;
  --color-muted: #a8a29e;
  --color-border: #292524;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#0c0a09',
    ink: '#f5f5f5',
    muted: '#a8a29e',
    line: '#292524',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#f59e0b) for the second word of each headline only.
- **Do:** Keep the primary button in burnt orange (#b45309) with white text.
- **Do:** Set headlines in capitals in the decorative display face, not in body type.
- **Don't:** Don't set the page ground in orange; it stays near-black.
- **Don't:** Don't use the amber for body text or icons.
- **Don't:** Don't use grey copy darker than the muted tone on the black ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
