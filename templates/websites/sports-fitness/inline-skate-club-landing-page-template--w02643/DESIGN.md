# Design system — Inline Skate Club Landing Page Template

`SN-W02643` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `id`

## Direction

A dark navy sport landing page in Indonesian. The uppercase headline is white, with the final phrase, RAIH JUARAMU, in a red-to-orange gradient. A red primary button and an outline button sit under a short grey paragraph, and a blue-toned portrait of a woman in red glasses fills the right side.

**Mood:** dark, energetic, uppercase, sporty, navy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#dc2626` · `#0f172a` · `#1e293b` · `#cbd5e1` · `#94a3b8` · `#020617` · `#475569` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-red-600/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-red-600/20 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. About (`about`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#1e293b',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase sans-serif, with the final phrase in the red gradient.
- **Do:** Use red (#dc2626) for the primary button and the nav button only.
- **Do:** Keep the portrait on the right in a rounded frame, with the copy on the left.
- **Don't:** Don't use a light page ground; the ground is dark navy.
- **Don't:** Don't set body copy in red.
- **Don't:** Don't use the blue-toned portrait as a background behind the text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
