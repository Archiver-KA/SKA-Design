# Design system — HexOS Design System Landing Page Template

`SN-W00439` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, documentation-style design-system page: a short headline, a body paragraph with one key value in a lime highlight (#E0FF00), and then rows of thin monoline icons with small captions. Each section carries a grey subtitle giving the grid and stroke spec, so the page reads as a spec sheet. Lime is kept to the single highlight and stays off the body text.

**Mood:** spec-like, dark, orderly, precise, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e0ff00` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#e0ff00` · `#ffffff` · `#6b7280` · `#9ca3af` · `#000000` · `#1b2124` · `#050505` · `#333333` · `#374151` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 20px · h3 10px · body 18px
- **Weights in use:** bold, medium, normal
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-inner`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="group relative px-8 py-3 bg-[#E0FF00] text-black transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #e0ff00;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#e0ff00',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#e0ff00) only for one highlighted value per section, such as a hex code
- **Do:** Set section icons as thin monoline glyphs in a row, with small captions below
- **Do:** Label each section with a grey subtitle that states the grid and stroke spec
- **Don't:** Don't fill icon tiles with lime; they stay outlined
- **Don't:** Don't set body text in lime
- **Don't:** Don't switch to a light ground; the reference is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
