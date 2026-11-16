# Design system — Monospace iOS Hero Landing Page Template

`SN-W00550` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, technical hero on a pale grey ground (#f9fafb) set entirely in JetBrains Mono. The headline is uppercase, with the first line near-black and the second in mid grey, so emphasis shifts within the line. A small terminal window with three dots shows a build command and serves as the page's visual. The palette is restrained, with green in the accents.

**Mood:** technical, precise, monospace, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#000000` · `#e5e7eb` · `#ffffff` · `#6b7280` · `#f9fafb` · `#9ca3af` · `#f3f4f6` · `#1f2937` · `#111827` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 30px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-black text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #22c55e;
  --color-accent-2: #facc15;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#22c55e',
    accent2: '#facc15',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Set all headings and body text in JetBrains Mono
- **Do:** Set headlines in uppercase, with the second line in grey for contrast
- **Do:** Show code in a small terminal window with three window dots
- **Don't:** Don't add a serif or humanist sans-serif to the page
- **Don't:** Don't add decorative illustration; the terminal is the visual
- **Don't:** Don't set headlines in lowercase; the uppercase is part of the voice

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
