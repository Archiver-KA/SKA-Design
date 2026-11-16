# Design system — AI Chat App Landing Page Template

`SN-W00064` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black page with a large white sans headline, the key phrase in soft violet (#c084fc) and a white pill primary button beside a dark outline button. The hero is centred, with a small pill badge above and a lot of empty space around the copy. Violet is the only colour and is used on one phrase.

**Mood:** quiet, dark, focused, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c084fc` · `#a1a1aa` · `#71717a` · `#27272a` · `#a855f7` · `#000000` · `#18181b` · `#e4e4e7` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-purple-900/20`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Integrations (`integrations`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #7f1d1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#c084fc) on one phrase of the headline only
- **Do:** Keep the page ground pure black with white headlines
- **Do:** Use white pills for the primary action
- **Don't:** Don't use violet for body copy
- **Don't:** Don't add a light section into the hero
- **Don't:** Don't crowd the headline with extra badges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
