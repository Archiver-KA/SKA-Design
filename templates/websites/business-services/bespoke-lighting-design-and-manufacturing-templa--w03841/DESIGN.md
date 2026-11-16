# Design system — Bespoke Lighting Design & Manufacturing Template

`SN-W03841` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet, light-grey hero with a centred serif wordmark headline in white, where the word Light is set in italic beneath the roman ONETENTH. Small, widely spaced uppercase text sits above the headline, and a thin outlined button closes the navigation. The palette stays restrained, and the type carries the page with no bright colour in the first view.

**Mood:** refined, quiet, gallery-like, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8d9cb` | Page ground |
| Surface | `#fdfbf9` | Cards, panels, raised areas |
| Text | `#0d0f0b` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#c5a065` | Primary action and highlights |

Palette by frequency of use: `#c5a065` · `#0d0f0b` · `#ffffff` · `#fdfbf9` · `#6b7280` · `#9ca3af` · `#e8d9cb` · `#374151` · `#181816` · `#f3e5d5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-16`, `gap-12`

**Primary button**

```html
<a class="lang-toggle flex items-center gap-2 text-lg text-[#0d0f0b] mt-8 uppercase tracking-widest border border-[#0d0f0b] px-6 py-2 rounded-full hover:bg-[#0d0f0b] hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Logo cloud (`logo-cloud`)
7. Process / steps (`how-it-works`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e8d9cb;
  --color-surface: #fdfbf9;
  --color-text: #0d0f0b;
  --color-muted: #6b7280;
  --color-border: #374151;
  --color-accent: #c5a065;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8d9cb',
    surface: '#fdfbf9',
    ink: '#0d0f0b',
    muted: '#6b7280',
    line: '#374151',
    accent: '#c5a065',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set display headlines in a high-contrast serif, with the second word in italic.
- **Do:** Keep eyebrow text and navigation in small, widely spaced uppercase.
- **Do:** Use the thin outlined button for the contact action.
- **Don't:** Don't add bright colour to the hero.
- **Don't:** Don't place white headline type on a pale background without a darkening overlay.
- **Don't:** Don't round the corners of the contact button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
