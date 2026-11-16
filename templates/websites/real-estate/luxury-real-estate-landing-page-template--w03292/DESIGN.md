# Design system — Luxury Real Estate Landing Page Template

`SN-W03292` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Austere and architectural: a dark overlay sits over an interior photograph of a kitchen, with a stacked uppercase sans headline in white, one word per line. Small grey copy sits at the right, and the call to action is an underlined text link rather than a button. The palette stays black, grey and white, so the photograph and the type do all the work.

**Mood:** austere, architectural, restrained, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#000000` · `#d1d5db` · `#9ca3af` · `#0a0a0a` · `#111111` · `#4b5563` · `#e5e7eb` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors uppercase text-xs tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sign-in form (`auth-form`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. About (`about`)
6. Listings (`listings`)
7. Services (`services`)
8. Logo cloud (`logo-cloud`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#e5e7eb',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase white sans, one word per line.
- **Do:** Keep the photograph under a dark overlay so the white type reads.
- **Do:** Use an underlined text link, not a button, for the main call to action.
- **Don't:** Don't add colour; the page stays black, grey and white.
- **Don't:** Don't place body copy over the bright areas of the kitchen photograph.
- **Don't:** Don't introduce rounded buttons; this page has no button shapes.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
