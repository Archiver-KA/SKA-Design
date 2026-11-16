# Design system — Video Collaboration SaaS Landing Page Template

`SN-W00807` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A friendly light healthcare page with a bold near-black headline whose final word, 'you', is set in blue (#2563eb). The hero floats photographic profile cards and a booking card over a white ground, with a dark video tile for contrast. Pill-shaped labels and rounded cards keep it approachable, and a search bar sits low in the hero.

**Mood:** friendly, clear, light, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563eb` · `#0f172a` · `#64748b` · `#f1f5f9` · `#f8fafc` · `#94a3b8` · `#475569` · `#e2e8f0` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center text-[14px] font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-600/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Booking form (`booking`)
5. Team (`team`)
6. Integrations (`integrations`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #facc15;
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
    accent: '#2563eb',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the last word of the headline in blue (#2563eb)
- **Do:** Float profile and booking cards over the hero at slight angles
- **Do:** Use pill-shaped labels for status and category
- **Don't:** Don't use blue for large backgrounds
- **Don't:** Don't add more than one dark card to the hero
- **Don't:** Don't style the search bar as dark on the light page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
