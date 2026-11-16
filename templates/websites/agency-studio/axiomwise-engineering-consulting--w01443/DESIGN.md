# Design system — Axiomwise Engineering Consulting

`SN-W01443` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#030305]) with a centred white headline in Inter at large size, its second line in cool grey ([#cbd5e1]). The primary button is solid white beside an outlined dark pill, and a faint radial glow sits behind the hero. The palette is neutral with no hue in the hero, so scale and contrast carry the emphasis.

**Mood:** neutral, serious, dark, measured, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030305` | Page ground |
| Surface | `#030305` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#cbd5e1` · `#000000` · `#3b82f6` · `#64748b` · `#34d399` · `#1e293b` · `#030305` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-inter)
- **Body:** var(--font-inter)
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]`, `shadow-[0_0_15px_rgba(59,130,246,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="hidden sm:flex text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors tracking-tight items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030305;
  --color-surface: #030305;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #10b981;
  --font-display: "var(--font-inter)", sans-serif;
  --font-body: "var(--font-inter)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030305',
    surface: '#030305',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#10b981',
  },
  fontFamily: { display: ['var(--font-inter)'], sans: ['var(--font-inter)'] },
} }
```

## Do and don't

- **Do:** Keep the hero on #030305 with white headline text
- **Do:** Set the second headline line in cool grey (#cbd5e1)
- **Do:** Pair a solid white primary button with an outlined secondary pill
- **Don't:** Don't add a saturated colour to the hero
- **Don't:** Don't left-align the hero, the layout is centred
- **Don't:** Don't use a light ground for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
