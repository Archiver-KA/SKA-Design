# Design system — HVAC Services Landing Page Template

`SN-W03937` · business-services · light mode · Sinera Atlas theme `route` · language `pl`

## Direction

A white page with a dark navy top bar, where the headline is set in heavy near-black sans and its second phrase switches to blue (#2563eb). Solid blue buttons lead the actions, paired with an outlined white button, and a rounded white rating card floats over the image. The layout is clean and businesslike, with a short list of benefits beneath the copy.

**Mood:** clean, businesslike, clear, bright, reliable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#4b5563` · `#2563eb` · `#f9fafb` · `#e5e7eb` · `#6b7280` · `#9ca3af` · `#60a5fa` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Montserrat
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 18px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-blue-600 text-white px-6 py-2.5 rounded-full text-lg font-medium hover:bg-blue-500 transition-colors font-montserrat">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. FAQ (`faq`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #16a34a;
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
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second phrase of the headline in blue (#2563eb) and keep the rest in near-black.
- **Do:** Use the solid blue button for the quote action and an outlined white button for the call.
- **Do:** Keep the dark navy top bar as the only dark element on the first screen.
- **Don't:** Don't use blue for body copy; it is for the headline phrase and the buttons.
- **Don't:** Don't set the navigation in light tones over the white page.
- **Don't:** Don't add more than one floating card to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
