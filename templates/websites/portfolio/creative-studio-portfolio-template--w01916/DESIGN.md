# Design system — Creative Studio Portfolio Template

`SN-W01916` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale page with one centred block: a hatched circle behind a large bold serif name, a small tracked eyebrow above it in red-tinted caps, and a grey sans subtitle. The serif name is the one display voice, and the hatched circle is a faint backdrop, so the page feels illustrative and quiet.

**Mood:** quiet, illustrative, minimal, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#475569` · `#2563eb` · `#e2e8f0` · `#f8fafc` · `#cbd5e1` · `#1d4ed8` · `#eff6ff` · `#0f172a` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 30px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded` (4px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-14`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #cbd5e1;
  --color-accent: #f43f5e;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#cbd5e1',
    accent: '#f43f5e',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in a large bold serif in dark navy (#0f172a).
- **Do:** Use red-tinted caps (#f43f5e) for the eyebrow only.
- **Do:** Keep the hatched circle behind the name as a faint texture.
- **Don't:** Don't use the red for headlines or buttons.
- **Don't:** Don't set the subtitle in serif; it stays sans.
- **Don't:** Don't fill the hatched circle with colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
