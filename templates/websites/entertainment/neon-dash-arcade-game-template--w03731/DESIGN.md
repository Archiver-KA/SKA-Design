# Design system — Neon Dash Arcade Game Template

`SN-W03731` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Deep navy page, dimmed behind a centred modal card with a soft dark surface and a thin cyan glow. The card holds a glowing cyan icon, a bold sans title in white, a short grey instruction with a keycap, and a wide solid cyan button with dark text. A faint red glow sits in the blurred background, so the neon palette stays on dark glass.

**Mood:** neon, arcade, focused, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#fb7185` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#22d3ee` · `#1e293b` · `#06b6d4` · `#fb7185` · `#0f172a` · `#cbd5e1` · `#94a3b8` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit, JetBrains Mono
- **Scale (largest breakpoint):** h1 30px · h2 36px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-1`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f8fafc;
  --color-muted: #64748b;
  --color-accent: #06b6d4;
  --color-accent-2: #fb7185;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f8fafc',
    muted: '#64748b',
    accent: '#06b6d4',
    accent2: '#fb7185',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Use a solid cyan (#06b6d4) button with dark text for the main action
- **Do:** Give modal cards a dark surface with a faint cyan glow
- **Do:** Show keys as small keycap labels inside instruction text
- **Don't:** Don't use cyan for body text
- **Don't:** Don't place a light background behind the modal
- **Don't:** Don't add more than one glowing accent colour to the same card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
