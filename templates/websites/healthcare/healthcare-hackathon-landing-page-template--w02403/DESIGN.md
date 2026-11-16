# Design system — Healthcare Hackathon Landing Page Template

`SN-W02403` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Ekathon's page is a dark, developer-event hero: a near-black navy ground (#020617) with soft blue-violet glow behind a large, tightly tracked white headline. Controls are pill-shaped, with a solid white primary button and a faint outlined secondary. The glow fields, not imagery, create depth, so the page feels like a launch screen rather than a brochure.

**Mood:** dark, luminous, event-driven, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#020617` · `#cbd5e1` · `#818cf8` · `#64748b` · `#0f172a` · `#6366f1` · `#e2e8f0` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 bg-white text-slate-950 rounded-full font-semibold hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Feature grid (`features`)
5. Map / location (`map-location`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
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
    background: '#020617',
    surface: '#020617',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #020617 and build depth with blurred blue-violet glows
- **Do:** Use a solid white pill for the primary CTA and a low-contrast outline pill for the secondary
- **Do:** Set the headline in large, tightly tracked light grey (#cbd5e1) Inter
- **Don't:** Don't use photography; the page relies on gradient glows
- **Don't:** Don't fill the hero with light surfaces; the dark ground is what makes the glows read
- **Don't:** Don't make the secondary button as strong as the primary

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
