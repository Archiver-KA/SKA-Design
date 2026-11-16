# Design system — EXO9 Observatory Landing Page Template

`SN-W03466` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, space-themed museum page on deep navy (#020617) with a large white wordmark whose final character is set in cyan (#22d3ee). Faint line art, including a thin dome arc, sits behind the hero, and the cyan returns only in small icons and the primary action. Heavy sans for titles and light sans for captions keep the hierarchy clear.

**Mood:** futuristic, calm, dark, scientific, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6ee7b7` · `#0f172a` · `#34d399` · `#06b6d4` · `#94a3b8` · `#22d3ee` · `#f8fafc` · `#10b981` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white text-slate-900 hover:bg-white/90 transition font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Schedule (`schedule-agenda`)
6. Bento grid (`bento-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#22d3ee) for the wordmark's final character and one highlight per section
- **Do:** Set the hero wordmark in heavy Inter at display size
- **Do:** Keep the background navy (#020617) with faint line art only
- **Don't:** Don't use bright cyan for body text
- **Don't:** Don't add gradient fills to the wordmark
- **Don't:** Don't put light panels on the navy ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
