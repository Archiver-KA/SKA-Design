# Design system — Programmable Privacy Agent Landing Page Template

`SN-W01019` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark developer-tool hero on near-black (#050505), with a very large sans headline in white whose second line is dimmed grey. The right side holds a code-style panel with a skill file and a green validated line, and it is the page's main visual. Buttons are a white pill and a dark outlined command pill, so the page reads as a technical spec rather than a marketing site.

**Mood:** technical, precise, dark, minimal, developer

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#262626` · `#050505` · `#10b981` · `#121212` · `#c084fc` · `#000000` · `#6ee7b7` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.5)]`, `shadow-[0_0_20px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative overflow-hidden bg-white text-black text-xs font-semibold px-5 py-2 rounded hover:bg-neutral-200 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Booking form (`booking`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#121212',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large sans, white on the first line and grey on the second.
- **Do:** Show the product as a code panel with a thin border on the right.
- **Do:** Use the command in a dark outlined pill next to the white primary button.
- **Don't:** Don't use a light background for the hero.
- **Don't:** Don't add illustrations beside the code panel.
- **Don't:** Don't colour the headline with the green used for validation states.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
