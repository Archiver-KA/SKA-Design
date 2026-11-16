# Design system — Law Firm Landing Page Template

`SN-W03978` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A confident, high-contrast law firm hero on a dark navy ground, with heavy sans-serif headline lines in white and one orange-highlighted phrase at the end. The consultation form sits on a white card to the right, so the main action is always in view. Corners are softly rounded and the layout is plain and direct, which suits a firm that wants to read as decisive rather than decorative.

**Mood:** bold, direct, high-contrast, decisive, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#f1f5f9` · `#f8fafc` · `#e2e8f0` · `#475569` · `#1e293b` · `#334155` · `#94a3b8` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 12px · h3 30px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. About (`about`)
6. Testimonials (`testimonials`)
7. Map / location (`map-location`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #facc15;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines heavy and sans-serif, in white, with one orange highlight phrase per hero
- **Do:** Place the consultation form in a white card beside the headline so the action stays visible
- **Do:** Use the dark navy (#0f172a) as the ground of the first screen
- **Don't:** Don't set the hero on a light background; the dark ground is part of the look
- **Don't:** Don't add a second highlight colour to the headline
- **Don't:** Don't set the headline in thin weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
