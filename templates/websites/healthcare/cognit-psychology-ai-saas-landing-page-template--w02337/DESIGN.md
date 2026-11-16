# Design system — Cognit Psychology AI SaaS Landing Page Template

`SN-W02337` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, futuristic SaaS page on near-black navy (#020617) with a soft indigo glow (#6366f1) in the background. The headline is large Inter, white at the top and fading to grey on the second line, which gives depth without shadows. Pill buttons pair a solid white primary with a dark ghost secondary, and the indigo stays in the background rather than on the controls.

**Mood:** futuristic, dark, precise, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#818cf8` · `#6366f1` · `#64748b` · `#94a3b8` · `#cbd5e1` · `#020617` · `#4f46e5` · `#10b981` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition-colors text-sm font-medium shadow-lg shadow-indigo-500/25">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Logo cloud (`logo-cloud`)
3. Bento grid (`bento-grid`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #334155;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#020617',
    surface: '#334155',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the indigo (#6366f1) in soft background glows and use white for the primary button.
- **Do:** Set headlines in large Inter with the second line in a grey gradient.
- **Do:** Use a dark ghost pill with a thin border for secondary buttons.
- **Don't:** Don't use indigo as a solid button fill; the primary is white.
- **Don't:** Don't use light backgrounds for sections.
- **Don't:** Don't add a serif; the page is sans-only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
