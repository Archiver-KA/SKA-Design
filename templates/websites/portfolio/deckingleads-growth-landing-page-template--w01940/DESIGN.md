# Design system — DeckingLeads Growth Landing Page Template

`SN-W01940` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white page with a heavy, tightly set all-caps headline in Space Grotesk, black on the first line and grey on the second. A single saturated orange-red (#ff4d00) fills the primary button, and everything else is black and grey, so the button is the strongest element. Small bracketed labels sit above the headline and along the navigation.

**Mood:** blunt, high-contrast, confident, graphic, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff4d00` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#ff4d00` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#4b5563` · `#22c55e` · `#fafafa` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 12px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_10px_black]`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 border border-black/20 rounded font-bold uppercase text-xs tracking-wider text-black hover:bg-black hover:text-white transition-all z-10 relative">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Process / steps (`how-it-works`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #000000;
  --color-border: #000000;
  --color-accent: #ff4d00;
  --color-accent-2: #22c55e;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#000000',
    ink: '#111111',
    muted: '#000000',
    line: '#000000',
    accent: '#ff4d00',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy all-caps Space Grotesk, black over grey
- **Do:** Use the orange (#ff4d00) only on the primary button
- **Do:** Keep navigation labels small, with bracketed numbers
- **Don't:** Don't use orange for headings or links
- **Don't:** Don't add a dark page ground; the sections stay white
- **Don't:** Don't set body text in the display face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
