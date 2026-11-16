# Design system — Yoga Retreat Landing Page Template

`SN-W02696` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Retreat landing page built on a washed-out photograph of palm trees under a pale pink-white haze. The headline is a large classical serif in deep magenta (#be185d), with the second line set in white italic over the photo. Body copy is small and muted, so the page feels soft and atmospheric, with magenta carrying the accent.

**Mood:** atmospheric, romantic, soft, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdf4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#3e332a` | Headings and primary copy |
| Muted text | `#82756a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#be185d` | Primary action and highlights |

Palette by frequency of use: `#d4af37` · `#82756a` · `#ffffff` · `#fdf4f6` · `#fff8f5` · `#3e332a` · `#f3e5ab` · `#be185d` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-[0_20px_50px_-20px_rgba(62,51,42,0.05)]`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="text-xs uppercase tracking-widest bg-white/80 border border-[#D4AF37]/30 px-5 py-2 rounded-full hover:bg-[#FFF8F5] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Sign-in form (`auth-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdf4f6;
  --color-surface: #ffffff;
  --color-text: #3e332a;
  --color-muted: #82756a;
  --color-border: #ffffff;
  --color-accent: #be185d;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdf4f6',
    surface: '#ffffff',
    ink: '#3e332a',
    muted: '#82756a',
    line: '#ffffff',
    accent: '#be185d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a classical serif, with the key line in magenta (#be185d) over the pale haze.
- **Do:** Keep the hero photograph under a light pink-white wash so the magenta stays readable.
- **Do:** Use the muted brown (#82756a) for small uppercase kicker text above headlines.
- **Don't:** Don't use the gold (#d4af37) as the main accent; magenta is the accent.
- **Don't:** Don't place white italic text over the light haze without the wash; it disappears.
- **Don't:** Don't add hard-edged colour blocks over the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
