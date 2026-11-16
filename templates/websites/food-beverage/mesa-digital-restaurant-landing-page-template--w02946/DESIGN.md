# Design system — Mesa Digital Restaurant Landing Page Template

`SN-W02946` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A plain, professional services page on a white ground (#ffffff) with a near-black pill button (#1f2937) as the main action. The hero headline is heavy sans with the second line in green (#16a34a), which is the one accent on the page. Body copy is a muted grey, and the soft grey wash behind the hero adds depth without shadows.

**Mood:** clean, professional, local, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f3f4f6` · `#6b7280` · `#f9fafb` · `#000000` · `#e5e7eb` · `#1f2937` · `#4b5563` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 30px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 text-sm font-medium text-white bg-pridor-emerald px-4 py-2 rounded-full hover:bg-black transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second line of the hero headline in green (#16a34a) and keep it to one line
- **Do:** Use the near-black pill (#1f2937) for the primary button and an outline pill for the secondary
- **Do:** Keep body text in muted grey (#6b7280) at a comfortable size
- **Don't:** Don't use the green for buttons; it marks emphasis text
- **Don't:** Don't add a second accent colour
- **Don't:** Don't write headline copy in the grey; it stays near-black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
