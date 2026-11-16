# Design system — JARANAM CLUB Landing Page

`SN-W02424` · healthcare · light mode · Sinera Atlas theme `calm` · language `ko`

## Direction

The family outing page opens on a full-bleed rooftop-garden photograph with a warm brown-orange tint, so the photo sets the palette. The large white Korean headline is centred over the image, with a solid orange (#d97706) primary button and an outlined white secondary. A white strip along the bottom holds small labelled facts. The tone is warm, family-friendly and outdoors.

**Mood:** warm, family, outdoor, upbeat

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dcfce7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#f9f3e5` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#4a3427` · `#d97706` · `#ffffff` · `#f9f3e5` · `#b46005` · `#f0fdf4` · `#16a34a` · `#ffe0c8` · `#eff6ff` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Paperlogy
- **Body:** Paperlogy
- **Loaded families:** Paperlogy
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 16px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#D97706] rounded-full hover:bg-[#b46005] transition-colors shadow-sm cafe24">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Process / steps (`how-it-works`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. FAQ (`faq`)
8. Map / location (`map-location`)
9. Footer (`footer`)
10. Contact form (`contact-form`)
11. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #dcfce7;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #f9f3e5;
  --color-accent: #d97706;
  --color-accent-2: #16a34a;
  --font-display: "Paperlogy", sans-serif;
  --font-body: "Paperlogy", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#dcfce7',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#f9f3e5',
    accent: '#d97706',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Paperlogy'], sans: ['Paperlogy'] },
} }
```

## Do and don't

- **Do:** Use a warm-tinted full-bleed photograph as the hero background
- **Do:** Set the primary button in orange (#d97706) and the secondary as a white outline
- **Do:** Put key facts in a white strip along the bottom edge, with a small label above each number
- **Don't:** Don't cool the photo tint; the warm orange carries the page
- **Don't:** Don't set hero headlines in dark type over the photo; keep them white
- **Don't:** Don't add a cool accent over the hero; orange and the warm tint are the scheme

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
