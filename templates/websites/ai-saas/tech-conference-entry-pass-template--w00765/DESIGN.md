# Design system — Tech Conference Entry Pass Template

`SN-W00765` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Two tall badge cards on a black ground: a white guest pass with a black logo line and a grey avatar placeholder, and a dark navy VIP card with a large white name, a small outlined tag and a faint indigo bottom edge. Small monospace labels mark access level, date and stage, giving a ticket-like finish. The white and navy passes separate guest and VIP tiers at a glance.

**Mood:** ticket-like, technical, high-contrast, tiered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a5b4fc` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#000000` · `#e5e5e5` · `#a3a3a3` · `#d4d4d4` · `#262626` · `#a5b4fc` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 24px · h2 10px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[24px]` (24px), `rounded` (4px)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow-[inset_0_1px_4px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-[340px]`
- **Common gaps:** `gap-2`, `gap-16`, `gap-6`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a5b4fc;
  --color-accent-2: #10b981;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a5b4fc',
    accent2: '#10b981',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set access labels, dates and stages in small uppercase monospace (JetBrains Mono)
- **Do:** Use a white pass for guests and dark navy with an indigo edge for VIP
- **Do:** Keep the pass corners rounded with a large radius, as the template does
- **Don't:** Don't add colour fills to the guest pass; it stays white
- **Don't:** Don't set names in monospace; names are in the sans
- **Don't:** Don't add extra badges or icons to the pass faces

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
