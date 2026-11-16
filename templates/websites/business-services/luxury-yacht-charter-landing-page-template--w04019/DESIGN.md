# Design system — Luxury Yacht Charter Landing Page Template

`SN-W04019` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy page with a glass navigation bar and a centred white sans-serif headline set in large, tight lines. Body copy is pale grey and the layout is built from rounded glass cards and pill buttons. A soft blue glow sits behind the hero, giving the page a calm, premium night-time mood without heavy ornament.

**Mood:** premium, nocturnal, calm, glassy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1220` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#000000` · `#67e8f9` · `#94a3b8` · `#cbd5e1` · `#3b82f6` · `#f8fafc` · `#fbbf24` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-cyan-400/10`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-medium transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Call to action (`cta`)
5. Schedule (`schedule-agenda`)
6. 3D / canvas scene (`3d-canvas`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b1220;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #fbbf24;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1220',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the page on the navy ground (#0b1220) for every section
- **Do:** Use the blue (#3b82f6) for primary buttons only
- **Do:** Build feature panels as rounded glass cards with thin borders
- **Don't:** Don't introduce white or light section backgrounds
- **Don't:** Don't stack more than one glow behind the same block
- **Don't:** Don't set headlines in a serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
