# Design system — GharSeva Home Services Landing Page Template

`SN-W03922` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A black page with a large white sans headline set in two tones: the first line in white and the second in muted grey (#6b7280). A small, widely spaced uppercase eyebrow sits above it, and a pill search field with a white button carries the main action. A floating green button in the corner is the only saturated colour on screen, which keeps the focus on the type. The layout is centred and spacious.

**Mood:** spacious, clean, centred, premium, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#111111` · `#6b7280` · `#e5e7eb` · `#0a0a0a` · `#d1d5db` · `#4b5563` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[24px]` (24px), `rounded-[32px]` (32px)
- **Shadows:** `shadow-[0_20px_40px_-10px_rgba(255,255,255,0.03)]`, `shadow-sm`, `shadow-[0_20px_40px_-10px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gray-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #25d366;
  --color-accent-2: #f59e0b;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#e5e7eb',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#25d366',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Set the headline in one size, with the second line in muted grey (#6b7280) and the first in white.
- **Do:** Use the white pill button for the search action and keep it the only solid light element.
- **Do:** Keep the floating green button (#25d366) as the only saturated colour on the screen.
- **Don't:** Don't add accent colours to headlines; green is reserved for the floating button.
- **Don't:** Don't use a light background behind the hero.
- **Don't:** Don't set the eyebrow text in bold; keep it small and widely spaced.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
