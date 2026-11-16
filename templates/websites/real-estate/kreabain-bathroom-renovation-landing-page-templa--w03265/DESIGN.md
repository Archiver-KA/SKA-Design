# Design system — Kreabain Bathroom Renovation Landing Page Template

`SN-W03265` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A premium, centred hero on a deep navy ground (#0f172a), with a large white sans headline in three short lines and grey supporting copy beneath. A bright blue (#3b82f6) carries the small pill label above the headline and the primary button, and nothing else on the first screen is coloured. The rounded corners and symmetrical layout make it feel focused and calm.

**Mood:** premium, focused, calm, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#0f172a` · `#cbd5e1` · `#e2e8f0` · `#475569` · `#f8fafc` · `#94a3b8` · `#60a5fa` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-slate-200/50`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 rounded-full text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN), Framer Motion
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#3b82f6) for the primary button and the eyebrow pill only.
- **Do:** Centre the hero text and keep the headline in three short lines.
- **Do:** Set headlines in white on the navy ground (#0f172a).
- **Don't:** Don't put the blue behind body copy.
- **Don't:** Don't use white backgrounds for the hero sections.
- **Don't:** Don't mix a warm accent into the navy and blue scheme.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
