# Design system — Junk Removal Services Landing Page Template

`SN-W03968` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bold, plain service page on white, with a heavy black sans-serif headline set tight and centred over two lines. Magenta-pink (#db2777) fills the primary quote button and the second word of the logo, and the secondary button is a plain outline. Supporting copy is small and grey, so the headline and the pink action carry the page.

**Mood:** bold, friendly, plain, direct, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#db2777` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#f3f4f6` · `#db2777` · `#6b7280` · `#f9fafb` · `#ec4899` · `#9ca3af` · `#374151` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-pink-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto bg-pink-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-pink-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #db2777;
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
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#db2777',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black sans-serif, centred and tightly leaded
- **Do:** Use magenta (#db2777) for the primary quote button and the logo accent only
- **Do:** Keep supporting copy grey and centred beneath the headline
- **Don't:** Don't use pink for headlines or body text
- **Don't:** Don't add a second accent colour beside the magenta
- **Don't:** Don't add dark panels to the white ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
