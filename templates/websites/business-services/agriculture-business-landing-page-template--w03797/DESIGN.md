# Design system — Agriculture Business Landing Page Template

`SN-W03797` · business-services · light mode · Sinera Atlas theme `route` · language `cs`

## Direction

A centred hero over a grey-toned photograph, with a large white serif headline stacked in two lines above a short sans-serif paragraph. A single white pill button sits at the centre of the hero, and a deep green (#164e38) pill marks the navigation call to action. The grey overlay keeps the composition restrained, and the rounded buttons soften the page.

**Mood:** restrained, traditional, centred, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f2ea` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#164e38` | Primary action and highlights |
| Second accent | `#164e38` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f5f2ea` · `#d4b886` · `#164e38`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2 bg-agro-primary text-white text-xs uppercase tracking-widest font-medium rounded-full hover:bg-agro-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-agro-primary/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Bento grid (`bento-grid`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f2ea;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #164e38;
  --color-accent-2: #164e38;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f2ea',
    ink: '#111111',
    line: '#ffffff',
    accent: '#164e38',
    accent2: '#164e38',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in a serif face at a large size, in white, over a grey overlay.
- **Do:** Use deep green (#164e38) for the navigation call to action only.
- **Do:** Make the hero button a white pill with dark text.
- **Don't:** Don't use a bright colour over the grey overlay.
- **Don't:** Don't left-align the centred hero headline.
- **Don't:** Don't set body copy in the serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
