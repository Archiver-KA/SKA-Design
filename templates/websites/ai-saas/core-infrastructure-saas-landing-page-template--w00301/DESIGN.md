# Design system — Core Infrastructure SaaS Landing Page Template

`SN-W00301` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, precise infrastructure page on near-black [#0a0a0a], with a very large white sans headline in two short lines and a pale amber [#fcd34d] primary button. The amber is the only strong colour, and it sits on a faint grey glow above a window-style product frame. Inter sets the type, and the page feels minimal and developer-focused.

**Mood:** minimal, precise, dark, developer-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fcd34d` | Primary action and highlights |
| Second accent | `#fcd34d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#34d399` · `#0a0a0a` · `#a3a3a3` · `#262626` · `#fcd34d` · `#000000` · `#d4d4d4` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_10px_30px_rgba(251,191,36,0.25)]`, `shadow-[0_0_8px_rgba(255,255,255,0.2)]`, `shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_-20px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Integrations (`integrations`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #fcd34d;
  --color-accent-2: #fcd34d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#fcd34d',
    accent2: '#fcd34d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#fcd34d) for the primary button only
- **Do:** Set the hero headline in Inter at display size, in two short lines
- **Do:** Frame product screenshots in a dark window with a thin border
- **Don't:** Don't use green (#34d399) for buttons; it does not appear in the hero
- **Don't:** Don't brighten the background above the near-black ground
- **Don't:** Don't add gradient fills to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
