# Design system — Zoon Society | Creative Collective Landing Page Template

`SN-W02306` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a large centred serif wordmark in white capitals, a short quote beneath it in light grey, and dimmer grey body copy. Two pill buttons sit at the centre: a solid white primary and a dark outlined secondary. The serif, the centred symmetry and the dark vignette give the page a calm, ceremonial mood.

**Mood:** ceremonial, dark, calm, symmetrical, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050507` | Page ground |
| Surface | `#0a0a0c` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#fef3c7` · `#737373` · `#d4d4d4` · `#e5e5e5` · `#525252` · `#050507` · `#ffffff` · `#f5f5f5` · `#404040` · `#0a0a0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 12px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(251,239,213,0.1)]`, `shadow-[0_0_30px_rgba(251,239,213,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="text-xs tracking-widest uppercase text-amber-100/70 border border-amber-100/20 px-5 py-2 rounded-full hover:bg-amber-100/10 hover:text-amber-50 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050507;
  --color-surface: #0a0a0c;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050507',
    surface: '#0a0a0c',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero wordmark in large white serif capitals, centred
- **Do:** Use solid white for the primary pill and a dark outline for the secondary
- **Do:** Keep body copy in dimmer grey beneath the quote
- **Don't:** Don't add a yellow accent to the hero
- **Don't:** Don't left-align the hero block
- **Don't:** Don't place bright imagery behind the hero text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
