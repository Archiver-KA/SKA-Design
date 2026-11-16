# Design system — Arcade Society

`SN-W00210` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark esports hero on near-black (#050505) with a bold uppercase headline in three lines. The last line is set in a violet gradient that runs from light to deep, so the colour sits inside the type rather than on a block. The two buttons are a filled violet primary and a dark secondary, and a small system-time clock adds a live feel in the corner.

**Mood:** dark, energetic, competitive, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#ef4444` · `#34d399` · `#facc15` · `#3b82f6` · `#050505` · `#f97316` · `#333333` · `#7c3aed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Rajdhani
- **Body:** Outfit
- **Loaded families:** Outfit, Rajdhani
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-brand/25`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-glow hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Services (`services`)
6. Articles (`blog-articles`)
7. Marquee (`marquee`)
8. About (`about`)
9. Integrations (`integrations`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #3b82f6;
  --font-display: "Rajdhani", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Rajdhani'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase with the last line in a violet gradient
- **Do:** Use the filled violet button for the primary action only
- **Do:** Keep the secondary button dark with a thin outline
- **Don't:** Don't add a second colour gradient to the headline
- **Don't:** Don't use light backgrounds behind the headline
- **Don't:** Don't use the red from the palette as a hero accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
