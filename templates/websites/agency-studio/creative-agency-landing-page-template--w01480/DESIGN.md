# Design system — Creative Agency Landing Page Template

`SN-W01480` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero (#050505) with white uppercase sans headlines, the second line 'THRIVE.' set in yellow (#ffc423) as the only colour on screen beyond a small outlined label. The primary action is a solid yellow button with dark text, and the secondary is a dark outlined button. The text block is centred and symmetrical, with body copy in muted grey.

**Mood:** bold, centred, confident, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffc423` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ffc423` · `#000000` · `#a3a3a3` · `#171717` · `#050505` · `#737373` · `#262626` · `#d4d4d4` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_30px_-10px_rgba(255,196,35,0.1)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-8 py-4 bg-[#FFC423] text-black font-medium rounded-full hover:bg-white transition-colors flex items-center gap-2 group text-base">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Bento grid (`bento-grid`)
6. Services (`services`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffc423;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffc423',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans and colour the second line in yellow (#ffc423).
- **Do:** Use the solid yellow button with dark text for the primary action only.
- **Do:** Centre the hero text block and keep the body copy in muted grey.
- **Don't:** Don't use yellow for body text or large background fields.
- **Don't:** Don't treat this as a light design; the ground is black.
- **Don't:** Don't add a second accent colour next to the yellow.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
