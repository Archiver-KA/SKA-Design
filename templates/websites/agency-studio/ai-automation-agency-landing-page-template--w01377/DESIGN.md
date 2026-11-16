# Design system — AI Automation Agency Landing Page Template

`SN-W01377` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a centred headline in Inter, where the first line is white and the second is a fading grey gradient on the words intelligent automation. Faint dots scatter across the background behind the hero. A white primary button sits beside a dark outlined secondary, so the page is monochrome and the grey does the emphasis.

**Mood:** monochrome, calm, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#94a3b8` · `#000000` · `#334155` · `#050505` · `#0a0a0a` · `#475569` · `#cbd5e1` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm'`, `shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]`, `shadow-[0_0_40px_-20px_rgba(59,130,246,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="text-white text-xs font-medium border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Stats band (`stats`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Alpine.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white Inter, with the second line in a faded grey gradient.
- **Do:** Keep the primary button white and the secondary dark and outlined.
- **Do:** Keep the background dots faint and sparse behind the hero.
- **Don't:** Don't add a saturated accent colour to the hero.
- **Don't:** Don't brighten the grey gradient to white; it stays muted.
- **Don't:** Don't crowd the hero with extra imagery.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
