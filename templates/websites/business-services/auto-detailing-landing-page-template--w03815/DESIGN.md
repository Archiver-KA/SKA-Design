# Design system — Auto Detailing Landing Page Template

`SN-W03815` · business-services · dark mode · Sinera Atlas theme `route` · language `nl`

## Direction

A black hero with an uppercase headline set in three lines, where the middle phrase is in gold (#eab308) and the rest is white. Body copy is light grey at a comfortable width beneath it, and a solid gold button sits beside an outlined one. The contrast of gold on black gives the page a luxurious, decisive tone without extra ornament.

**Mood:** luxurious, dark, bold, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#000000` · `#d6d3d1` · `#a8a29e` · `#78716c` · `#1c1917` · `#292524` · `#57534e` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_30px_rgba(234,179,8,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full block text-center py-3 rounded-lg bg-yellow-500 text-black hover:bg-yellow-400 font-medium text-sm transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter, uppercase, in white, with the middle phrase in gold (#eab308).
- **Do:** Use gold (#eab308) for the highlighted phrase and the primary button only.
- **Do:** Keep body copy in light grey at a comfortable width under the headline.
- **Don't:** Don't set body copy in gold.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't place the gold button over a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
