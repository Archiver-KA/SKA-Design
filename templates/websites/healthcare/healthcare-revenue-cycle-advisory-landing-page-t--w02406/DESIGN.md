# Design system — Healthcare Revenue Cycle Advisory Landing Page Template

`SN-W02406` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Fountain's hero sits on a warm off-white ground (#ece9e0) with a dark ink (#2d2c2a) headline, a large faded monogram behind the text, and a single dark button. The headline is set in a serif, and the page reads like a printed financial brief: quiet, tonal, with findings set in grey.

**Mood:** editorial, warm, quiet, print-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ece9e0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d2c2a` | Headings and primary copy |
| Muted text | `#7d827d` | Secondary copy, captions |
| Border | `#2d2c2a` | Hairlines, dividers, outlines |
| Accent | `#2d2c2a` | Primary action and highlights |

Palette by frequency of use: `#2d2c2a` · `#7d827d` · `#ece9e0` · `#ffffff` · `#4a4a4a` · `#ffff00`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 18px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-6`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center h-14 px-8 bg-transparent text-[#2D2C2A] text-lg hover:text-[#7D827D] transition-colors gap-2 border border-[#2D2C2A]/20 hover:border-[#7D827D]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Services (`services`)
7. Video / media (`video-media`)
8. About (`about`)
9. Team (`team`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ece9e0;
  --color-surface: #ffffff;
  --color-text: #2d2c2a;
  --color-muted: #7d827d;
  --color-border: #2d2c2a;
  --color-accent: #2d2c2a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ece9e0',
    surface: '#ffffff',
    ink: '#2d2c2a',
    muted: '#7d827d',
    line: '#2d2c2a',
    accent: '#2d2c2a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground warm off-white (#ece9e0) and the ink dark (#2d2c2a)
- **Do:** Set the headline in a serif at large size, centred, with a grey sub-line in sans
- **Do:** Use one solid dark button for the primary action and keep it the only filled control
- **Don't:** Don't introduce a bright accent colour
- **Don't:** Don't replace the large watermark monogram with a photo
- **Don't:** Don't set the findings list in bold; keep it regular weight grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
