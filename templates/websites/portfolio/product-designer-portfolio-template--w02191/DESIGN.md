# Design system — Product Designer Portfolio Template

`SN-W02191` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

Bold dark minimal page: a black ground (#050505) with a large white Inter headline in Russian, the second line in grey (#a1a1aa). A small blue status pill and a dark outline button sit beside it, and a soft blue glow sits at the right edge. The blue (#00a3ff) is used sparingly on the eyebrow and dot; the rest stays neutral.

**Mood:** bold, dark, minimal, editorial, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00a3ff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0055ff` · `#00a3ff` · `#a1a1aa` · `#71717a` · `#52525b` · `#18181b` · `#050505` · `#3f3f46` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(0,85,255,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-8`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="magnetic interactive relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#0055FF] text-white font-medium text-sm overflow-hidden group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #00a3ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#00a3ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white Inter, with the second line in grey
- **Do:** Use the blue (#00a3ff) for the status dot and eyebrow only
- **Do:** Keep the outline button dark with a thin border
- **Don't:** Don't use the stored bright blue (#0055ff) as a page ground
- **Don't:** Don't put the blue glow behind text
- **Don't:** Don't use more than one accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
