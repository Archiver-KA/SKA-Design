# Design system — Automotive Service Landing Page Template

`SN-W03831` · business-services · dark mode · Sinera Atlas theme `route` · language `pl`

## Direction

A black hero with large, heavy uppercase headlines stacked on three lines: white for the first two and a grey fade on the last word. A warm gold button (gold in words, no hex in the palette) sits beside an outline button, and a small gold label sits above the headline. The contrast is strong and sculptural, and the gold is the only colour on the page.

**Mood:** dark, sculptural, luxurious, heavy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#171717` · `#737373` · `#000000` · `#262626` · `#d4d4d4` · `#0a0a0a` · `#525252` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="relative z-10 px-6 py-2 bg-white text-black font-medium text-sm rounded shadow-lg hover:bg-brand-gold transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. FAQ (`faq`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Oswald'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase, with the last word in a grey fade.
- **Do:** Use the gold only for the primary button and the small label.
- **Do:** Keep the hero on near-black with copy in light grey.
- **Don't:** Don't use gold for headline text.
- **Don't:** Don't put the outline button on a light background.
- **Don't:** Don't place photographs behind the headline area.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
