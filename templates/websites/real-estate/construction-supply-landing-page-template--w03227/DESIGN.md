# Design system — Construction Supply Landing Page Template

`SN-W03227` · real-estate · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean, light supply-company page with a near-black sans headline, a slate second line, and a large photograph on the right with a small floating status card. The palette is slate and white, and the green (#22c55e) is used only for the live status dot. The two-column hero is structured and operational, with a small pill label above the headline setting the tone.

**Mood:** operational, clean, structured, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#94a3b8` · `#e2e8f0` · `#f8fafc` · `#64748b` · `#cbd5e1` · `#1e293b` · `#334155` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-slate-100`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Listings (`listings`)
5. Process / steps (`how-it-works`)
6. Case studies (`case-studies`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #334155;
  --color-accent: #1e293b;
  --color-accent-2: #22c55e;
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
    ink: '#475569',
    muted: '#64748b',
    line: '#334155',
    accent: '#1e293b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black sans, with the last line in slate grey (#94a3b8).
- **Do:** Use the green (#22c55e) only for live status dots and the dispatch card.
- **Do:** Keep a two-column hero: copy on the left, a rounded photograph and status card on the right.
- **Don't:** Don't use green for buttons or headlines; it signals status only.
- **Don't:** Don't add decorative shapes; the page relies on the photograph and type.
- **Don't:** Don't set the page on a dark ground; the look is light slate and white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
