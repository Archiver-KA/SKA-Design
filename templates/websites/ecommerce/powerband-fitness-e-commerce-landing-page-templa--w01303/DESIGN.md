# Design system — PowerBand Fitness E-commerce Landing Page Template

`SN-W01303` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, high-contrast fitness page on near-black (#0b0b0b) with white type, and one neon green (#00ff00) used for a highlight word and the primary buttons. Headlines are large Inter with tight leading. Buttons are full pills, with the primary filled green and the secondary outlined, so the green reads as a signal rather than decoration.

**Mood:** high-contrast, intense, athletic, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0b` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff00` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00ff00` · `#0b0b0b` · `#94a3b8` · `#121212` · `#000000` · `#64748b` · `#cbd5e1` · `#475569` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,255,0,0.4)]`, `shadow-[0_0_25px_rgba(0,255,0,0.6)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-black bg-[#00FF00] hover:bg-[#00FF00]/90 focus:ring-4 focus:outline-none focus:ring-[#00FF00]/30 font-medium rounded-full text-base px-6 py-2.5 text-center transition-all shadow-[0_0_15px_rgba(0,255,0,0.4)] hover:shadow-[0_0_25px_rgba(0,255,0,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0b0b;
  --color-surface: #121212;
  --color-text: #f8fafc;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #00ff00;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0b',
    surface: '#121212',
    ink: '#f8fafc',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#00ff00',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use neon green (#00ff00) for one highlight word per headline and the primary buttons
- **Do:** Set headlines in large Inter with tight leading in white
- **Do:** Make buttons full pills, with the primary filled green and the secondary outlined
- **Don't:** Don't use green for body text or small labels; it is for emphasis
- **Don't:** Don't set the page on a light ground; the palette is black and white
- **Don't:** Don't add more than one neon element per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
