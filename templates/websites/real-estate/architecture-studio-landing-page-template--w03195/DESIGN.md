# Design system — Architecture Studio Landing Page Template

`SN-W03195` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark navy studio page with a blurred architectural photograph behind a centred white serif headline. The word Today is set in amber, the only highlight colour, and amber buttons sit beside an outlined secondary button. The layout is symmetric, with a deep navy ground that keeps the warm amber as the single point of contrast.

**Mood:** dark, warm, confident, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#f59e0b` · `#ffffff` · `#020617` · `#0f172a` · `#94a3b8` · `#cbd5e1` · `#fbbf24` · `#64748b` · `#334155` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(245,158,11,0.3)]`, `shadow-[0_0_30px_rgba(245,158,11,0.5)]`, `shadow-[0_0_20px_rgba(22,163,74,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-slate-900 transition-all duration-200 bg-amber-500 border border-transparent rounded-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Case studies (`case-studies`)
7. Logo cloud (`logo-cloud`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#f59e0b) for one highlight word and the primary buttons
- **Do:** Set the headline in white on the navy hero, centred
- **Do:** Keep the secondary button as a thin outline over the photograph
- **Don't:** Don't use amber for more than one highlight per section
- **Don't:** Don't place light text on the amber buttons; use dark text
- **Don't:** Don't remove the photograph behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
