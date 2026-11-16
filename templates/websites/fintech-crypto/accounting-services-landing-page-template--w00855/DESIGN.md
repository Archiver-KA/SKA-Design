# Design system — Accounting Services Landing Page Template

`SN-W00855` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean, light finance hero on white with a dark navy headline and a grey-blue second line, all set in Inter. A white form card with a blue primary button sits on the right, and a small status tag sits above the headline. Blue (#3b82f6) is the only accent, kept to the button and the tag, so the layout feels crisp and businesslike.

**Mood:** crisp, businesslike, clear, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#f1f5f9` · `#64748b` · `#3b82f6` · `#f8fafc` · `#ffffff` · `#94a3b8` · `#475569` · `#2563eb` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none transition-all shadow-sm flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #3b82f6;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#3b82f6',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#3b82f6) for the primary button and the status tag only
- **Do:** Set the headline in Inter in dark navy, with the second line in grey-blue
- **Do:** Place the enquiry form on a white card with a thin border on the right
- **Don't:** Don't set the page on pale blue; the ground is white
- **Don't:** Don't add a second accent colour to the form
- **Don't:** Don't fill large areas with blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
