# Design system — Neural Nexus AI Services Landing Page Template

`SN-W00562` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero (#020617) with an all-caps headline in heavy white sans-serif, its last phrase carrying a cyan-to-pale gradient. A small monospaced status label sits above the headline, and a single cyan button labelled INITIATE DEPLOYMENT is the call to action. Cyan is the one colour in view, so it marks both the gradient and the action.

**Mood:** futuristic, dark, tech, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#22d3ee` · `#ffffff` · `#94a3b8` · `#020617` · `#a855f7` · `#f472b6` · `#e2e8f0` · `#ef4444` · `#eab308` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-accent/5`, `shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-textMain hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. About (`about`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #a855f7;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase heavy white, with the last phrase in a cyan gradient
- **Do:** Use cyan (#22d3ee) for the primary button and the gradient only
- **Do:** Keep the nav as a centred pill with muted grey links
- **Don't:** Don't use cyan as a page background; it is an accent
- **Don't:** Don't set the headline in mixed case; the capitals are part of the voice
- **Don't:** Don't add the purple accent (#a855f7) to the hero; it does not appear there

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
