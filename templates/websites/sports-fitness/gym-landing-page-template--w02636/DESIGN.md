# Design system — Gym Landing Page Template

`SN-W02636` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark gym hero with a lime second line. Large uppercase sans-serif headlines sit on two lines, the first in white and the second, BODY & MIND, in lime (#a3e635). A lime primary button and a dark outline button sit beside a short grey subline, and a small outlined status pill sits above the title. Lime stays on the headline phrase and the primary button.

**Mood:** dark, lime-accented, uppercase, direct, athletic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#a3a3a3` · `#262626` · `#171717` · `#0a0a0a` · `#d4d4d4` · `#737373` · `#000000` · `#bef264`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(163,230,53,0.3)]`, `shadow-2xl`, `shadow-[0_0_30px_rgba(163,230,53,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black bg-lime-400 rounded-full hover:bg-lime-300 focus:ring-4 focus:ring-lime-300/20 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Articles (`blog-articles`)
7. Call to action (`cta`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large uppercase sans-serif, with the second line in lime (#a3e635).
- **Do:** Use lime for the primary button and the second headline line only.
- **Do:** Keep the status pill small and outlined above the headline.
- **Don't:** Don't use lime for body copy.
- **Don't:** Don't add a second accent colour in the hero.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
