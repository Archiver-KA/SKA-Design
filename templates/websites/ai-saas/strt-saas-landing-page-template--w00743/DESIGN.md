# Design system — STRT SaaS Landing Page Template

`SN-W00743` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

A deep navy page (#020617) with a centred, bold Inter headline in near-white, where the second line fades into a slate-to-lavender gradient. The primary button is a solid white pill and the secondary is an outline, with no other colour in the hero. A soft radial glow sits behind the headline, giving the page a quiet, spot-lit look.

**Mood:** dark, minimal, spot-lit, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#0f172a` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#cbd5e1` · `#94a3b8` · `#6366f1` · `#ffffff` · `#0f172a` · `#1e293b` · `#818cf8` · `#64748b` · `#f1f5f9` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]`, `shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 px-8 py-3.5 rounded-lg text-sm font-medium shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Feature grid (`features`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f8fafc;
  --color-muted: #cbd5e1;
  --color-border: #0f172a;
  --color-accent: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f8fafc',
    muted: '#cbd5e1',
    line: '#0f172a',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter bold, centred, in near-white
- **Do:** Use the lavender-indigo gradient (#818cf8) only on the second headline line
- **Do:** Keep the primary button a solid white pill beside an outline secondary
- **Don't:** Don't add more colour to the hero beyond the glow
- **Don't:** Don't use a light page background
- **Don't:** Don't stack more than two buttons in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
