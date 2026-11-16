# Design system — Soccer Coaching Landing Page Template

`SN-W03533` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, sports-focused page built on a darkened, green-tinted photograph of a boot on a pitch. The headline is set large and heavy in white, stacked tight at the lower left, and a white pill button carries the main action. Deep green (#14532d) appears only in the photographic tone, so the imagery supplies both the colour and the energy.

**Mood:** athletic, dark, energetic, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#14532d` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#27272a` · `#d4d4d8` · `#71717a` · `#09090b` · `#000000` · `#a1a1aa` · `#52525b` · `#dc2626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #d4d4d8;
  --color-border: #ffffff;
  --color-accent: #14532d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#d4d4d8',
    line: '#ffffff',
    accent: '#14532d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white Inter, stacked tight at the lower left
- **Do:** Keep the photograph darkened with a green wash so text stays legible
- **Do:** Use a white pill button with a dark arrow icon for the main action
- **Don't:** Don't add bright, saturated colours outside the photography
- **Don't:** Don't place the headline over the bright parts of the image
- **Don't:** Don't use light backgrounds for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
