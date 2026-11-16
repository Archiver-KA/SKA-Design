# Design system — Product Designer Portfolio Landing Page Template

`SN-W02185` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The page uses a near-black ground (#09090b), a zinc surface (#18181b) and off-white text (#f4f4f5), with a pale lavender (#ddd6fe) accent. The layout is quiet and card-based, with restrained colour and rounded corners.

**Mood:** restrained, dark, neutral, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#ddd6fe` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#f4f4f5` · `#a1a1aa` · `#18181b` · `#3f3f46` · `#d4d4d8` · `#ddd6fe` · `#71717a` · `#a78bfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 16px · body 14px
- **Weights in use:** light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Content width:** `max-w-5xl`, `max-w-7xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm hover:bg-zinc-200 transition font-light tracking-tighter font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. About (`about`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #ddd6fe;
  --color-accent-2: #22c55e;
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
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#27272a',
    accent: '#ddd6fe',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use zinc greys (#18181b, #71717a) for surfaces and secondary text
- **Do:** Keep the single lavender (#ddd6fe) for accent only
- **Do:** Keep rounded-2xl corners on panels
- **Don't:** Don't use bright colours on the zinc ground
- **Don't:** Don't use the zinc surface as the page ground
- **Don't:** Don't add decorative gradients to surfaces

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
