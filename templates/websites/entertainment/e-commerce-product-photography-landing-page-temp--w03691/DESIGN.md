# Design system — E‑commerce Product Photography Landing Page Template

`SN-W03691` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A neutral white page with a heavy black sans-serif headline and the second line in mid grey, giving a clear two-tone hierarchy. Primary and secondary buttons are pill-shaped, one solid black and one outlined, and a small status pill above the headline carries a green dot. Everything else is black, white and grey, so the product photography supplies the colour.

**Mood:** clean, commercial, neutral, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#f4f4f5` · `#fafafa` · `#27272a` · `#52525b` · `#a1a1aa` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-zinc-200`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-transform active:scale-95 shadow-lg shadow-zinc-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Case studies (`case-studies`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #18181b;
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
    line: '#f4f4f5',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black sans-serif, with the second line in grey
- **Do:** Use solid black pills for the primary action and outlined pills for the secondary
- **Do:** Keep the page neutral so product photography provides the colour
- **Don't:** Don't add accent colours to the headlines
- **Don't:** Don't use the green beyond the status dot
- **Don't:** Don't put large coloured blocks behind the product images

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
