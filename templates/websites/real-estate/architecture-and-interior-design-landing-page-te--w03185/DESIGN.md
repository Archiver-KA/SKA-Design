# Design system — Architecture & Interior Design Landing Page Template

`SN-W03185` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, near-black brown architecture page with a small ring cursor at the centre as the only motion cue. Small white navigation and a pill-shaped contact button sit at the top, and project meta sits in the lower corners in small uppercase type. The palette is warm dark neutrals and white, and the page relies on negative space rather than imagery in the first screen.

**Mood:** dark, minimal, architectural, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#d6d3d1` · `#e7e5e4` · `#000000` · `#78716c` · `#57534e` · `#f5f4f0` · `#a8a29e` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Oswald, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 128px · h3 48px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1800px]`, `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-12`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-stone-900 px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-stone-200 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. About (`about`)
3. Case studies (`case-studies`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Team (`team`)
7. Feature grid (`features`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #d6d3d1;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#d6d3d1',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Use small uppercase labels for project meta in the bottom corners
- **Do:** Keep navigation in white on the dark brown ground (#1c1917)
- **Do:** Use white pill buttons for the primary action
- **Don't:** Don't add colour accents; the palette is brown-black and white
- **Don't:** Don't fill the empty centre with busy content; the negative space is deliberate
- **Don't:** Don't use rounded cards for project information

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
