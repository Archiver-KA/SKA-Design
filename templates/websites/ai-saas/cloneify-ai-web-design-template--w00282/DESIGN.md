# Design system — Cloneify AI Web Design Template

`SN-W00282` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, restrained SaaS tool page on near-black (#0a0a0a): a large white headline with the second line set in a soft lavender gradient (#6366f1 family). The indigo is the single accent, carried by the Clone it button and the gradient line, while the input card uses a dark grey panel with a segmented tab control. Plain sans and generous grey space keep the page focused on the product form.

**Mood:** restrained, focused, dark, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#a3a3a3` · `#171717` · `#6366f1` · `#0a0a0a` · `#737373` · `#525252` · `#d4d4d4` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h3 14px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/40`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-7`

**Primary button**

```html
<a class="text-sm font-medium bg-white text-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-200 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #6366f1;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#262626',
    accent: '#6366f1',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #0a0a0a and the input panel in #171717
- **Do:** Use indigo (#6366f1) only for the primary Clone it button and the gradient headline line
- **Do:** Keep the segmented tabs as a dark control with the active tab in a lighter grey
- **Don't:** Don't use the green (#34d399) on buttons; it marks only the small status dot
- **Don't:** Don't add a second gradient beyond the indigo headline line
- **Don't:** Don't set the input placeholders in full white; keep them muted

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
