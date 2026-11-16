# Design system — Spectrum Landing Page

`SN-W00729` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic event hero: a near-black navy ground with a large chrome-like gradient wordmark, SPECTRUM, in silver and white. A thin warm rule sits under it, and grey body copy runs in a narrow column. A marquee of large outlined words crosses the bottom edge, so the layout reads as event branding.

**Mood:** cinematic, dark, polished, bold, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05080f` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffd400` · `#ffffff` · `#05080f` · `#cbd5e1` · `#94a3b8` · `#475569` · `#64748b` · `#ef4444` · `#facc15` · `#fde047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Oswald, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 160px · h2 60px · h3 60px · body 10px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_-3px_rgba(220,38,38,0.4)]`, `shadow-[0_0_20px_-5px_rgba(255,212,0,0.3)]`, `shadow-[0_0_10px_#FFD400]`
- **Content width:** `max-w-[80%]`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="w-full md:w-auto group relative px-8 py-4 bg-[#FFD400] overflow-hidden cursor-none-target transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(255,212,0,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Call to action (`cta`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #05080f;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #ef4444;
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
    background: '#05080f',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in very large silver-gradient caps with a thin warm rule beneath.
- **Do:** Keep body copy in a narrow grey column at small size.
- **Do:** Run an outlined-word marquee along the bottom edge of the hero.
- **Don't:** Don't put yellow behind this hero; the ground is dark.
- **Don't:** Don't set the wordmark in flat white; keep the metallic gradient.
- **Don't:** Don't add more than one rule or divider under the wordmark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
