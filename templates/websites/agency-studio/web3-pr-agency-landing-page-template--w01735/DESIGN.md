# Design system — Web3 PR Agency Landing Page Template

`SN-W01735` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark black agency page with a white heavy uppercase headline, where the phrase AI SEARCH is set in neon green [#00ff00] and carries the page's identity. The green also marks the primary button, a small status tag and the diagram nodes in the hero, which are drawn on a dark ground. Everything else is white or grey, so the colour reads as a signal.

**Mood:** stark, techy, bold, monochrome with neon, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff00` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00ff00` · `#a3a3a3` · `#737373` · `#111111` · `#0a0a0a` · `#525252` · `#000000` · `#d4d4d4` · `#222222`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,255,0,0.2)]`, `shadow-[0_0_30px_#00FF00]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-6 py-3.5 text-sm font-bold text-black bg-[#00FF00] rounded-lg hover:bg-[#00FF00]/90 transition-all shadow-[0_0_20px_rgba(0,255,0,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #00ff00;
  --color-accent-2: #ef4444;
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
    surface: '#111111',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#00ff00',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase white and the key phrase in neon green (#00ff00)
- **Do:** Use the green for the primary button, status tags and diagram nodes only
- **Do:** Keep the background black (#0a0a0a) with white and grey text
- **Don't:** Don't use neon green for paragraphs or long text
- **Don't:** Don't add a second accent colour
- **Don't:** Don't set headlines in a serif or light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
