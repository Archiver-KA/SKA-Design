# Design system — AI Revenue Orchestration Landing Page Template

`SN-W00144` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

Near-black sales-funnel page on #06060c with a large white sans headline split around a blue italic word, Converta, which glows at its centre. A blue arc of light runs along the bottom of the hero like a horizon, and a pill-shaped navigation floats above it. Blue (#3b82f6) is the only colour, used for the highlighted word and the primary button, which gives a cinematic, single-minded look.

**Mood:** cinematic, dark, focused, single-minded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#06060c` | Page ground |
| Surface | `#0b0b14` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#eff6ff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#60a5fa` · `#0b0b14` · `#06060c` · `#eff6ff` · `#34d399` · `#2563eb` · `#10b981` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Sans
- **Body:** Instrument Sans
- **Loaded families:** Instrument Sans, Instrument Serif
- **Scale (largest breakpoint):** h2 12px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.2)]`, `shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]`, `shadow-[0_0_12px_rgba(56,189,248,1)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="hidden md:inline-block border border-white/10 rounded-full px-5 py-2 text-sm text-white/70 font-medium hover:bg-white/[0.02] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Video / media (`video-media`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #06060c;
  --color-surface: #0b0b14;
  --color-text: #ffffff;
  --color-muted: #eff6ff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #34d399;
  --font-display: "Instrument Sans", sans-serif;
  --font-body: "Instrument Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#06060c',
    surface: '#0b0b14',
    ink: '#ffffff',
    muted: '#eff6ff',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Instrument Sans'], sans: ['Instrument Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans, with the key verb in blue italic
- **Do:** Use blue (#3b82f6) for the highlighted word and the primary button only
- **Do:** Place the glowing blue arc beneath the hero as a horizon
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't set body text in blue
- **Don't:** Don't break the dark ground with light backgrounds in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
