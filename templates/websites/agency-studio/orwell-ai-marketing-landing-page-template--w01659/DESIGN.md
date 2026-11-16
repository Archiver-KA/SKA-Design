# Design system — Orwell AI Marketing Landing Page Template

`SN-W01659` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep navy page with a centred white headline whose second line fades to a grey gradient, sitting on a soft radial glow. A green (#10b981) pill button and a small green-tinted badge carry the single accent. The mood is cool and surveillance-like, with the glow and gradient type creating the depth.

**Mood:** cool, nocturnal, atmospheric, focused, sleek

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#94a3b8` · `#020617` · `#cbd5e1` · `#64748b` · `#34d399` · `#0f172a` · `#475569` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Stats band (`stats`)
5. FAQ (`faq`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
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
  --color-accent: #10b981;
  --color-accent-2: #e2e8f0;
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
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline white in Inter, with the second line in grey gradient text
- **Do:** Use the green (#10b981) for the primary button and one badge per section
- **Do:** Place a soft radial glow behind the hero type
- **Don't:** Don't use green for body text or long links
- **Don't:** Don't use the pale slate (#e2e8f0) accent as a button colour
- **Don't:** Don't add a second bright hue to the glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
