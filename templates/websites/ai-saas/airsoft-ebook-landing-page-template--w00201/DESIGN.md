# Design system — Airsoft Ebook Landing Page Template

`SN-W00201` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark tactical landing page on near-black (#0a0a0a) with a bright neon green accent (#13ed00) on the primary button, the nav button, the rating and the small labels. Headlines are bold white sans-serif, and the product cover sits in a dark card with a small green label. Outlined secondary buttons and small icon pills with thin borders carry the guide's features.

**Mood:** tactical, dark, bold, high-energy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#13ed00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#13ed00` · `#171717` · `#0a0a0a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-md bg-[#13ed00] px-4 py-2 text-sm font-medium text-black transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#13ed00]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Testimonials (`testimonials`)
5. Stats band (`stats`)
6. Product grid (`product-grid`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #13ed00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#13ed00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#13ed00) for the primary buttons and the rating and label chips only
- **Do:** Set headlines in bold white sans-serif on the near-black ground
- **Do:** Frame the product cover in a dark card with a thin border and a small green label
- **Don't:** Don't use green for body text; it is reserved for actions and labels
- **Don't:** Don't add more accent colours; the page is black, white and green
- **Don't:** Don't switch to a light background; the page is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
