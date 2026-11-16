# Design system — Stellar Hero Night SaaS Landing Page Template

`SN-W00738` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero on a near-black navy ground (#02040a) with a centred, very large Inter headline that fades from white to grey across two lines. Colour is restrained: indigo appears only as a faint glow and a thin rule under the headline, and the primary CTA is a solid white pill. The one recognisable device is the oversized two-line headline over a dim, almost empty background.

**Mood:** cosmic, restrained, high-contrast, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#02040a` | Page ground |
| Surface | `#02040a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a5b4fc` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#a1a1aa` · `#a5b4fc` · `#c7d2fe` · `#000000` · `#02040a` · `#8b5cf6` · `#312e81` · `#4c1d95`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · body 18px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.3)]`, `shadow-[0_0_25px_rgba(255,255,255,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium bg-white/10 text-white px-4 py-2 rounded-full border border-white/5 hover:bg-white/15 transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #02040a;
  --color-surface: #02040a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a5b4fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#02040a',
    surface: '#02040a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#a5b4fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at large size with a white-to-grey gradient fill
- **Do:** Keep the primary CTA as a solid white pill beside a dark secondary button
- **Do:** Use indigo (#6366f1) only for the glow and hairline accents, never for body text
- **Don't:** Don't put the indigo accent on large filled surfaces
- **Don't:** Don't add a second bright colour to the hero
- **Don't:** Don't left-align the hero; the layout is centred

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
