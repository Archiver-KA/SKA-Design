# Design system — Digital Architect Portfolio Landing Page Template

`SN-W01977` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Operational, cyberpunk-leaning hero: a black ground with a three-line uppercase Inter headline, the first line in white and the emphasis words in a cyan (#06b6d4) to light-blue gradient. A thin cyan rule runs beside the intro copy, and small spaced uppercase labels in the nav and status pill make the tone read as a control panel. The cyan is the only accent.

**Mood:** operational, cyberpunk, sharp, cyan-led, blunt

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#22d3ee` · `#000000` · `#64748b` · `#cbd5e1` · `#94a3b8` · `#164e63` · `#facc15` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Syncopate
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(6,182,212,0.3)]`, `shadow-[0_0_30px_rgba(6,182,212,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 text-white px-6 py-3 rounded hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #22d3ee;
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
    surface: '#262626',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour only the emphasis words in cyan (#06b6d4) to light blue, leaving the first line white
- **Do:** Pair the intro copy with a thin cyan left rule
- **Do:** Keep nav labels small, uppercase and widely tracked
- **Don't:** Don't add yellow (#facc15) to the layout; it does not show in the first screen
- **Don't:** Don't set body copy in cyan; keep it to headline words and rules
- **Don't:** Don't set the headline in lowercase; it is uppercase throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
