# Design system — IT Infrastructure & Cybersecurity Landing Page Template

`SN-W00474` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A corporate IT-services page with a navy hero band under a light grey navigation bar, and a large bold white headline in French. The yellow (#facc15) call-to-action label sits in a dark outlined box with a slanted white edge, which is the page's signature detail. Inter throughout keeps the voice plain and professional. Light sections below the hero keep the page readable.

**Mood:** professional, plain, corporate, navy, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#334155` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#bfdbfe` · `#1e3a8a` · `#0f172a` · `#94a3b8` · `#64748b` · `#475569` · `#93c5fd` · `#e2e8f0` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 24px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-blue-900/20`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-next-blue text-white text-xs font-medium px-5 py-2.5 rounded hover:bg-blue-800 transition-all shadow-lg hover:shadow-next-blue/50 transform hover:-translate-y-0.5 active:translate-y-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Bento grid (`bento-grid`)
6. 3D / canvas scene (`3d-canvas`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #334155;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e3a8a;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#334155',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e3a8a',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the navy hero band for the first screen and light sections below
- **Do:** Set the button label in yellow (#facc15) inside a dark outlined box with the slanted edge
- **Do:** Keep headlines bold white on navy and dark navy on light
- **Don't:** Don't put yellow text on white backgrounds
- **Don't:** Don't remove the slanted accent stripe from the button
- **Don't:** Don't set the French copy in a condensed face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
