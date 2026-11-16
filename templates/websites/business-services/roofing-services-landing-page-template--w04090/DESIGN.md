# Design system — Roofing Services Landing Page Template

`SN-W04090` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark hero that fades from near-black into a warm brown glow, with a large bold white uppercase headline set in heavy sans. Orange (#f4821f) marks the header button and an angled image panel that runs from dark to orange, so the warm colour sits in the photography and the call to action. The tone is bold and craftsmanlike.

**Mood:** bold, warm, craftsmanlike, dark, emphatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d1b2a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f4821f` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0d1b2a` · `#6b7280` · `#374151` · `#f4821f` · `#e5e7eb` · `#d1d5db` · `#f9fafb` · `#d86b0e` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Barlow Condensed, Inter
- **Scale (largest breakpoint):** h1 72px · h2 52px · h3 22px · body 16px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[560px]`, `max-w-2xl`
- **Section padding:** `py-[14px]`, `py-[100px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="btn-fill bg-brand-accent text-white px-6 py-2.5 rounded text-sm font-semibold tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll, AOS scroll reveal, Swiper
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #0d1b2a;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f4821f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d1b2a',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f4821f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy white capitals with tight leading
- **Do:** Use the orange (#f4821f) for the header button and the image panel only
- **Do:** Place an angled, gradient image panel beside the headline
- **Don't:** Don't set body copy in capitals
- **Don't:** Don't set orange text on the orange panel
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
