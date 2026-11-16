# Design system — Prediction Markets Landing Page Template

`SN-W01015` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, sports-style prediction market page on near-black (#0a0a0a), with a white bold sans-serif headline whose final clause is set in orange (#f97316). The orange is the solid primary button and the single highlight, and faint player cards sit behind the copy as texture. Form fields are dark inputs with thin outlines, so the page reads as an energetic, low-glare product launch.

**Mood:** energetic, dark, sporty, bold, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#262626` · `#737373` · `#ffffff` · `#f97316` · `#404040` · `#171717` · `#0a0a0a` · `#a3a3a3` · `#22c55e` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Source Code Pro, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]`, `shadow-[0_0_25px_-5px_rgba(234,88,12,0.6)]`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg text-sm tracking-tight transition-all shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)] hover:shadow-[0_0_25px_-5px_rgba(234,88,12,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #262626;
  --color-border: #262626;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
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
    muted: '#262626',
    line: '#262626',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline clause in orange (#f97316) and keep the rest white.
- **Do:** Use the solid orange button as the single primary action.
- **Do:** Keep form fields as dark inputs with thin outlines.
- **Don't:** Don't use orange for body text.
- **Don't:** Don't add light panels to the hero.
- **Don't:** Don't add a green accent next to the orange button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
