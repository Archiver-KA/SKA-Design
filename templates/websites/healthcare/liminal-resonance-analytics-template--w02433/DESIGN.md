# Design system — Liminal Resonance Analytics Template

`SN-W02433` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

This is a phone-width telemetry screen on a near-black ground (#0a0a0f). Type is all Cinzel serif in capitals with wide tracking, in cream for headings and labels. Lavender (#b8a4ff) marks the active filter, the timeline dots and the active tab, and a bottom tab bar keeps the same accent. The look is ceremonial and mysterious, closer to an instrument log than a dashboard.

**Mood:** mysterious, ceremonial, dark, instrumental

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Text | `#ede7d2` | Headings and primary copy |
| Accent | `#b8a4ff` | Primary action and highlights |
| Second accent | `#7b5cff` | Supporting highlights |

Palette by frequency of use: `#ede7d2` · `#b8a4ff` · `#0a0a0f` · `#7b5cff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 18px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-wide`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="pill-btn rounded-full border border-[#B8A4FF]/40 bg-[#7B5CFF]/[0.08] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] text-[#EDE7D2]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Timeline (`timeline`)
3. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-text: #ede7d2;
  --color-accent: #b8a4ff;
  --color-accent-2: #7b5cff;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    ink: '#ede7d2',
    accent: '#b8a4ff',
    accent2: '#7b5cff',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Set headings and labels in Cinzel capitals with wide tracking
- **Do:** Use lavender (#b8a4ff) for the active filter, timeline dots and the active tab
- **Do:** Keep the ground near-black (#0a0a0f) with cream type (#ede7d2)
- **Don't:** Don't use bright or saturated colours; the palette is cream and lavender
- **Don't:** Don't set body text in a sans-serif; Cinzel carries the page
- **Don't:** Don't use solid filled buttons; the report action is outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
