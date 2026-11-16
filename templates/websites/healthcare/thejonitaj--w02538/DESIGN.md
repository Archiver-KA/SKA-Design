# Design system — TheJonitaj

`SN-W02538` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A stark, high-impact trainer page: a black ground with white, stacked headlines where the final word drops into a single red (#dc2626). The red is the only colour on screen, used in the headline and the logo, while white pill buttons carry the actions. The stance is confrontational and direct, a brand built on contrast rather than imagery.

**Mood:** confrontational, direct, high-contrast, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#262626` · `#ffffff` · `#a3a3a3` · `#e5e5e5` · `#737373` · `#171717` · `#404040` · `#0a0a0a` · `#dc2626` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]`, `shadow-2xl`, `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-100 hover:bg-white/10 hover:border-white/20 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Pricing (`pricing`)
6. Timeline (`timeline`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #dc2626;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use red (#dc2626) for the final word of the headline and the logo only
- **Do:** Stack the headline in large, tight lines, each phrase ending in a full stop
- **Do:** Keep the primary action a white pill with dark text
- **Don't:** Don't add a second accent colour; red is the only one
- **Don't:** Don't place the headline on a photograph; the ground is flat black
- **Don't:** Don't use red for buttons; the buttons are white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
