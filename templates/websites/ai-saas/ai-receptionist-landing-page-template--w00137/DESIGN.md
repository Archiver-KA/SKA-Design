# Design system — AI Receptionist Landing Page Template

`SN-W00137` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Restrained white page with a very large, tightly set sans headline in near-black (#111111) on the left and a framed interior photograph on the right. The small uppercase eyebrow tag is outlined in grey, and the enquiry form sits in a white card with a hairline border. Colour comes from the photograph rather than the interface, so the design reads as calm and quiet.

**Mood:** calm, quiet, clinical, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fffbeb` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#fff1f2` · `#f43f5e` · `#fecdd3` · `#fffbeb` · `#d97706` · `#fde68a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 16px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-soft`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-4`, `gap-3.5`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-sinera-charcoal text-white text-base font-normal rounded-full hover:bg-sinera-charcoal/90 transition-all duration-300 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Video / media (`video-media`)
7. Logo cloud (`logo-cloud`)
8. FAQ (`faq`)
9. Pricing (`pricing`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fffbeb;
  --color-text: #111111;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fffbeb',
    ink: '#111111',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large sans in #111111 with tight leading
- **Do:** Let the photography be the only colour source, placed at the top right
- **Do:** Use outlined grey eyebrow tags above headlines, not filled pills
- **Don't:** Don't add accent colours; the interface is monochrome
- **Don't:** Don't place the form on a tinted background
- **Don't:** Don't add drop shadows to the form card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
