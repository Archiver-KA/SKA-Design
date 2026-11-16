# Design system — Oceans of Andromeda Landing Page Template

`SN-W00608` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black, ambient landing page where the hero is a near-empty field of stars with a centred mint-green display headline. The first word sits in a sans and the second in an italic serif, both in mint (#34d399), and a small wide-tracked tagline sits below in dim green. Colour is confined to the headline, so the page feels quiet and cosmic, and the serif-italic contrast is the one recognisable move.

**Mood:** ambient, cosmic, quiet, dark, expressive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#064e3b` · `#10b981` · `#000000` · `#34d399` · `#ffffff` · `#05110f` · `#1a5c4a` · `#d1fae5` · `#020606` · `#022c22`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** EB Garamond
- **Loaded families:** EB Garamond, JetBrains Mono, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · body 16px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-widest`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="group relative px-8 py-6 rounded-sm bg-[#05110f] border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Code / terminal (`code-terminal`)
5. App download (`app-download`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-accent: #34d399;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "EB Garamond", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#e5e5e5',
    accent: '#34d399',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['EB Garamond'] },
} }
```

## Do and don't

- **Do:** Set the page ground to black (#000000) with a faint star field and no other fills.
- **Do:** Set the hero headline in mint (#34d399), mixing a sans first line with an italic serif second line.
- **Do:** Set the tagline in small, wide-tracked caps in a dim green.
- **Don't:** Don't use the dark green (#064e3b) as a fill.
- **Don't:** Don't add the yellow (#facc15) to the first screen.
- **Don't:** Don't set the body copy in mint; body copy is white or grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
