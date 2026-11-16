# Design system — HomeReady Property Clearing & Removal Template

`SN-W03250` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A confident, service-led hero on a deep navy ground (#0f172a) with a heavy white sans headline centred over three lines. Two buttons sit side by side: a muted green (#62ad75) for the call and a solid blue (#2563eb) for the quote. A thin green-outlined pill above the headline carries the guarantee message, and the header keeps a light grey bar. Colour works as a clear pair of action buttons rather than decoration.

**Mood:** confident, service-led, direct, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#62ad75` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563eb` · `#64748b` · `#e2e8f0` · `#f8fafc` · `#94a3b8` · `#f1f5f9` · `#3168ff` · `#62ad75` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-blue-600/20`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex w-full justify-center text-base sm:w-auto px-6 py-3.5 bg-blue-600 text-white rounded-xl border border-blue-500 shadow-lg shadow-blue-900/30 hover:bg-blue-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-semibold tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Call to action (`cta`)
3. Navigation bar (`navbar`)
4. Menu list (`menu-list`)
5. Hero (`hero`)
6. Feature grid (`features`)
7. Services (`services`)
8. Gallery / portfolio (`gallery-portfolio`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #62ad75;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#62ad75',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, centred, over three lines.
- **Do:** Pair the muted green (#62ad75) call button with the solid blue (#2563eb) quote button.
- **Do:** Use a small green-outlined pill label above the headline for the guarantee message.
- **Don't:** Don't add more than two action colours; the green and blue pair is the set.
- **Don't:** Don't use a light page ground for the hero; it sits on deep navy.
- **Don't:** Don't set the headline in a light weight; it reads heavy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
