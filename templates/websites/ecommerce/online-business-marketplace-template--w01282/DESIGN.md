# Design system — Online Business Marketplace Template

`SN-W01282` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, trust-led marketplace on a deep navy ground (#0f172a), with a laptop photograph under a navy overlay. The headline is a large Playfair Display serif in white, and one italic word is set in green to carry the brand idea. A filled green primary button sits beside a white outline button, under a short plain paragraph in DM Sans.

**Mood:** trustworthy, editorial, dark, serious, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#737373` · `#e5e5e5` · `#525252` · `#f5f5f5` · `#a3a3a3` · `#fafafa` · `#1e293b` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-28`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-6 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. About (`about`)
6. Services (`services`)
7. Feature grid (`features`)
8. Articles (`blog-articles`)
9. Process / steps (`how-it-works`)
10. Contact form (`contact-form`)
11. Testimonials (`testimonials`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #1e293b;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#1e293b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at large size, white on navy
- **Do:** Use one italic highlight word per headline in the green accent
- **Do:** Pair one filled primary button with one white outline button, never two filled buttons
- **Don't:** Don't add a light page ground; the hero is navy with a dark photo
- **Don't:** Don't use the slate (#1e293b) as an accent; it is a surface tone
- **Don't:** Don't set body copy in the serif; DM Sans carries the paragraphs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
