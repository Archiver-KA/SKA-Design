# Design system — status_200 Web Development Agency Landing Page Template

`SN-W01705` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black navy hero with a white headline and a grey subline, then a code block in a dark panel with syntax colours. The primary button is solid cyan (#22d3ee) with a dark outlined button beside it. The code panel is the main visual, so the page reads as engineering-led rather than decorative.

**Mood:** dark, technical, engineered, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#22d3ee` · `#030712` · `#94a3b8` · `#64748b` · `#22c55e` · `#a855f7` · `#c084fc` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(6,182,212,0.5)]`, `shadow-[0_0_30px_rgba(6,182,212,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-16`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex h-14 items-center justify-center rounded-lg bg-cyan-500 px-8 text-sm font-bold text-[#030712] transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
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
    background: '#030712',
    surface: '#334155',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put a dark code panel with a thin border in the hero as the main visual.
- **Do:** Use solid cyan (#22d3ee) for the primary button only.
- **Do:** Keep the page on near-black navy (#030712) with white headings.
- **Don't:** Don't use the cyan (#06b6d4) as a background; cyan is for buttons.
- **Don't:** Don't add a light section to the hero.
- **Don't:** Don't set code in the sans face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
