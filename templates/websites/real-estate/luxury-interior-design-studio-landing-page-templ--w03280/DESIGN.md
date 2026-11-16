# Design system — Luxury Interior Design Studio Landing Page Template

`SN-W03280` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Soft and hushed: the hero ground fades from warm grey at the top to a pale cream below, and a white serif headline is centred over the fade with its second line in italic. The primary button is a pale pill with dark text, and the black navigation button is the only firm contrast on the screen. A bright green chat bubble in the corner is the one saturated colour.

**Mood:** soft, hushed, delicate, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#e5e7eb` · `#000000` · `#4b5563` · `#d1d5db` · `#f5f5f4` · `#e7e5e4` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Plus Jakarta Sans
- **Loaded families:** Playfair Display, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="px-6 py-2.5 bg-brand-dark text-white text-xs font-medium tracking-wide uppercase rounded-full hover:bg-brand-gold transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Logo cloud (`logo-cloud`)
8. Testimonials (`testimonials`)
9. Articles (`blog-articles`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e7e5e4;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #25d366;
  --font-display: "Playfair Display", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e7e5e4',
    ink: '#000000',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#25d366',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground as a grey-to-cream fade so the white headline has a pale base.
- **Do:** Set headlines in a serif face, centred, with the second line in italic.
- **Do:** Use the black navigation button as the only firm dark element at the top.
- **Don't:** Don't darken the hero ground; the pale fade is what holds the white headline.
- **Don't:** Don't add a saturated accent beyond the chat bubble.
- **Don't:** Don't set small light text on the pale ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
