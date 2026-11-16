# Design system — Nova Chat Team Messaging Landing Page Template

`SN-W00599` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark messaging landing page on a near-black navy ground (#0a0a12) with a white sans headline and a solid blue-indigo primary button. A purple glow rises from the bottom of the hero, and a glass-style chat panel with a neon edge sits below the fold. The palette is cool and restrained, and the single saturated button is the primary action on the screen.

**Mood:** dark, cool, restrained, glowing, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a12` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d8` · `#cbd5e1` · `#34d399` · `#a1a1aa` · `#8b5cf6` · `#94a3b8` · `#4f46e5` · `#e2e8f0` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-violet-900/25`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 px-3 py-2 text-xs font-medium text-white hover:opacity-95 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a12;
  --color-surface: #171717;
  --color-text: #f4f4f5;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #4f46e5;
  --color-accent-2: #8b5cf6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a12',
    surface: '#171717',
    ink: '#f4f4f5',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#4f46e5',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black navy (#0a0a12) with white headlines (#ffffff).
- **Do:** Use the blue-indigo solid button (#4f46e5) as the one saturated element in the hero.
- **Do:** Keep the purple glow low on the hero, behind the chat panel only.
- **Don't:** Don't use the green (#34d399) as a button colour.
- **Don't:** Don't add a second saturated button to the hero.
- **Don't:** Don't use the grey-blue (#94a3b8) for headlines; it is for supporting copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
