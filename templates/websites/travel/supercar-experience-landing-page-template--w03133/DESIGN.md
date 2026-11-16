# Design system — Supercar Experience Landing Page Template

`SN-W03133` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, high-contrast car experience page on a near-black navy ground (#020617) with bold white display type. Red (#ef4444) is the one accent: it colours the second line of the headline and the primary cues, so the page reads like a showroom. A faint dark photograph sits behind the copy, and the palette stays to red plus neutral greys.

**Mood:** dark, high-contrast, bold, automotive, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#ef4444` · `#020617` · `#cbd5e1` · `#0f172a` · `#94a3b8` · `#dc2626` · `#22c55e` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-red-900/10`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 px-4 rounded-full transition-all border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Booking form (`booking`)
5. Timeline (`timeline`)
6. Team (`team`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f5f5f5;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f5f5f5',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a heavy sans at large size, with the second line in red (#ef4444)
- **Do:** Use red only for the headline accent and the main call-to-action
- **Do:** Keep the navy ground (#020617) behind sections; use #0f172a for cards
- **Don't:** Don't use the brighter red (#dc2626) as a full-page background; it is a text and cue colour
- **Don't:** Don't use light card fills on the dark ground
- **Don't:** Don't add a second accent hue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
