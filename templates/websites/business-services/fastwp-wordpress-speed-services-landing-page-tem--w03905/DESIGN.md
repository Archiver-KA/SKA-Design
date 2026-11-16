# Design system — FastWP WordPress Speed Services Landing Page Template

`SN-W03905` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, photographic luxury page where a large serif headline sits over a moody kitchen image darkened to near-black. One phrase is italic, and the rest is set in white at very large size, so the type does most of the visual work. The small uppercase eyebrow and the pale solid button are the only chrome. Contrast and restraint carry the sense of premium.

**Mood:** luxurious, moody, restrained, high-contrast, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#000000` · `#d4d4d4` · `#050505` · `#262626` · `#525252` · `#171717` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-widest font-medium rounded-full bg-white text-black hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Process / steps (`how-it-works`)
5. Contact form (`contact-form`)
6. Stats band (`stats`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at very large size, with one phrase in italic.
- **Do:** Keep a dark photographic overlay behind the hero so the white type reads clearly.
- **Do:** Use the light solid button for the main audit action and an outlined one beside it.
- **Don't:** Don't put bright, saturated colour over the hero photograph.
- **Don't:** Don't add drop shadows to the headline or the buttons.
- **Don't:** Don't set headlines in a sans serif; the serif is part of the luxury tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
