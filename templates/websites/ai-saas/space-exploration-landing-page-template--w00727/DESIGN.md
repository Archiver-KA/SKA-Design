# Design system — Space Exploration Landing Page Template

`SN-W00727` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, mission-control aerospace hero: a near-black ground with a heavy uppercase white headline stacked on three lines, the middle phrase fading into grey. A bright lime (#e8ff47) fills the primary button, and a bordered telemetry panel uses small monospaced labels and a lime countdown. The panel's hard corners make the page read as technical.

**Mood:** technical, stark, mission-control, bold, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e8ff47` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e8ff47` · `#71717a` · `#a1a1aa` · `#52525b` · `#3f3f46` · `#27272a` · `#18181b` · `#050505` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Mono, Syne, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-[#E8FF47] text-black font-mono-tech text-xs font-semibold uppercase tracking-widest px-6 py-3 hover:bg-white transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Comparison (`comparison`)
5. Integrations (`integrations`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #e8ff47;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#e8ff47',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase white, with the middle phrase in a grey gradient.
- **Do:** Use lime (#e8ff47) for the primary button and the live countdown only.
- **Do:** Build data panels with thin bordered corners and small monospaced labels.
- **Don't:** Don't round the telemetry panel corners; the hard corners are part of the look.
- **Don't:** Don't use lime for body text.
- **Don't:** Don't add a light background behind the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
