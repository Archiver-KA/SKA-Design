# Design system — Construction & Demolition Services Landing Page Template

`SN-W03214` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A white, editorial-technical hero with a black sans wordmark and a two-tone headline, the first line in near-black and the second in muted slate, which sets the tone. Yellow (#eab308) is used only for the single quote button in the navigation, and the copy sits in a narrow left column. Generous white space and a faint grid texture keep the page precise rather than loud.

**Mood:** precise, technical, quiet, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#475569` · `#ffffff` · `#eab308` · `#64748b` · `#94a3b8` · `#f8fafc` · `#facc15` · `#e2e8f0` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-sm text-slate-900 bg-yellow-400">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #eab308;
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
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline as two lines, the first near-black and the second in muted slate (#94a3b8).
- **Do:** Use the yellow (#eab308) only for the navigation quote button.
- **Do:** Keep the hero copy in a narrow left column with generous white space around it.
- **Don't:** Don't fill the page with yellow; it is a single accent on the first screen.
- **Don't:** Don't add heavy shadows or cards; the look relies on the grid texture and whitespace.
- **Don't:** Don't set the second headline line in near-black; the two-tone contrast is part of it.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
