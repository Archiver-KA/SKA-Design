# Design system — BLDR Visual Builder SaaS Landing Page Template

`SN-W00251` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark black SaaS hero: a pure black ground, a white Inter headline set tight and large, with the second line faded to a grey gradient. The nav and primary CTA are white pills, which become the only bright shapes on the page, and the rest is greyscale. Rounded pills carry the badge and buttons, and the gradient text is the one decorative move, so the page reads as minimal and developer-facing.

**Mood:** minimal, stark, developer, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#000000` · `#f1f5f9` · `#cbd5e1` · `#64748b` · `#e2e8f0` · `#06b6d4` · `#fbbf24` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Bricolage Grotesque
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.05)]`, `shadow-[0_0_0_1px_rgba(255,255,255,1)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 rounded-lg text-sm font-normal transition-colors bg-white text-black hover:bg-slate-200 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f1f5f9;
  --color-text: #000000;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f1f5f9',
    ink: '#000000',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #000000 and headlines in white Inter with tight leading
- **Do:** Use white pill buttons for the primary and nav actions
- **Do:** Fade the second headline line with a grey gradient as the one decorative text effect
- **Don't:** Don't add a second accent colour; the page is greyscale
- **Don't:** Don't use square corners on buttons or badges; keep them pill-shaped
- **Don't:** Don't use the grey gradient text in body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
