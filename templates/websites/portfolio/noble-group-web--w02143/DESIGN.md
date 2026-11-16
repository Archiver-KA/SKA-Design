# Design system — Noble group web

`SN-W02143` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A premium real-estate investment page built on a deep maroon (#4c0013) and a warm gold (#e3a501). The hero is a maroon-tinted photograph of a residential building with large white headlines and a single gold button, and the content sections switch to white with maroon-black text (#2e000b). Gold is kept for calls to action and key figures, so the palette feels formal, financial and warm.

**Mood:** formal, warm, premium, financial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#2e000b` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e3a501` | Primary action and highlights |
| Second accent | `#4c0013` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e3a501` · `#4c0013` · `#6b7280` · `#9ca3af` · `#e5e7eb` · `#2e000b` · `#f3f4f6` · `#f9fafb` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Roboto
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_20px_40px_rgba(76,0,19,0.08)]`, `shadow-[0_2px_10px_rgba(0,0,0,0.03)]`
- **Content width:** `max-w-[1400px]`, `max-w-[1800px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="mt-8 w-full group/btn flex items-center justify-between px-5 py-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-[#4C0013] hover:border-gray-300 hover:shadow-sm transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. 3D / canvas scene (`3d-canvas`)
6. Feature grid (`features`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #2e000b;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #e3a501;
  --color-accent-2: #4c0013;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#2e000b',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#e3a501',
    accent2: '#4c0013',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use gold (#e3a501) only for the primary call to action and key figures.
- **Do:** Keep the hero photograph under a maroon (#4c0013) overlay so white headlines stay legible.
- **Do:** Set body and headings in maroon-black (#2e000b) on white sections.
- **Don't:** Don't use gold for body text or long links.
- **Don't:** Don't remove the maroon overlay from the hero photograph.
- **Don't:** Don't put white text on the gold buttons; keep the dark label.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
