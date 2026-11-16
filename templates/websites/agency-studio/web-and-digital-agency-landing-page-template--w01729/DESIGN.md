# Design system — Web & Digital Agency Landing Page Template

`SN-W01729` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A corporate web-agency hero on deep navy [#042955], with white sans headlines and an orange [#e16204] accent on the middle phrase. The form sits in a white rounded card on the right, which is the only light surface in the first screen. Orange is used for the primary button and the highlight word, so the eye moves from the headline to the form and then to the call to action.

**Mood:** corporate, clear, practical, navy-led, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#042955` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#e16204` | Primary action and highlights |
| Second accent | `#042955` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e16204` · `#042955` · `#f3f4f6` · `#6b7280` · `#9ca3af` · `#f9fafb` · `#4b5563` · `#e5e7eb` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-orange-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 bg-[#E16204] hover:bg-[#c55603] text-white px-5 py-2.5 rounded-lg text-base font-medium transition-all shadow-lg shadow-orange-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #042955;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #e16204;
  --color-accent-2: #042955;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#042955',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#e16204',
    accent2: '#042955',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on deep navy (#042955) with white headlines
- **Do:** Use the orange (#e16204) for the highlight phrase and the primary button only
- **Do:** Put forms in white rounded cards so they stand out from the navy ground
- **Don't:** Don't use orange for body text or icons
- **Don't:** Don't set the page on a light background; the navy hero is the identity
- **Don't:** Don't add more than one highlight phrase per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
