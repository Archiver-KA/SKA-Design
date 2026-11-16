# Design system — Luxury Chauffeur Landing Page Template

`SN-W03079` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A black chauffeur page with a large white sans headline stacked over four lines on the left, and a white booking card on the right. Yellow (#facc15) is the single accent: it fills the Explore button and the active tab in the booking form, while the Reserve button is solid black on white. The contrast between the black hero and the white form gives the page its punch.

**Mood:** bold, high-contrast, premium, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#facc15` · `#ffffff` · `#9ca3af` · `#000000` · `#e5e7eb` · `#6b7280` · `#111827` · `#111111` · `#d1d5db` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 18px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="bg-[#facc15] text-black px-8 py-4 rounded-lg font-medium text-xl hover:bg-[#eab308] transition-colors shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Logo cloud (`logo-cloud`)
5. Articles (`blog-articles`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #e5e7eb;
  --color-accent: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#e5e7eb',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#facc15) for the primary button and the active tab only
- **Do:** Set the headline in large white sans with tight line spacing
- **Do:** Keep the booking form in a white card with black primary action
- **Don't:** Don't use yellow for body text on white
- **Don't:** Don't use the black surface (#000000) for the form card; it is white
- **Don't:** Don't stack more than one yellow element in the form

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
