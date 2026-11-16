# Design system — Luxury Dental Clinic Landing Page Template

`SN-W02441` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

The orthodontics page is a near-black screen (#050505) with a large white sans headline set in short, stacked lines and one italic word for emphasis. The primary button is a rounded green pill (#69af38), the only saturated colour in the hero, and a dark arched photo panel sits in the centre over a faint oversized wordmark.

**Mood:** calm, modern, dark, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#69af38` | Primary action and highlights |
| Second accent | `#2b93c9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#69af38` · `#000000` · `#94a3b8` · `#64748b` · `#050505` · `#cbd5e1` · `#2b93c9` · `#064e3b` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-[#69af38]/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="px-8 py-3 bg-[#69af38] hover:bg-[#5a9632] text-black font-semibold rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #69af38;
  --color-accent-2: #2b93c9;
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
    surface: '#050505',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#69af38',
    accent2: '#2b93c9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans with short stacked lines and one italic word
- **Do:** Use the green (#69af38) pill for the primary action only
- **Do:** Keep the ground near-black (#050505) with a faint oversized wordmark behind the photo
- **Don't:** Don't use the blue (#2b93c9) as the button colour.
- **Don't:** Don't set the headline in serif; headlines are sans
- **Don't:** Don't add white panels; keep the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
