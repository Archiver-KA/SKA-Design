# Design system — Trucking & Logistics Landing Page Template

`SN-W04118` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy hero on #0f172a with a large white sans headline, where the second line drops to a muted slate (#94a3b8). An indigo (#6366f1) primary button sits beside a dark outline button, and small uppercase tags sit above the headline with a coloured dot. The result is modern and sober, with indigo kept to the action.

**Mood:** sober, modern, dark, steady, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#94a3b8` · `#64748b` · `#0f172a` · `#020617` · `#cbd5e1` · `#475569` · `#818cf8` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #020617;
  --color-text: #f5f5f5;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #34d399;
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
    surface: '#020617',
    ink: '#f5f5f5',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in slate (#94a3b8) for a two-tone headline
- **Do:** Use indigo (#6366f1) for the primary button only
- **Do:** Place small uppercase tags above the headline with a coloured dot
- **Don't:** Don't use indigo for large background areas
- **Don't:** Don't set body copy in full-strength white
- **Don't:** Don't add more than two button styles in one hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
