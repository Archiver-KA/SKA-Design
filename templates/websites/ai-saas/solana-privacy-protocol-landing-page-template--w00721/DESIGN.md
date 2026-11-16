# Design system — Solana Privacy Protocol Landing Page Template

`SN-W00721` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, minimal Web3 hero: a near-black ground (#020408) with a very large white headline on two centred lines, where the final word fades into grey. A small outlined status pill in mint (#14f195) labels the beta, and the primary button is white with the secondary outlined. Mint is kept for labels rather than fills.

**Mood:** minimal, private, dark, technical, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020408` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#14f195` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#14f195` · `#9945ff` · `#ef4444` · `#020408` · `#0b0f17` · `#000000` · `#22c55e` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_-10px_rgba(20,241,149,0.5)]`, `shadow-[0_0_30px_-10px_rgba(20,241,149,0.3)]`, `shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="group relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-black bg-white transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020408;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #14f195;
  --color-accent-2: #ef4444;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020408',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#14f195',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large in white on two centred lines, with the last word in a grey fade.
- **Do:** Use the mint (#14f195) for small status pills and labels only.
- **Do:** Make the primary button white and the secondary an outline with a small icon.
- **Don't:** Don't fill large areas with mint green.
- **Don't:** Don't use purple on this hero; mint is the only accent.
- **Don't:** Don't set the hero copy in a light colour; it is grey on the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
