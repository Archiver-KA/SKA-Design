# Design system — XCYTE

`SN-W02304` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a large bold white sans headline, its second word, REALIDADE, filled with a silver gradient. A small red-dot pill labels the section, and a thin amber announcement bar sits above the nav. Red (#ef4444) is kept to small markers, so the hero reads as stark and cinematic.

**Mood:** cinematic, stark, bold, dramatic, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#000000` · `#737373` · `#a3a3a3` · `#0a0a0a` · `#d4d4d4` · `#171717` · `#dc2626` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="w-full py-5 bg-white text-black font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #f59e0b;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
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
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans with a silver gradient on the key word
- **Do:** Keep red (#ef4444) to the label dot and small markers
- **Do:** Use the amber (#f59e0b) only for the announcement bar
- **Don't:** Don't use the oxblood (#7f1d1d) as the page background; the ground is black
- **Don't:** Don't set the headline in red
- **Don't:** Don't add a second gradient colour to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
