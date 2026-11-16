# Design system — Orbit SaaS Landing Page Template

`SN-W00614` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark indigo landing page on a near-black navy ground (#030014) with a large two-line headline: the first line white, the second a violet-to-lavender gradient (#a855f7 to #818cf8). The primary button is a dark pill with a soft violet glow, a secondary text link sits beside it, and the nav carries a small glowing logo. The gradient word does the emphasis work, and the glow stays behind the button.

**Mood:** dark, futuristic, glowing, gradient-led, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030014` | Page ground |
| Surface | `#030014` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#6366f1` · `#818cf8` · `#94a3b8` · `#030014` · `#10b981` · `#a855f7` · `#334155` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-indigo-500/10`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="h-7 px-3 rounded-full bg-white text-[#030014] text-xs font-semibold flex items-center hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030014;
  --color-surface: #030014;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030014',
    surface: '#030014',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black navy (#030014) with a white first headline line (#f5f5f5).
- **Do:** Set the second headline line in the violet gradient (#a855f7 to #818cf8).
- **Do:** Give the primary button a dark pill with a soft violet glow, and a text link beside it.
- **Don't:** Don't use the indigo (#6366f1) as the page background; it is a gradient stop only.
- **Don't:** Don't fill the primary button with solid violet; it is dark with a glow.
- **Don't:** Don't add the green (#10b981) to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
