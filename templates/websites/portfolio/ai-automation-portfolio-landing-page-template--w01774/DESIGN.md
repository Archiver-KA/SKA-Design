# Design system — AI Automation Portfolio Landing Page Template

`SN-W01774` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black, monochrome page with a large centred headline in white over a grey second line, sized to dominate the hero. A small green status dot sits in a pill above it, and two buttons sit below: a solid white primary and a dark secondary. The restraint is strong, so the green dot is the only colour on the screen.

**Mood:** monochrome, centred, restrained, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#a3a3a3` · `#404040` · `#171717` · `#737373` · `#000000` · `#525252` · `#d4d4d4` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-white/20`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Case studies (`case-studies`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #ffffff;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#ffffff',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the palette to black, white and grey, with white as the accent.
- **Do:** Set the headline in Inter, large and centred, with the second line in grey.
- **Do:** Use the green dot only for live-status signals.
- **Don't:** Don't add blue or purple highlights.
- **Don't:** Don't make the primary button an outline; it is a solid white fill.
- **Don't:** Don't use a light background behind the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
