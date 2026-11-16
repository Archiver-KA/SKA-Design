# Design system — WordPress & SEO Agency Landing Page Template

`SN-W01740` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark developer-agency page on near-black [#020204] with a soft violet [#a855f7] glow behind the hero, and code blocks and stat cards as the main visual props. The stat card shows a large white figure beside a violet bar, and the terminal block uses a monospaced code style. Violet is the only accent, used for glows, bars and highlights, while the type stays white and grey.

**Mood:** dark, technical, glowing, developer, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#475569` · `#94a3b8` · `#64748b` · `#c084fc` · `#9333ea` · `#0a0a0a` · `#0f0f11` · `#020204`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-purple-900/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #0a0a0a;
  --color-text: #cbd5e1;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #a855f7;
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
    background: '#020204',
    surface: '#0a0a0a',
    ink: '#cbd5e1',
    muted: '#475569',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#a855f7) for glows, chart bars and one highlight per section only
- **Do:** Present code examples in dark terminal-style blocks with monospaced type
- **Do:** Set headlines in white sans and stat figures large in white
- **Don't:** Don't set body copy in violet
- **Don't:** Don't use light backgrounds; the page stays near-black
- **Don't:** Don't add photographs to the hero; it relies on code and stat cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
