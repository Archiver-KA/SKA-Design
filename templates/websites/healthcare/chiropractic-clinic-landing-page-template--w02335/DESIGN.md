# Design system — Chiropractic Clinic Landing Page Template

`SN-W02335` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A gentle chiropractic page on warm off-white (#fbf9f6) with deep forest-green (#064e3b) primary actions and warm dark-grey text. The headline is a large serif, with the second line set in italic deep green that echoes the button colour. Cards are white and the hero uses a tall pale photo panel, so the page feels clinical but warm.

**Mood:** gentle, warm, clinical, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |

Palette by frequency of use: `#064e3b` · `#ffffff` · `#022c22` · `#57534e` · `#fbf9f6` · `#e7e5e4` · `#f5f5f4` · `#10b981` · `#d1fae5` · `#065f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 20px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex bg-emerald-900 text-[#FBF9F6] px-5 py-2.5 rounded-full text-base font-medium hover:bg-emerald-800 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbf9f6;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #064e3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf9f6',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#064e3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second line of each headline in italic deep green (#064e3b).
- **Do:** Use solid deep green pills for booking actions and outlined pills for the phone number.
- **Do:** Keep the page on warm off-white (#fbf9f6) with white cards.
- **Don't:** Don't use bright green; the palette stays deep and muted.
- **Don't:** Don't set headlines in a bold sans-serif; they are serif.
- **Don't:** Don't introduce high-saturation accents; the page is green on cream only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
