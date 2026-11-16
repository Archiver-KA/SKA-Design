# Design system — Photobooth Event Landing Page Template

`SN-W03639` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, polished booth page on a white ground, where a large serif headline sets its first line in near-black and its italic second word in purple (#9333ea). Body copy is short and grey, and a solid black pill button sits beside an outlined secondary. Navigation and labels are small and sit on white, so the design stays minimal and the purple is the only signal of emphasis.

**Mood:** airy, polished, minimal, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#e5e5e5` · `#9333ea` · `#737373` · `#f5f5f5` · `#c084fc` · `#fafafa` · `#525252` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-neutral-200`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-neutral-900 text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Booking form (`booking`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #9333ea;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#9333ea',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the italic word in purple (#9333ea)
- **Do:** Use the purple for the highlighted headline word only
- **Do:** Keep the primary button solid black and pill-shaped
- **Don't:** Don't fill large sections with purple
- **Don't:** Don't set the headline in a sans-serif
- **Don't:** Don't use more than one italic phrase in a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
