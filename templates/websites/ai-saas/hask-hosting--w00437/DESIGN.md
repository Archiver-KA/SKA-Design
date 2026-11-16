# Design system — Hask Hosting

`SN-W00437` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page with a centred two-line headline: white for the claim and grey-blue for the phrase in seconds, which sets the emphasis without a new colour. A white solid button leads, with a dark outlined button beside it, and a small pill above the headline announces new hardware. Indigo (#6366f1) is the brand mark, and green (#10b981) marks live status only.

**Mood:** clean, dark, reliable, centred, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#6366f1` · `#64748b` · `#10b981` · `#cbd5e1` · `#0f172a` · `#020617` · `#818cf8` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(16,185,129,0.5)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-sm font-medium px-4 py-2 rounded-md border transition-all flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f5f5f5;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f5f5f5',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second half of the headline in slate (#94a3b8) rather than a new colour
- **Do:** Lead with a white solid button and put an outlined dark button beside it
- **Do:** Use green (#10b981) only for the live status dot in the top bar
- **Don't:** Don't use green for buttons or headlines
- **Don't:** Don't set the page ground in indigo; it is deep navy
- **Don't:** Don't drop the small pill above the headline; it marks the newest hardware

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
