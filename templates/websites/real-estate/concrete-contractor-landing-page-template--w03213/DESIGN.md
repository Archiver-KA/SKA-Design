# Design system — Concrete Contractor Landing Page Template

`SN-W03213` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A centred, photograph-led hero over a darkened site photo, with a white sans headline set in two tight lines and a grey subline. Colour is kept to white, near-black and muted grey; the blue status dot in the small pill is the only hint of accent on the first screen. The look is corporate and clean, with a solid white primary button beside a dark outlined secondary.

**Mood:** corporate, clean, photographic, steady

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#2563eb` · `#ffffff` · `#64748b` · `#0f172a` · `#475569` · `#f3f4f6` · `#e2e8f0` · `#3b82f6` · `#bfdbfe` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-900/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f3f4f6;
  --color-accent: #2563eb;
  --color-accent-2: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f3f4f6',
    accent: '#2563eb',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans in two tight lines, centred over a darkened photo.
- **Do:** Use the blue (#2563eb) only for small status dots and rare highlights.
- **Do:** Keep buttons as a solid white primary and a dark or outlined secondary.
- **Don't:** Don't set the hero on a light background; the photo overlay is part of the look.
- **Don't:** Don't add decorative glow or blurred shapes; the page is flat apart from the photo.
- **Don't:** Don't use the orange (#ea580c) as a fill; it does not appear on the first screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
