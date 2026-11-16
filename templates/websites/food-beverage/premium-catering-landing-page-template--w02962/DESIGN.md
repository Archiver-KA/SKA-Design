# Design system — Premium Catering Landing Page Template

`SN-W02962` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

A rich catering page on a deep warm brown ground (#563421) with cream (#ede3d1) serif headlines and the second line in italic. The cream pill button is the only bright shape, and a small brown label sits above the headline. The palette is warm and tonal, so the page reads as a formal event menu rather than a loud promotion.

**Mood:** warm, formal, tonal, celebratory

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#563421` | Page ground |
| Text | `#ede3d1` | Headings and primary copy |
| Accent | `#ede3d1` | Primary action and highlights |

Palette by frequency of use: `#563421` · `#ede3d1` · `#ffffff` · `#a67c52` · `#412618` · `#3a2012`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-premium-hover`, `shadow-premium`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-[#563421] text-[#EDE3D1] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#412618] transition-all duration-300 hover:-translate-y-[1px] shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #563421;
  --color-text: #ede3d1;
  --color-accent: #ede3d1;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#563421',
    ink: '#ede3d1',
    accent: '#ede3d1',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif in cream (#ede3d1) with the second line in italic
- **Do:** Use a cream pill for the primary button and keep it the only light fill
- **Do:** Put small labels above headlines in a dark brown pill
- **Don't:** Don't use a light page ground for the hero
- **Don't:** Don't set body copy in the serif
- **Don't:** Don't add a second bright colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
