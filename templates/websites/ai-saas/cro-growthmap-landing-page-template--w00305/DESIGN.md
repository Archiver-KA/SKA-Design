# Design system — CRO GrowthMap Landing Page Template

`SN-W00305` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark, sober landing page on near-black [#050505], with a bright green [#10b981] accent for the primary button, the eyebrow badge and the italic second headline line. The headline is set in Inter, and the green italic phrase is the only emphasis, so colour marks the key idea and nothing else. The copy is in Portuguese, and the hero is a narrow centred column under a top announcement bar.

**Mood:** sober, dark, data-driven, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#171717` · `#737373` · `#a3a3a3` · `#34d399` · `#d4d4d4` · `#0a0a0a` · `#000000` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 60px · h3 30px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-medium px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden border border-emerald-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Stats band (`stats`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#10b981) for the primary button and the italic headline phrase only
- **Do:** Keep the headline in Inter, white, with the second phrase italic and green
- **Do:** Keep body copy in a narrow centred column under the headline
- **Don't:** Don't use red (#ef4444) in the hero; it is for alerts only
- **Don't:** Don't set long copy wider than the headline column
- **Don't:** Don't add a light section between the dark sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
