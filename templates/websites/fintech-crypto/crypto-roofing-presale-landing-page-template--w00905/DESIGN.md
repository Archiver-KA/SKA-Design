# Design system — Crypto Roofing Presale Landing Page Template

`SN-W00905` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, technical landing page on near-black navy. IBM Plex Mono is used for the headline and labels, which gives the page a terminal-like, data-first tone. The first part of the headline is pale and the highlighted words switch to bright blue [#0052ff]. Stats sit in thin bordered cards along the bottom of the hero.

**Mood:** technical, monospace, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#dbeafe` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0052ff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#0052ff` · `#ffffff` · `#9ca3af` · `#6b7280` · `#111827` · `#1f2937` · `#030712` · `#06b6d4` · `#000000` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Mono
- **Body:** Inter
- **Loaded families:** IBM Plex Mono, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 64px · h2 30px · h3 24px · body 10px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(0,82,255,0.2)]`, `shadow-[0_0_15px_#0052FF]`, `shadow-[0_0_15px_rgba(0,82,255,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group ml-2 flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono font-medium text-white bg-[#0052FF]/10 border border-[#0052FF]/20 hover:bg-[#0052FF]/20 hover:border-[#0052FF]/40 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #111827;
  --color-text: #dbeafe;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #0052ff;
  --color-accent-2: #10b981;
  --font-display: "IBM Plex Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#111827',
    ink: '#dbeafe',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#0052ff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['IBM Plex Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline and labels in IBM Plex Mono
- **Do:** Use the blue (#0052ff) for highlighted headline words and the primary button only
- **Do:** Frame stats in thin hairline cards with small uppercase labels
- **Don't:** Don't set headlines in a rounded or playful sans
- **Don't:** Don't use the green (#10b981) accent in the hero
- **Don't:** Don't add light backgrounds to the stat cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
