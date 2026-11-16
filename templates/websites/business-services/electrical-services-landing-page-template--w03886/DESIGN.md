# Design system — Electrical Services Landing Page Template

`SN-W03886` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, industrial electrical page on black with heavy white uppercase headlines and a yellow primary button (#facc15). The second headline line is set in muted grey, and a tall photo of an electrician at work fills the right column. A small yellow label sits above the headline, and a thin rule runs under the intro copy.

**Mood:** industrial, bold, direct, dark, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#fff7ed` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#f3f4f6` · `#000000` · `#4b5563` · `#facc15` · `#374151` · `#1f2937` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Space Grotesk
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-brand-blue/5`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Logo cloud (`logo-cloud`)
5. Case studies (`case-studies`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #fff7ed;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#fff7ed',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#facc15',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans-serif, with the second line in muted grey
- **Do:** Use the yellow (#facc15) for the primary button and the small label
- **Do:** Place the photo in the right column as a tall rounded panel
- **Don't:** Don't use the yellow for body text or large backgrounds
- **Don't:** Don't set headlines in mixed case; they stay uppercase
- **Don't:** Don't put a light panel in the hero; the surface stays black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
