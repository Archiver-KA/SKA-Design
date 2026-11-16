# Design system — Discord Security Landing Page Template

`SN-W00350` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, Discord-styled security page on near-black with a serif headline. The first words are white serif and the first word of the second line is grey italic serif, a serif and sans mix that is the page's signature. The closing word takes a blue-to-lavender gradient, buttons are a white solid beside a dark outlined ghost, and a frosted navigation bar floats above the hero.

**Mood:** secure, polished, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#0a0b10` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#5865f2` | Primary action and highlights |
| Second accent | `#5865f2` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0a0b10` · `#4ade80` · `#020204` · `#5865f2` · `#c084fc` · `#ef4444` · `#eab308` · `#22c55e` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_#5865F2]`, `shadow-brand-green/10`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-brand-dark px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs font-medium hover:bg-brand-green hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Logo cloud (`logo-cloud`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Stats band (`stats`)
6. Marquee (`marquee`)
7. Bento grid (`bento-grid`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #0a0b10;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #5865f2;
  --color-accent-2: #5865f2;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020204',
    surface: '#0a0b10',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#5865f2',
    accent2: '#5865f2',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display words in Instrument Serif, with the closing word in the blue-lavender gradient
- **Do:** Keep the navigation as a frosted bar floating above the hero
- **Do:** Use the Discord blue (#5865f2) only for the logo dot and the gradient
- **Don't:** Don't use the green from the palette as an accent
- **Don't:** Don't set the whole headline in italic
- **Don't:** Don't use white buttons with coloured text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
