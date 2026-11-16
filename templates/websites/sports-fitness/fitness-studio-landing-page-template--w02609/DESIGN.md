# Design system — Fitness Studio Landing Page Template

`SN-W02609` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark private-training studio page on a near-black ground (#0a0a0a) with white headlines and a lime (#84cc16) call to action. The hero uses a dimmed gym photograph, a grey subline and two buttons, one solid lime and one dark outline. Lime is the only colour, so the page reads as black, white and lime, with restraint in the rest of the layout.

**Mood:** dark, athletic, lime-accented, restrained, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#84cc16` · `#a3e635` · `#737373` · `#171717` · `#0a0a0a` · `#000000` · `#262626` · `#a3a3a3` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-lime-500/20`, `shadow-[0_0_20px_rgba(163,230,53,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black text-sm font-medium py-2 px-4 rounded hover:bg-neutral-200 transition-all reveal active delay-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Stats band (`stats`)
6. Timeline (`timeline`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #84cc16;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
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
    accent: '#84cc16',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#84cc16) for the primary button and one highlight per section.
- **Do:** Set headlines in white Inter with a second line in grey for contrast.
- **Do:** Keep the hero photograph dimmed so the headline stays readable.
- **Don't:** Don't use lime for body text or long links.
- **Don't:** Don't add a light section; the page stays dark.
- **Don't:** Don't place the red (#ef4444) accent next to the lime.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
