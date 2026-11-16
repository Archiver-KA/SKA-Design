# Design system — Trading Analytics Landing Page Template

`SN-W01051` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black SaaS hero has a centred white headline, where the final phrase Losing Mistakes is set in a lavender-indigo that carries the emphasis. The primary button is white with a small arrow, and the product sits below the fold as a framed dashboard window with traffic-light dots. A soft glow behind the headline is the one atmospheric element, and the indigo is kept for that phrase.

**Mood:** dark, focused, clean, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#18181b` · `#09090b` · `#6366f1` · `#71717a` · `#52525b` · `#f4f4f5` · `#e4e4e7` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="btn-glow bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-medium px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Video / media (`video-media`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasised headline phrase in indigo (#6366f1) and keep the rest of the headline white
- **Do:** Use a white primary button (#ffffff) with a small arrow
- **Do:** Frame product screenshots in a dark window with traffic-light dots
- **Don't:** Don't use indigo for buttons; they are white.
- **Don't:** Don't add more than one glow behind the hero
- **Don't:** Don't widen the lead paragraph beyond the headline; it stays narrow and centred

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
