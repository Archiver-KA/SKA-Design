# Design system — Maxime Dayan - Coiffeur & Visagiste 

`SN-W02110` · portfolio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A restrained hair-salon page on white, with a black sans headline over three lines where the middle phrase is dimmed to light grey [#a3a3a3]. A black-and-white photograph of a stylist at work fills the right column and is the only image in the first screen. Small uppercase location tags and a solid black nav button frame the copy, so the page reads as architectural.

**Mood:** restrained, architectural, monochrome, editorial, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#a3a3a3` · `#e5e5e5` · `#000000` · `#737373` · `#f5f5f5` · `#525252` · `#fafafa` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-neutral-200/50`
- **Content width:** `max-w-7xl`, `max-w-[150px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-12`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="flex items-center justify-center w-full py-3 bg-[#25D366] text-white text-sm font-medium tracking-wide hover:bg-[#128c7e] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #a3a3a3;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#a3a3a3',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large black sans and dim the middle phrase to #a3a3a3.
- **Do:** Keep the hero photograph black and white, in the right column.
- **Do:** Use black (#171717) for the booking button and the nav call to action.
- **Don't:** Don't use the green WhatsApp tone (#25d366) on the hero; the page is black on white.
- **Don't:** Don't add colour to the photograph.
- **Don't:** Don't set the headline in a script or italic face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
