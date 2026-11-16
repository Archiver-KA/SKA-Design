# Design system — AI Video SaaS Landing Page Template

`SN-W00182` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Black page with a heavy sans-serif headline in white, and the key phrase set in a blue-to-amber gradient that runs through violet. A small status pill with a dot sits above the headline, and a white primary button leads the calls to action. A faint purple haze behind the hero adds depth without a visible colour block.

**Mood:** dark, cinematic, bold, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050508` | Page ground |
| Surface | `#050508` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#94a3b8` · `#64748b` · `#a855f7` · `#475569` · `#60a5fa` · `#f59e0b` · `#ef4444` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]`, `shadow-2xl`, `shadow-[0_0_10px_rgba(239,68,68,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group relative px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white font-medium transition-all overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050508;
  --color-surface: #050508;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050508',
    surface: '#050508',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue-to-amber gradient on the one emphasis phrase in the headline only
- **Do:** Use the white primary button with dark text as the main call to action
- **Do:** Keep the hero on black (#050508) with a faint purple glow behind the type
- **Don't:** Don't apply the gradient to body text or buttons; it is for the headline phrase
- **Don't:** Don't use a light background; the hero is black
- **Don't:** Don't set the status pill in a bright fill; it stays a small outlined chip

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
