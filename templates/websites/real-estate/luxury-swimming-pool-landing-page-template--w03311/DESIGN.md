# Design system — Luxury Swimming Pool Landing Page Template

`SN-W03311` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photographic pool hero with a large serif headline in white, the middle word set in italic and a small tracked uppercase line beneath it. Blue (#2563eb) is the accent: it fills the rating badge and the top border of the consultation card that starts below the first screen. The top utility bar is kept small and plain, with phone and email set in one line.

**Mood:** technical, bright, trustworthy, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#2563eb` · `#0f172a` · `#1e293b` · `#3b82f6` · `#334155` · `#60a5fa` · `#e2e8f0` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 14px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-slate-800 text-white font-medium text-sm py-3 px-6 hover:bg-blue-900 transition flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. FAQ (`faq`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Stats band (`stats`)
8. About (`about`)
9. Case studies (`case-studies`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #2563eb;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#334155',
    accent: '#2563eb',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at large size in white, with the middle word in italic.
- **Do:** Use blue (#2563eb) for rating badges and the top border of the consultation card.
- **Do:** Keep the top utility bar small and plain, with contact details on one line.
- **Don't:** Don't set blue text over the photograph; blue is used on badges and borders.
- **Don't:** Don't add more than one accent colour to the hero.
- **Don't:** Don't darken the overlay so far that the pool detail disappears.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
