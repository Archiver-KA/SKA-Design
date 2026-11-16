# Design system — VPN Service Landing Page Template

`SN-W04130` · business-services · dark mode · Sinera Atlas theme `route` · language `ru`

## Direction

A dark page on near-black (#0a0a0a) with a centred headline in white, where the second line fades to a lighter grey. A white pill button is the primary action beside a dark outline button, and a small rounded tag sits above the headline. The page is spare and high-contrast, with no colour in the hero.

**Mood:** spare, dark, high-contrast, centred, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ecfdf5` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#10b981` · `#000000` · `#cbd5e1` · `#64748b` · `#0a0a0a` · `#0f0f0f` · `#e2e8f0` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-emerald-50 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ecfdf5;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #e2e8f0;
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
    ink: '#ecfdf5',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large and centred in white, with the second line in lighter grey
- **Do:** Use a white pill button for the primary action beside a dark outline button
- **Do:** Keep the hero free of colour so contrast carries the page
- **Don't:** Don't use green in the hero
- **Don't:** Don't add a light background behind the headline
- **Don't:** Don't set the headline in a decorative face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
