# Design system — Waterfront Pizza Restaurant Landing Page Template

`SN-W03008` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Heavy, condensed, uppercase headlines at very large size dominate a light page, with the place name picked out in a warm red-orange. A bright interior photo carries the mood, and the sections below sit on a light grey-beige ground with thin dividers. A strip of four short labels under the hero sets the tone for the rest of the page.

**Mood:** bold, bright, urban, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#f5f5f4` · `#292524` · `#78716c` · `#57534e` · `#e7e5e4` · `#fafaf9` · `#dcfce7` · `#166534`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Geist
- **Loaded families:** Geist, Oswald, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-brand-500 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brand-600 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-brand-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #4ade80;
  --font-display: "Oswald", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#4ade80',
  },
  fontFamily: { display: ['Oswald'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in the condensed bold display face, uppercase
- **Do:** Use the red-orange only on one headline phrase and the primary button
- **Do:** Lead the hero with a full-width interior photograph, not an illustration
- **Don't:** Don't add green; the page uses red-orange and neutrals only.
- **Don't:** Don't set body copy in the display face; body text uses Geist
- **Don't:** Don't add gradient fills to buttons; they are flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
