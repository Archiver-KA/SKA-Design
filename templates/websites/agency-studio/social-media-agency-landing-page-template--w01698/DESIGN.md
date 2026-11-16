# Design system — Social Media Agency Landing Page Template

`SN-W01698` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm beige page with a heavy dark headline and an italic serif line, 'unmissable.', set beneath it. The primary button is black with a light secondary alongside, and a phone-shaped portrait sits at the right edge, cropped at the bottom. Colour comes from the photograph, while the chrome stays neutral.

**Mood:** warm, editorial, neutral, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e3ddd7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#111827` · `#4b5563` · `#6b7280` · `#e3ddd7` · `#9ca3af` · `#f2f0ed` · `#1f2937` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Services (`services`)
5. Stats band (`stats`)
6. Logo cloud (`logo-cloud`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e3ddd7;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #3b82f6;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e3ddd7',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy dark sans, with the second line in italic serif.
- **Do:** Use black for the primary button and a light fill for the secondary.
- **Do:** Crop photography inside a rounded phone frame at the right edge of the hero.
- **Don't:** Don't add colour to the navigation or buttons.
- **Don't:** Don't use a drop shadow on the phone frame.
- **Don't:** Don't centre the headline; it is left-aligned.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
