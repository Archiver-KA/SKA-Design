# Design system — TradeAI Operational SaaS Landing Page Template

`SN-W00779` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en-GB`

## Direction

A dark, confident pilot-offer page. The headline is set very large in a geometric grotesque, with its last word in mint (#34d399) as the single highlight. Glass cards with backdrop blur float over the hero to show the product, and supporting copy stays in muted grey. The mint works as an accent on the black ground.

**Mood:** confident, dark, direct, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#10b981` · `#000000` · `#a3a3a3` · `#0a0a0a` · `#737373` · `#d4d4d4` · `#525252` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the last word of the headline in mint (#34d399)
- **Do:** Use Space Grotesk for headlines at display size with tight leading
- **Do:** Float product cards over the hero with backdrop blur
- **Don't:** Don't use mint (#34d399) for body text or large fills
- **Don't:** Don't put a light background behind the hero
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
