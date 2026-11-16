# Design system — Sports Fantasy Scores Landing Page Template

`SN-W02680` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Three phone-sized app screens on a dark, translucent charcoal ground, shown side by side. Cards use soft glass-like surfaces with white headings, grey secondary text and a white pill button for the main action. A bottom tab bar repeats across the screens, and the palette is almost entirely neutral, so the content carries the design.

**Mood:** neutral, app-like, glassy, dark, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#020617` · `#cbd5e1` · `#e2e8f0` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 22px · h3 20px · body 15px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-slate-500/10`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-1`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="shrink-0 rounded-full bg-gradient-to-br px-4 py-2 text-sm font-medium ring-1 transition from-slate-500/20 text-slate-300 ring-slate-400/20 hover:ring-slate-400/30 to-slate-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Call to action (`cta`)
2. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
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
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use dark translucent cards with white headings and grey secondary text.
- **Do:** Make the main action a white pill button with dark text.
- **Do:** Keep a bottom tab bar on app screens with icon and label.
- **Don't:** Don't use the dark navy text (#0f172a) on the dark cards.
- **Don't:** Don't add a bright accent colour for scores or status.
- **Don't:** Don't use square corners on the primary action.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
