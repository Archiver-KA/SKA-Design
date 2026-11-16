# Design system — Editorial Agency & Portfolio Template

`SN-W02002` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome first screen: a desaturated black-and-white portrait sits under a grey overlay, and the text is almost entirely off-white. The headline is a large serif in mixed case, paired with a small sans for body copy and thin outlined buttons. The rust accent (#c4622d) does not appear in this screen, so the look depends on contrast and photography alone.

**Mood:** monochrome, serif-led, restrained, athletic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#155d5d` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#c4622d` · `#27272a` · `#e4e4e7` · `#b5956a` · `#a1a1aa` · `#dc2626` · `#d4d4d8` · `#155d5d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 48px · body 16px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-5xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-white px-6 py-2.5 rounded-full text-[0.9rem] font-medium transition shadow-md bg-teal-600 hover:bg-teal-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. FAQ (`faq`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)
10. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #000000;
  --color-accent: #ffffff;
  --color-accent-2: #155d5d;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#000000',
    accent: '#ffffff',
    accent2: '#155d5d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use black-and-white or heavily desaturated photography behind the hero
- **Do:** Set headlines in a large serif in off-white (#f4f4f5)
- **Do:** Use outlined buttons with thin borders for calls to action
- **Don't:** Don't add saturated colour to the hero
- **Don't:** Don't set body copy in the serif
- **Don't:** Don't use filled coloured buttons on the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
