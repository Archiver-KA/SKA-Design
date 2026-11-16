# Design system — Nexus Cyber Defense Grid Landing Page Template

`SN-W00581` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, sci-fi tactical page on black (#000000). The headline is a condensed sans in Rajdhani at large size, set in cream over the first line and amber (#ffab00) on the second. Amber outlined buttons, thin amber rules and navy-black panels give a HUD-like interface, and small status tags reuse the same amber. Orange is a signal for status and emphasis, not a page background.

**Mood:** sci-fi, tactical, condensed, high-contrast, hud-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#fff7ed` | Headings and primary copy |
| Muted text | `#fff7ed` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffab00` | Primary action and highlights |
| Second accent | `#0f1a24` | Supporting highlights |

Palette by frequency of use: `#ffab00` · `#ffffff` · `#fff7ed` · `#000000` · `#ff6d00` · `#0f1a24` · `#e65100` · `#5c3a0b` · `#1a2a3a` · `#d4a373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Rajdhani
- **Body:** Rajdhani
- **Loaded families:** Rajdhani, JetBrains Mono, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_10px_rgba(255,171,0,0.5)]`, `shadow-[0_0_8px_#FFAB00]`, `shadow-[0_0_5px_#FFAB00]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto bg-[#000000]/50 backdrop-blur-sm border border-[#D4A373]/40 px-8 py-3.5 text-xs font-mono tracking-widest uppercase flex justify-center items-center hover:text-[#FFAB00] hover:border-[#FFAB00]/40 transition-colors text-orange-50 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #fff7ed;
  --color-muted: #fff7ed;
  --color-border: #ffffff;
  --color-accent: #ffab00;
  --color-accent-2: #0f1a24;
  --font-display: "Rajdhani", sans-serif;
  --font-body: "Rajdhani", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#fff7ed',
    muted: '#fff7ed',
    line: '#ffffff',
    accent: '#ffab00',
    accent2: '#0f1a24',
  },
  fontFamily: { display: ['Rajdhani'], sans: ['Rajdhani'] },
} }
```

## Do and don't

- **Do:** Set headlines in condensed Rajdhani at large size, cream (#fff7ed) with amber (#ffab00) on the highlight.
- **Do:** Use amber outlines and small status tags for signals, with dark navy (#0f1a24) panels.
- **Do:** Keep the ground black (#000000) and separate content with thin amber rules rather than fills.
- **Don't:** Don't use the orange (#ff6d00) as the page background; it is a highlight only.
- **Don't:** Don't use large rounded corners on panels; buttons and panels stay near-square.
- **Don't:** Don't set body copy in amber; amber is for headings and status.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
