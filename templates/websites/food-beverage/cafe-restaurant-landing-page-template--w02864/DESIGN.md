# Design system — Cafe Restaurant Landing Page Template

`SN-W02864` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Austere and monochrome. The first screen is a greyscale photograph of hands working dough under a dark overlay, so there is no colour in the hero. A large uppercase Cormorant Garamond wordmark sits centred in white, with a small widely tracked caption and one thin outlined button. The restraint lets the craft photography carry the mood, and the colour is only implied.

**Mood:** monochrome, austere, artisan, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#f3f4f6` · `#000000` · `#f2f2f0` · `#f9f9f7` · `#1a1a1a` · `#f4f4f5` · `#f5f5f4` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Reenie Beanie, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 30px · body 16px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-12`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="p-2 hover:bg-charcoal/5 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)
5. Call to action (`cta`)
6. Menu list (`menu-list`)
7. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-border: #e5e7eb;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#f3f4f6',
    ink: '#ffffff',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep hero photography greyscale under a dark overlay
- **Do:** Set the wordmark in uppercase Cormorant Garamond in white
- **Do:** Use one thin outlined button for the main call to action
- **Don't:** Don't add colour accents to the hero; the photo is the only colour source
- **Don't:** Don't set the wordmark in a bold sans
- **Don't:** Don't fill the button; the outline is the style

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
