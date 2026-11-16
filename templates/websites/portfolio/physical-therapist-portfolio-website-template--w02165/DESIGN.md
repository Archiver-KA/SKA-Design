# Design system — Physical Therapist Portfolio Website Template

`SN-W02165` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Calm and credible: a pale slate ground (#f8fafc) with near-black navy headings (#111827) and grey body text, set in a clean sans. The one visual is a black-and-white portrait in a rounded frame with a slight shadow, which keeps colour out of the first screen. Buttons are outlined rather than filled, so the page reads as measured and unhurried.

**Mood:** calm, credible, clinical, understated, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#111827` · `#6b7280` · `#4b5563` · `#f9fafb` · `#f3f4f6` · `#374151` · `#9ca3af` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, DM Sans, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-medical-600 text-white text-sm font-medium hover:bg-medical-900 transition-all shadow-sm hover:shadow-md font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Bento grid (`bento-grid`)
6. Services (`services`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #111827;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#111827',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headings in near-black navy (#111827) and body copy in grey (#6b7280)
- **Do:** Keep the hero photo black and white inside a rounded frame
- **Do:** Use outlined buttons for secondary actions and one dark primary per view
- **Don't:** Don't add saturated colour to the hero
- **Don't:** Don't use filled coloured buttons for secondary actions
- **Don't:** Don't swap the pale slate ground for pure white on the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
