# Design system — Running Event Landing Page Template

`SN-W03647` · events · dark mode · Sinera Atlas theme `workshop` · language `uk`

## Direction

A bold, athletic race hero on a deep emerald ground, with a heavy uppercase sans-serif headline in white and the year set in a pale lime gradient. Event details sit in small uppercase rows beneath it, and a countdown of large numerals with small labels anchors the bottom of the screen. Lime is the single accent, used for the year, the register button and the countdown seconds.

**Mood:** athletic, bold, energetic, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#022c22` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#022c22` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#064e3b` | Supporting highlights |

Palette by frequency of use: `#022c22` · `#a3e635` · `#ffffff` · `#e7e5e4` · `#fafaf9` · `#a8a29e` · `#65a30d` · `#78716c` · `#f5f5f4` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Unbounded
- **Body:** Manrope
- **Loaded families:** Manrope, Unbounded
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 72px · body 14px
- **Weights in use:** bold, semibold, black
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-lime-400/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-lime-400 hover:bg-lime-300 text-emerald-950 text-xs md:text-sm font-bold py-3 px-6 rounded-none uppercase tracking-tight transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-lime-400/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Map / location (`map-location`)
7. Services (`services`)
8. Logo cloud (`logo-cloud`)
9. Gallery / portfolio (`gallery-portfolio`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #022c22;
  --color-surface: #f5f5f4;
  --color-text: #ffffff;
  --color-muted: #022c22;
  --color-border: #e7e5e4;
  --color-accent: #a3e635;
  --color-accent-2: #064e3b;
  --font-display: "Unbounded", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#022c22',
    surface: '#f5f5f4',
    ink: '#ffffff',
    muted: '#022c22',
    line: '#e7e5e4',
    accent: '#a3e635',
    accent2: '#064e3b',
  },
  fontFamily: { display: ['Unbounded'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans-serif, with the year in lime (#a3e635)
- **Do:** Use lime only for the year, the primary button and the countdown seconds
- **Do:** Keep event details as small uppercase rows below the headline
- **Don't:** Don't use lime as a background colour for sections
- **Don't:** Don't set countdown labels larger than their numbers
- **Don't:** Don't place light-grey section grounds under the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
