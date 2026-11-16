# Design system — AI Website Audit Landing Page Template

`SN-W00190` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-black page with a bold white sans-serif headline, and its second line set in a light italic with a warm orange-to-peach gradient. The primary button is a saturated red-orange (#ff3d00) filled pill, and a small red-orange tag sits above the headline. The nav is a dark rounded bar, and a dark input field sits beside the button.

**Mood:** bold, dark, urgent, warm-accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff3d00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#333333` · `#ff3d00` · `#f97316` · `#fed7aa` · `#1a1a1a` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Inter
- **Loaded families:** Inter, Syne
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,61,0,0.3)]`, `shadow-inner`, `shadow-[0_0_30px_rgba(255,61,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-accent-orange hover:bg-white text-white hover:text-accent-orange text-xs font-semibold px-5 py-2.5 rounded-full transition-all border border-accent-orange/20 shadow-[0_0_20px_rgba(255,61,0,0.3)] group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Benefits (`benefits`)
5. Bento grid (`bento-grid`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff3d00;
  --font-display: "Syne", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff3d00',
  },
  fontFamily: { display: ['Syne'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the red-orange (#ff3d00) for the primary button and the status tag only
- **Do:** Set the headline in bold white sans-serif, with the second line in italic gradient
- **Do:** Keep the input field dark with a thin border beside the primary button
- **Don't:** Don't colour body copy orange; it stays grey
- **Don't:** Don't use a light background; the hero is near-black
- **Don't:** Don't fill the nav bar with the accent; it stays a dark rounded bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
