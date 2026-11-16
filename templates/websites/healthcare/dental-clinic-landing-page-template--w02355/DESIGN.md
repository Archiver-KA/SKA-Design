# Design system — Dental Clinic Landing Page Template

`SN-W02355` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A restrained dental page on off-white (#fafafa) with a very large bold sans headline, where the first line is near-black and the second is soft grey (#9ca3af). Buttons are near-black and white pills, so colour is almost absent. The centred hero and generous space make the page calm and editorial.

**Mood:** restrained, monochrome, calm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#000000` · `#f3f4f6` · `#e5e7eb` · `#fafafa` · `#9ca3af` · `#f9fafb` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Team (`team`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #111827;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#111827',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large bold sans, with the second line in soft grey (#9ca3af).
- **Do:** Make the primary button a solid near-black (#111827) pill and the secondary white.
- **Do:** Centre the hero copy and keep it to one headline, one sub-line and two buttons.
- **Don't:** Don't use colour for controls; the green status dot is the only hue on the first screen.
- **Don't:** Don't use a serif for headlines.
- **Don't:** Don't add photography to the hero; the type carries the first screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
