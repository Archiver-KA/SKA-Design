# Design system — Dinevo Restaurant Landing Page Template

`SN-W02883` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Stark and high-contrast. A pure black ground (#000000) holds a very large uppercase white sans headline set across many short lines, with a small orange-red kicker (#f05830) above it in Japanese. The orange-red is the only colour on the screen and appears in the nav button, so the layout relies on type scale and empty black space rather than imagery.

**Mood:** stark, high-contrast, bold, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f05830` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f05830` · `#3b82f6` · `#d64520` · `#171717` · `#d1d5db` · `#f3f4f6` · `#9ca3af` · `#9a3412`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Antonio, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 160px · h2 60px · h3 36px · body 20px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(240,88,48,0.5)]`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group bg-[#F05830] hover:bg-[#d64520] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #f05830;
  --color-accent-2: #3b82f6;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
    accent: '#f05830',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large uppercase white sans across short lines
- **Do:** Use the orange-red (#f05830) for the nav button and small kicker lines only
- **Do:** Leave wide black space around the headline and do not fill it with panels
- **Don't:** Don't set the headline in a serif
- **Don't:** Don't use the blue (#3b82f6) in the hero
- **Don't:** Don't add gradients or images behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
