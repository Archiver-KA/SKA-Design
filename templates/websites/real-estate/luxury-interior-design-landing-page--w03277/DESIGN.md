# Design system — Luxury Interior Design Landing PAGE

`SN-W03277` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Warm and cinematic: an interior photograph under a dark overlay carries a large white serif headline in two lines, with the second line in warm tan (#c8a97e). The same tan fills the primary button, while the secondary is a thin outline. A small green chat bubble in the corner is the only cool colour on the screen, and the spacing is generous.

**Mood:** warm, cinematic, luxurious, sophisticated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8a97e` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c8a97e` · `#a3a3a3` · `#000000` · `#737373` · `#0a0a0a` · `#050505` · `#d4d4d4` · `#141414` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[#25D366]/20`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-8`, `gap-0`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-[#C8A97E] text-black text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Pricing (`pricing`)
5. Process / steps (`how-it-works`)
6. Bento grid (`bento-grid`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Newsletter signup (`newsletter`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c8a97e;
  --color-accent-2: #25d366;
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
    surface: '#0a0a0a',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c8a97e',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in tan (#c8a97e) in the serif display face.
- **Do:** Use the tan (#c8a97e) for the primary button and headline highlights only.
- **Do:** Keep the chat bubble (#25d366) as the only green element, in a corner.
- **Don't:** Don't use the green for buttons or headings.
- **Don't:** Don't remove the dark overlay from the hero photograph.
- **Don't:** Don't set body copy in tan; it stays light grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
