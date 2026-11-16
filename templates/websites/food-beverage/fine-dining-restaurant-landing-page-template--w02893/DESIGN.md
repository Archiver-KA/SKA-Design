# Design system — Fine Dining Restaurant Landing Page Template

`SN-W02893` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cinematic dark page built around one oversized serif wordmark in a gold gradient, with the Gurmukhi script stacked beneath it. The background is near-black with a faint warm glow, and the body copy is small and light grey, centred under the title. It feels ceremonial: gold is the single accent, reserved for the wordmark and the outlined primary button, and the rest of the page is kept dim.

**Mood:** ceremonial, dramatic, dark, gilded, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#064e3b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#a3a3a3` · `#000000` · `#fde68a` · `#737373` · `#fbbf24` · `#0a0a0a` · `#fef3c7` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-black/80`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-white/5 hover:bg-amber-900/20 border border-amber-500/30 text-amber-100 px-6 py-2 text-xs uppercase tracking-widest transition-all hover:scale-105 rounded-sm backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Testimonials (`testimonials`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #064e3b;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#064e3b',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a serif with a gold gradient fill, centred at very large size.
- **Do:** Use gold (#f59e0b) only for the wordmark and the outlined primary button.
- **Do:** Keep body copy small and light grey, centred beneath the title.
- **Don't:** Don't use gold for body text or large areas; it is reserved for the title and one button.
- **Don't:** Don't add a light section; the page is dark throughout.
- **Don't:** Don't drop the second-script title line; the script is part of the lockup.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
