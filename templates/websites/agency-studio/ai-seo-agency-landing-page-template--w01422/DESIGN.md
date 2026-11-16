# Design system — AI SEO Agency Landing Page Template

`SN-W01422` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A deep navy page on [#020617] with a centred headline where the first line is white and the second is set in a soft violet (#818cf8) that carries the emphasis. The primary button is a solid indigo (#6366f1) with rounded corners, next to a dark input field, and a faint glow sits behind the headline. The layout is a plain, confident SaaS page.

**Mood:** confident, focused, navy, saas, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#818cf8` · `#64748b` · `#94a3b8` · `#1e293b` · `#cbd5e1` · `#020617` · `#0f172a` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_20px_rgba(79,70,229,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #7f1d1d;
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
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in violet (#818cf8) and keep the first line white.
- **Do:** Use the solid indigo (#6366f1) button for the primary action, beside a dark input.
- **Do:** Keep the glow soft and behind the headline only.
- **Don't:** Don't use indigo for body text; it is the action and emphasis colour.
- **Don't:** Don't add a light section; the page is navy throughout.
- **Don't:** Don't make the input a white field; it is dark with a thin border.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
