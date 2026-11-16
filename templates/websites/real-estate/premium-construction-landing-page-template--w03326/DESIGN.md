# Design system — Premium Construction Landing Page Template

`SN-W03326` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `pt-br`

## Direction

A near-black hero with a bold white sans headline over three lines, where 'previsibilidade' is set in muted taupe (#a8a29e) to mark the key idea. A filled taupe button with dark text leads the actions, with an outlined button beside it, and large figures sit below in white. The light header bar above the hero makes the dark section read as a deliberate break.

**Mood:** sober, engineered, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#a8a29e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f5f5f4` · `#78716c` · `#a8a29e` · `#1c1917` · `#fafaf9` · `#57534e` · `#e7e5e4` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-premium-beige transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. FAQ (`faq`)
6. Schedule (`schedule-agenda`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #fafaf9;
  --color-text: #f5f5f4;
  --color-muted: #a8a29e;
  --color-border: #f5f5f4;
  --color-accent: #a8a29e;
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
    surface: '#fafaf9',
    ink: '#f5f5f4',
    muted: '#a8a29e',
    line: '#f5f5f4',
    accent: '#a8a29e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in taupe (#a8a29e) at the same size as the rest.
- **Do:** Use the taupe filled button with dark text for the primary action.
- **Do:** Keep figures large and white, with small labels beneath.
- **Don't:** Don't add a bright accent colour; the palette stays taupe, black and white.
- **Don't:** Don't set body copy in pure white; it is light grey.
- **Don't:** Don't use the light header bar on dark sections.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
