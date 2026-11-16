# Design system — Library Technology Systems Template

`SN-W00492` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A conservative enterprise page on a pale grey-blue ground (#f8fafc) with a dark navy (#0f172a) top bar and dark navy buttons. Headlines are heavy Inter in navy, with the second line in slate grey (#64748b) to show a quieter sub-point. The layout is orderly and corporate, with a large empty visual slot on the right that shows where a product image would go.

**Mood:** corporate, orderly, trustworthy, quiet, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#64748b` · `#2563eb` · `#ffffff` · `#e2e8f0` · `#f8fafc` · `#f1f5f9` · `#94a3b8` · `#cbd5e1` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-800 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Code / terminal (`code-terminal`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use navy (#0f172a) for buttons, the top bar and headline emphasis.
- **Do:** Set the second headline line in slate grey (#64748b) for contrast.
- **Do:** Keep the blue (#2563eb) for small links and status tags only.
- **Don't:** Don't use gradients or glows; the page is flat.
- **Don't:** Don't set the whole page on a dark background.
- **Don't:** Don't add decorative imagery where the layout reserves a visual slot.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
