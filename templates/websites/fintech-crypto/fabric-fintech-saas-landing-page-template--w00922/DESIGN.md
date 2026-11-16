# Design system — Fabric Fintech SaaS Landing Page Template

`SN-W00922` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black, editorial fintech hero that sets headlines in an italic serif, with the first line in white and the second in grey. The second headline is right-aligned against a black field with faint vertical grid lines. Small uppercase mono labels act as section markers above the headline, tying the page to a technical register. Cyan appears only in small status dots and markers.

**Mood:** editorial, technical, dark, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#22d3ee` · `#06b6d4` · `#000000` · `#4b5563` · `#e5e7eb` · `#818cf8` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 78px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_2px_0_#0e7490]`, `shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_4px_0_#0e7490,0_10px_15px_-3px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-semibold tracking-wide text-white hover:bg-white/10 transition-all duration-300 overflow-hidden group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0f0f0f;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #818cf8;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0f0f0f',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in an italic serif with the second line in grey
- **Do:** Use small uppercase mono labels as section markers
- **Do:** Keep cyan to status dots and small markers only
- **Don't:** Don't set body copy in the serif; it is reserved for headlines
- **Don't:** Don't set the headline in a sans; the serif is part of the identity
- **Don't:** Don't turn the faint grid lines into solid panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
