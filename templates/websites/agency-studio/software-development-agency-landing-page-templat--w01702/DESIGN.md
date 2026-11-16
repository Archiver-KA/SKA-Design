# Design system — Software Development Agency Landing Page Template

`SN-W01702` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black navy page where the second line of the headline, 'Excellence.', is set in cyan (#22d3ee). Two buttons sit under the copy, a solid cyan primary and a dark outlined secondary, beside a dark video panel with a large play icon. Stats under the hero are shown as white numerals, so the page is technical and numbers-led.

**Mood:** technical, dark, clean, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#64748b` · `#06b6d4` · `#94a3b8` · `#0f172a` · `#eab308` · `#020617` · `#334155` · `#164e63`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-cyan-900/20`, `shadow-[0_0_20px_rgba(6,182,212,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-cyan-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Logo cloud (`logo-cloud`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #eab308;
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
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in cyan (#22d3ee), and keep the rest white.
- **Do:** Use a solid cyan primary button and an outlined secondary button.
- **Do:** Show stats as large white numerals with small grey labels below.
- **Don't:** Don't set body copy in cyan; reserve it for the highlight and the primary button.
- **Don't:** Don't add a second accent colour beyond cyan and the yellow floating call button.
- **Don't:** Don't add a light section to the first screen; the page is dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
