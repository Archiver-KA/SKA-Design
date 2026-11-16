# Design system — AI Agency Landing Page Template for Luxury Barbershops

`SN-W01373` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `it`

## Direction

A near-black page with a centred headline in Inter, where the first line is white and the second is set in gold (#d4af37). A gold primary button with dark text sits beside a dark outlined secondary, and a small dark pill badge marks the top. Gold is the single accent and carries the revenue claim, so the page reads as premium and high-contrast.

**Mood:** premium, high-contrast, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#a3a3a3` · `#000000` · `#737373` · `#ef4444` · `#171717` · `#d4d4d4` · `#262626` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Montserrat, Inter, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_15px_rgba(212,175,55,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#b59023] text-black font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 gold-glow flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white Inter, with the key phrase in gold (#d4af37).
- **Do:** Use gold for the primary button and the headline phrase only.
- **Do:** Keep the primary button label dark on the gold fill for contrast.
- **Don't:** Don't add red accents; gold is the only accent.
- **Don't:** Don't set the page on a light background; the black ground is the look.
- **Don't:** Don't use gold for body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
