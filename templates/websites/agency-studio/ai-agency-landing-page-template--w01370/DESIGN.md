# Design system — AI Agency Landing Page Template

`SN-W01370` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a large heavy white sans headline that moves through three treatments: white, a grey gradient, and a final phrase in gold (#facc15). The gold phrase, THAT RUN WITHOUT YOU, carries the message and matches the gold of the primary button. A small dark pill badge sits above, and a faded panel fills the right column. The result is high-contrast and direct.

**Mood:** high-contrast, direct, dark, gilded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#737373` · `#a3a3a3` · `#171717` · `#facc15` · `#d4d4d4` · `#000000` · `#030303` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1`, `gap-3`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Process / steps (`how-it-works`)
6. Services (`services`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D, AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #facc15;
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
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, ending with a gold phrase.
- **Do:** Use the gold (#facc15) for the final headline phrase and the primary button.
- **Do:** Keep the badge small and dark, placed above the headline.
- **Don't:** Don't set the page on a gold background.
- **Don't:** Don't colour more than the last phrase of a headline gold.
- **Don't:** Don't set grey body copy large enough to compete with the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
