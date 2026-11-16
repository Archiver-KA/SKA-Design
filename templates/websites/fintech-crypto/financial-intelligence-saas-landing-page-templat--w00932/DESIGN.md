# Design system — Financial Intelligence SaaS Landing Page Template

`SN-W00932` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark SaaS hero on near-black [#111111] with a soft rose glow behind the centred headline. The headline is large regular Inter, with its second line in muted pale grey, and the primary button is a pale pink pill with dark text, the only saturated element in the hero.

**Mood:** dark, soft, rose-tinted, saas

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff9eb5` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#111111` · `#f9a8d4` · `#000000` · `#ec4899` · `#ff9eb5` · `#1f2937` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,158,181,0.2)]`, `shadow-[0_0_20px_rgba(255,158,181,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-[#FF9EB5] hover:bg-[#ff8fa8] text-black px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Testimonials (`testimonials`)
8. Newsletter signup (`newsletter`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #ff9eb5;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#ff9eb5',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the pale pink (#ff9eb5) for the primary button only
- **Do:** Set the second headline line in muted grey
- **Do:** Keep the glow soft and behind the headline, not behind the content
- **Don't:** Don't use pink for body text
- **Don't:** Don't use pink for large fills
- **Don't:** Don't brighten the page background to white; the design is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
