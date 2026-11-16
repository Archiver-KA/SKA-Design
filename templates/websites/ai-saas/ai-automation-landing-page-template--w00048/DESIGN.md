# Design system — AI Automation Landing Page Template

`SN-W00048` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

A black page with a bold, uppercase monospaced headline, a cyan (#00f0ff) highlight on one word and a grid of outlined boxes as the hero visual. The look is terminal-like: system-status lines, square corners and a lit cyan frame on the centre cell. Red (#ef4444) is in the palette as a secondary, but the first screen uses cyan alone.

**Mood:** technical, terminal, stark, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#00f0ff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#00f0ff` · `#1f2937` · `#000000` · `#ffffff` · `#9ca3af` · `#111827` · `#4b5563` · `#6b7280` · `#374151` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_30px_rgba(0,240,255,0.2)]`, `shadow-[0_0_20px_rgba(0,240,255,0.05)]`, `shadow-[0_0_15px_rgba(0,240,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-3 bg-[#00F0FF] text-black px-8 py-5 font-mono text-lg font-medium hover:bg-white transition-colors rounded-none group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#00F0FF]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #050505;
  --color-text: #d1d5db;
  --color-muted: #4b5563;
  --color-border: #1f2937;
  --color-accent: #00f0ff;
  --color-accent-2: #ef4444;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#050505',
    ink: '#d1d5db',
    muted: '#4b5563',
    line: '#1f2937',
    accent: '#00f0ff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in JetBrains Mono in uppercase
- **Do:** Use cyan (#00f0ff) for one highlight word or frame per section
- **Do:** Keep corners square on panels and buttons
- **Don't:** Don't use rounded corners on panels or buttons
- **Don't:** Don't use red (#ef4444) for anything except errors or warnings
- **Don't:** Don't switch the headline to a proportional sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
