# Design system — Full-Stack Developer Portfolio Template

`SN-W02026` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero (#030712) with a bold white sans headline over three lines, the last phrase fading to grey as a gradient, and a short paragraph that introduces the name. A white pill button leads the actions beside a text-only secondary button, and an indigo dot marks the logo and the availability badge. The look is clean and direct, with the type doing most of the work.

**Mood:** clean, direct, dark, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#818cf8` · `#a3a3a3` · `#3b82f6` · `#e5e5e5` · `#6366f1` · `#60a5fa` · `#0a0a0a` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 20px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-100 text-neutral-950 text-sm font-semibold hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Timeline (`timeline`)
6. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #22d3ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Fade the last headline phrase to grey
- **Do:** Use indigo (#818cf8) for the logo dot and small highlights only
- **Do:** Pair a white filled primary button with a text-only secondary button
- **Don't:** Don't fill large areas with indigo
- **Don't:** Don't add accent colours beside the indigo and the badge blue
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
