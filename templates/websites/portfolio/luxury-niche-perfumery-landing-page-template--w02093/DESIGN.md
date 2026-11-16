# Design system — Luxury Niche Perfumery Landing Page Template

`SN-W02093` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, spare template on a black ground with a thin divider line, shown as a navigation bar over a lower footer. The footer uses small grey-white text in three columns and a single green status dot [#34d399] for the system state. Surfaces are black with white type, and a gold accent [#c5a059] sits in the palette.

**Mood:** dark, spare, technical, quiet, unfinished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c5a059` · `#111827` · `#050505` · `#0a0a0a` · `#6b7280` · `#000000` · `#9ca3af` · `#fdfbf7` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 9px · body 10px
- **Weights in use:** light, semibold, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="w-full md:w-auto self-start mt-4 bg-[#C5A059] text-black px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors outline-none focus-visible:ring-4 focus-visible:ring-white/30 disabled:opacity-70 flex items-center justify-center gap-3 min-w-[240px]">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #c5a059;
  --color-accent-2: #34d399;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#c5a059',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the footer in columns of small text: an index, a connect list and a status line.
- **Do:** Use the green (#34d399) only for the live status indicator.
- **Do:** Replace the template placeholders in headings before publishing any text.
- **Don't:** Don't add a hero layout without a headline above the footer.
- **Don't:** Don't add light surfaces; the ground stays black.
- **Don't:** Don't use the gold (#c5a059) for the status indicator.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
