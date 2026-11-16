# Design system — CampusHub Marketplace Landing Page Template

`SN-W01117` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A light, plain layout sits on an off-white ground, with a white card, a blue primary action and a green heading line, all set in Inter. The content sits in a single column with soft corners, which suits a campus app more than a marketing site.

**Mood:** plain, light, friendly, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2f6bff` | Primary action and highlights |
| Second accent | `#44c071` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#f3f4f6` · `#2f6bff` · `#6b7280` · `#f9fafb` · `#9ca3af` · `#e5e7eb` · `#4b5563` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 18px · h3 14px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-blue-500/20`, `shadow-green-500/20`
- **Content width:** `max-w-[280px]`, `max-w-[240px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full bg-[#2F6BFF] hover:bg-blue-600 transition-colors active:scale-[0.98] rounded-xl py-3.5 text-white font-semibold text-lg tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Sign-in form (`auth-form`)
3. Newsletter signup (`newsletter`)
4. Navigation bar (`navbar`)
5. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #2f6bff;
  --color-accent-2: #44c071;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#2f6bff',
    accent2: '#44c071',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the layout to a single column inside a white card on the off-white ground
- **Do:** Use Inter for headings and form labels
- **Do:** Use the blue (#2f6bff) for primary action text only
- **Don't:** Don't add decorative imagery beyond the small illustration
- **Don't:** Don't use heavy shadows on the card; the page is flat
- **Don't:** Don't set the green heading at small sizes on white, where it reads weakly

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
