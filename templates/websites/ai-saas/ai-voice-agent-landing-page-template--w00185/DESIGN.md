# Design system — AI Voice Agent Landing Page Template

`SN-W00185` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark product page on deep navy (#030610) with a white headline whose second line is set in glowing cyan-blue (#06b6d4). A filled cyan primary button with white text sits beside a dark outlined secondary, and three small outlined chips list trust points below the buttons. A dark live-transcript panel sits at the bottom of the hero, with monospace type for the data.

**Mood:** dark, technical, glowing, data-driven

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030610` | Page ground |
| Surface | `#0b1021` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#14532d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#94a3b8` · `#cbd5e1` · `#22d3ee` · `#2563eb` · `#334155` · `#1e293b` · `#0b1021` · `#a5f3fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 20px · body 13px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_rgba(6,182,212,0.4)]`, `shadow-[0_0_20px_rgba(6,182,212,0.2)]`, `shadow-[0_0_5px_rgba(6,182,212,0.2)]`
- **Content width:** `max-w-5xl`, `max-w-7xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030610;
  --color-surface: #0b1021;
  --color-text: #cbd5e1;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #14532d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030610',
    surface: '#0b1021',
    ink: '#cbd5e1',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#14532d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in cyan-blue (#06b6d4) with a soft glow
- **Do:** Use the filled cyan primary button with white text, and a dark outlined secondary
- **Do:** Show product data in monospace inside dark panels with thin borders
- **Don't:** Don't use cyan for body copy; it marks the headline phrase and the buttons
- **Don't:** Don't put a white background behind the hero; the ground is deep navy
- **Don't:** Don't remove the small outlined chips under the buttons; they carry the trust cues

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
