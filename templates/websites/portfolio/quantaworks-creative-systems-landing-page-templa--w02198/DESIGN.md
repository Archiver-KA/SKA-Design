# Design system — QuantaWorks Creative Systems Landing Page Template

`SN-W02198` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark immersive studio page: a near-black ground (#0a0a0a) with a large white serif headline over a faint particle texture, and a lavender (#c084fc) gradient button in the nav. A dark product panel on the right shows icon tiles and thin-bordered cards. Lavender is the single accent, on the button and gradient edges.

**Mood:** immersive, dark, futuristic, polished, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f1f5f9` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f8fafc` · `#f1f5f9` · `#e2e8f0` · `#cbd5e1` · `#94a3b8` · `#c084fc` · `#c7d2fe` · `#3b3a69` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 16px · body 12px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-blue-500/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3.5 py-2 text-sm text-white transition hover:bg-white/10 ring-1 ring-white/10 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. About (`about`)
7. Articles (`blog-articles`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #020617;
  --color-text: #ffffff;
  --color-muted: #f1f5f9;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#020617',
    ink: '#ffffff',
    muted: '#f1f5f9',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lavender (#c084fc) as the only accent, on buttons and gradient edges
- **Do:** Set the hero headline in a large serif in white
- **Do:** Keep product panels dark with thin borders
- **Don't:** Don't use the light grey (#e2e8f0) as a button fill
- **Don't:** Don't add a second accent hue
- **Don't:** Don't put text over the particle texture

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
