# Design system — Pulse Flows — Intelligent AI Automation

`SN-W00648` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep charcoal agency page where sky blue (#4fd1ff) marks the key phrases of a large bold white sans headline. The left half holds a glowing blue medallion as the single illustration, and the body copy is light grey (#d1d5db) at a comfortable reading size. The look is cool and restrained, with one accent doing all the emphasis work.

**Mood:** dark, cool, agency, glowing, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f1115` | Page ground |
| Surface | `#16181d` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4fd1ff` | Primary action and highlights |
| Second accent | `#3ee6a8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4fd1ff` · `#9ca3af` · `#0f1115` · `#6b7280` · `#3ee6a8` · `#16181d` · `#4b5563` · `#d1d5db` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-[#4FD1FF]/5`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 px-6 py-3 rounded-full bg-[#16181D] border border-white/10 hover:border-[#4FD1FF] text-gray-300 hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f1115;
  --color-surface: #16181d;
  --color-text: #d1d5db;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #4fd1ff;
  --color-accent-2: #3ee6a8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f1115',
    surface: '#16181d',
    ink: '#d1d5db',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#4fd1ff',
    accent2: '#3ee6a8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrases in sky blue (#4fd1ff) and the rest in white
- **Do:** Use the glowing blue medallion as the single hero illustration
- **Do:** Keep body copy in light grey (#d1d5db) on the charcoal ground (#0f1115)
- **Don't:** Don't use the mint (#3ee6a8) in the hero; blue is the only accent
- **Don't:** Don't use blue for body copy
- **Don't:** Don't place the medallion on a light section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
