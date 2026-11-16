# Design system — Silvia Ciccaglione - HR Strategist & Mentor

`SN-W02229` · portfolio · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A bright, professional coaching page on a white ground with a thin blue announcement bar across the top. Headlines are dark navy with the key phrase set in bold blue (#2563eb), and a solid blue primary button sits beside a white outlined secondary. A rounded portrait on the right and a green floating chat button add warmth. Blue carries the emphasis and the palette stays cool.

**Mood:** bright, professional, trustworthy, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e3a8a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#2563eb` · `#ffffff` · `#0f172a` · `#475569` · `#4b5563` · `#f8fafc` · `#64748b` · `#e2e8f0` · `#f1f5f9` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** DM Sans, Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mobile-link bg-blue-600 text-white py-3 rounded-full font-bold mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. About (`about`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Font Awesome

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1e3a8a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #facc15;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#1e3a8a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#facc15',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in bold blue (#2563eb), not the whole line
- **Do:** Keep the primary button solid blue (#2563eb) with white text and the secondary outlined
- **Do:** Use the blue announcement bar for offers only
- **Don't:** Don't use the pale blue (#dbeafe) as the page ground; the ground is white
- **Don't:** Don't use more than two blues in one section
- **Don't:** Don't colour the whole headline blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
