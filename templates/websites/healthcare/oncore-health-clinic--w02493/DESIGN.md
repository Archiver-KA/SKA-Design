# Design system — Oncore Health Clinic

`SN-W02493` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A quiet medical-spa hero on white, with a faint pink glow in the top corner and a large serif headline in near-black. Playfair Display carries the headline over Inter body copy, and the grey scale (#4b5563, #6b7280) does the colour work without an accent. Rounded panels hold the image, and the dark pill button is the only solid shape in the first screen.

**Mood:** soft, clinical, elegant, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#4b5563` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f3f4f6` · `#e5e7eb` · `#d1d5db` · `#9ca3af` · `#6b7280` · `#4b5563` · `#f9fafb` · `#eff6ff` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-dark-900 rounded-full hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-900 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e7eb;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #4b5563;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e7eb',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#4b5563',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display at large size with tight leading
- **Do:** Keep the primary button a solid dark pill and use one per hero
- **Do:** Use the grey scale (#f3f4f6 to #6b7280) for surfaces and secondary text
- **Don't:** Don't add a saturated accent; the page is intentionally grey
- **Don't:** Don't set body copy lighter than #6b7280
- **Don't:** Don't use sharp corners on panels or buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
