# Design system — Premium Creator Funnel Landing Page Template

`SN-W00639` · ai-saas · dark mode · Sinera Atlas theme `circuit`

## Direction

A dark funnel page with a blue-violet gradient button as its one strong colour, set against a charcoal ground with a soft vignette. Headlines are bold, centred and white in a system sans, and small grey qualifier lines sit under the buttons. Its restraint makes the blue read as the single call to action.

**Mood:** premium, dark, restrained, centred, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0c` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#5b7fff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a5b4fc` · `#5b7fff` · `#a1a1aa` · `#000000` · `#9ca3af` · `#8b8b92` · `#e5e7eb` · `#020617` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.32em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_40px_rgba(91,127,255,0.55)]`, `shadow-[0_0_60px_rgba(91,127,255,0.75)]`, `shadow-[0_30px_120px_rgba(0,0,0,0.75)]`
- **Content width:** `max-w-[80rem]`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5B7FFF] to-[#A5B4FC] text-sm font-medium tracking-[0.18em] uppercase text-white px-8 py-3 shadow-[0_0_40px_rgba(91,127,255,0.55)] hover:shadow-[0_0_60px_rgba(91,127,255,0.75)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0b0c;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #5b7fff;
  --color-accent-2: #ef4444;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0c',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#5b7fff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the blue (#5b7fff) gradient on the primary button only
- **Do:** Set centred, bold white headlines in the system sans on a charcoal ground
- **Do:** Keep qualifier lines small and grey under the buttons
- **Don't:** Don't use the light indigo (#a5b4fc) for large text; it marks small details only
- **Don't:** Don't add more colour blocks; the page is charcoal, white and blue
- **Don't:** Don't make the secondary button blue; it stays dark grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
