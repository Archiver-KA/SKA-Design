# Design system — Luxury Test Drive Landing Page Template

`SN-W03097` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A white hero with a heavy sans-serif headline in two tones: Drive. in near-black and Your Dream. in mid grey (#71717a). The only colour comes from a red supercar photograph on the right, so the page is neutral and the car supplies the energy. Controls are rounded tabs and a near-black Book Now button.

**Mood:** neutral, bold, automotive, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#e4e4e7` · `#dc2626` · `#f4f4f5` · `#71717a` · `#fafafa` · `#a1a1aa` · `#52525b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-[1280px]`, `max-w-[1240px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 rounded-2xl text-sm font-semibold transition-all hover:scale-[1.02] shadow-xl bg-red-600 text-white hover:bg-red-700 shadow-red-200/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Stats band (`stats`)
6. Comparison (`comparison`)
7. Team (`team`)
8. FAQ (`faq`)
9. Footer (`footer`)
10. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --color-accent-2: #16a34a;
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
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter in two tones, near-black then mid grey (#71717a)
- **Do:** Let the photograph carry the colour and keep the interface neutral
- **Do:** Use the near-black (#18181b) pill for the Book Now button and other primary actions
- **Don't:** Don't add coloured UI elements; the red (#dc2626) appears only in the photograph
- **Don't:** Don't tint the page background pink
- **Don't:** Don't set the headline in a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
