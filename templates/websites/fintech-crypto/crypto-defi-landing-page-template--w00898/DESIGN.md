# Design system — Crypto DeFi Landing Page Template

`SN-W00898` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black loading screen with a lime (#ccff00) stacked-layers icon and a small monospaced label reading SYSTEM_INITIALIZING, centred on the screen. Lime is the single accent on the black ground, giving a dark, technical tone.

**Mood:** dark, technical, minimal, lime-accented, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ccff00` · `#ffffff` · `#6b7280` · `#1f2937` · `#000000` · `#9ca3af` · `#4b5563` · `#0a0a0a` · `#374151` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Sans
- **Body:** Geist Sans
- **Loaded families:** Geist Sans, Geist Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-8 py-4 bg-[#ccff00] hover:bg-[#b3e600] text-black font-semibold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Marquee (`marquee`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --color-accent: #ccff00;
  --color-accent-2: #f97316;
  --font-display: "Geist Sans", sans-serif;
  --font-body: "Geist Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#1f2937',
    accent: '#ccff00',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Geist Sans'], sans: ['Geist Sans'] },
} }
```

## Do and don't

- **Do:** Use lime (#ccff00) as the single accent on the icon and key elements
- **Do:** Set small labels in a monospaced face in caps
- **Do:** Keep loading screens black and centred, with one icon and one label
- **Don't:** Don't set the loader on a light ground
- **Don't:** Don't use lime as a large background field
- **Don't:** Don't add other accent colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
