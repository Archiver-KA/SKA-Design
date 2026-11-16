# Design system — Restaurant Bar & Lounge Landing Page Template

`SN-W02971` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark nightlife lounge page with a Cormorant Garamond headline at 96px in white, where one italic word is set in rose (#f43f5e) for emphasis. The ground is near-black (#0a0a0a) and the crimson primary button (#881337) is the main coloured element, so colour comes only from buttons and that one highlighted word. Thin uppercase labels with wide letter-spacing add a bar-menu tone.

**Mood:** moody, nightlife, editorial, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#881337` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#881337` · `#0a0a0a` · `#f43f5e` · `#a3a3a3` · `#262626` · `#d4d4d4` · `#404040` · `#fb7185`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(225,29,72,0.1)]`, `shadow-rose-900/40`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-rose-900 text-white text-sm uppercase tracking-widest hover:bg-rose-800 transition-all border border-rose-800/50 shadow-[0_0_20px_rgba(225,29,72,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #881337;
  --color-accent-2: #f43f5e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#881337',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one word per headline in italic rose (#f43f5e) for emphasis, and no more.
- **Do:** Use crimson (#881337) for the primary booking button only.
- **Do:** Set display headlines in Cormorant Garamond at the large size, in white.
- **Don't:** Don't use the rose highlight on body text.
- **Don't:** Don't add bright colours beyond the crimson and rose.
- **Don't:** Don't set the headline in sans-serif; the serif is the voice of the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
