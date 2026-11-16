# Design system — MI Landing Page

`SN-W02113` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A clean, grid-backed home-buying page on a very pale ground [#fafafa], with a heavy black sans headline and a lighter grey subline beneath it. The primary button is solid black, the secondary is an outlined pill with a small document icon, and a bordered row of large figures runs across the lower screen. The only colour is a tiny green status dot, so the structure comes from the grid and the type.

**Mood:** clean, structured, data-led, neutral, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#d4d4d4` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#e5e5e5` · `#737373` · `#171717` · `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#10b981` · `#fafafa` · `#059669` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 10px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-[1px]` (1px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full bg-white border border-neutral-200 text-neutral-900 text-xs font-semibold tracking-wide py-3 rounded-sm hover:bg-neutral-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Newsletter signup (`newsletter`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #d4d4d4;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #fbbf24;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#d4d4d4',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black sans, with the subline in a lighter grey weight.
- **Do:** Use solid black for the primary button and outlined grey for the secondary.
- **Do:** Lay out proof points as a bordered row of three or four large figures.
- **Don't:** Don't add colour beyond the status dot; the page is black and grey.
- **Don't:** Don't remove the faint grid background; it carries the structure.
- **Don't:** Don't put the figures in shadowed cards; the row uses borders only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
