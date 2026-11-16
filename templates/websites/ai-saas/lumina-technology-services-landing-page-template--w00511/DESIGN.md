# Design system — Lumina Technology Services Landing Page Template

`SN-W00511` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, green-black corporate page on #022c22 with a serif headline in white and grey-green body copy, faintly dotted with a grid of light points. The pale mint (#d1fae5) primary button is the only bright element, and a thin outline button sits beside it. The serif and deep green give it a quiet, established tone for a services firm.

**Mood:** established, quiet, dark green, serif, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#022c22` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#d1fae5` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#d1fae5` · `#10b981` · `#000000` · `#064e3b` · `#022c22` · `#a7f3d0` · `#065f46` · `#059669` · `#047857` · `#6ee7b7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden sm:flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full transition-all focus:ring-2 focus:ring-emerald-200 focus:outline-none font-geist text-black bg-emerald-100 hover:bg-emerald-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Services (`services`)
6. Listings (`listings`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #022c22;
  --color-text: #ffffff;
  --color-accent: #d1fae5;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#022c22',
    ink: '#ffffff',
    accent: '#d1fae5',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a white serif at large size on the deep green ground.
- **Do:** Use the pale mint (#d1fae5) for the primary button only.
- **Do:** Keep body copy in the muted mint-grey (#a7f3d0) on the dark ground.
- **Don't:** Don't set the page on a light background; the template is dark.
- **Don't:** Don't use the bright emerald (#10b981) for buttons; it is not the accent.
- **Don't:** Don't add drop shadows to panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
