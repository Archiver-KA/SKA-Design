# Design system — Samuel Hale

`SN-W00692` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A high-pressure, text-led landing page whose first screen is one long white headline on a near-black ground, set in a bold, centred sans, with a dark card waiting below. The headline runs to four lines and carries the offer, so type alone does the selling.

**Mood:** direct, high-pressure, bold, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3b82f6` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#a1a1aa` · `#60a5fa` · `#d4d4d8` · `#71717a` · `#22d3ee` · `#1e3a8a` · `#475569` · `#0ea5e9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-inner`, `shadow-[0_10px_40px_-10px_rgba(34,211,238,0.35)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. FAQ (`faq`)
8. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #3b82f6;
  --color-surface: #0f172a;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3b82f6',
    surface: '#0f172a',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the offer headline in bold white sans, centred, and keep it to a few lines
- **Do:** Use a dark card for the request form below the headline
- **Do:** Keep the first screen to type and one form, with no decorative imagery
- **Don't:** Don't set the headline in blue; it is white
- **Don't:** Don't add more than one call to action above the fold
- **Don't:** Don't let the headline run past four lines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
