# Design system — Industrial Data & AI Landing Page Template

`SN-W00458` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark industrial-data page on a near-black ground, with bold white headlines and one orange highlight on the key phrase, Measurable Value. The same orange fills the primary button, so a single colour marks both the emphasis and the call to action. Inter at heavy weight sets large, tight headlines, and a faint terminal-style window at the bottom hints at the product. The tone is direct and technical.

**Mood:** direct, technical, dark, heavy, industrial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#171717` · `#cbd5e1` · `#4ade80` · `#0a0a0a` · `#22c55e` · `#000000` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-brand-900/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold border rounded-lg transition-all text-white bg-white/5 hover:bg-white/10 border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. Services (`services`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted phrase in the orange accent, one per headline
- **Do:** Use the solid orange button for the primary action only
- **Do:** Keep headlines heavy and tightly set on the dark ground
- **Don't:** Don't use green as an accent; orange carries the emphasis
- **Don't:** Don't add gradients behind headlines
- **Don't:** Don't use more than one solid orange element per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
