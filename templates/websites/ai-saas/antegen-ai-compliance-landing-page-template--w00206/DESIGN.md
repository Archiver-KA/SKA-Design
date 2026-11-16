# Design system — AnteGen.AI Compliance Landing Page Template

`SN-W00206` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, technical hero on near-black (#030304) with a bold white sans wordmark where the final letters glow in yellow-gold. The yellow appears on the central word, the mono-style eyebrow label and the outlined console button, and little else. Small uppercase monospace labels and a serif-free, dense intro paragraph make the page read like an audit console.

**Mood:** dark, technical, precise, compliance

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030304` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#10b981` · `#030304` · `#d4d4d4` · `#525252` · `#000000` · `#34d399` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_30px_rgba(254,206,10,0.12)]`, `shadow-[0_0_15px_rgba(254,206,10,0.1)]`, `shadow-[0_0_20px_rgba(254,206,10,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 border border-gold-accent/30 text-gold-accent text-xs font-mono hover:bg-gold-accent hover:text-navy-primary transition-all uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(254,206,10,0.1)] hover:shadow-[0_0_20px_rgba(254,206,10,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030304;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #3b82f6;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030304',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set key words in the headline with a yellow-gold highlight, one word per hero
- **Do:** Use uppercase monospace for eyebrow labels and nav items
- **Do:** Keep the console-style button outlined rather than filled
- **Don't:** Don't use the green from the palette as a second accent beside the gold
- **Don't:** Don't set the body text in bright white; keep it in the grey tones
- **Don't:** Don't add light panels to the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
