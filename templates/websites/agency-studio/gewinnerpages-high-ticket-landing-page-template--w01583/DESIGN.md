# Design system — Gewinnerpages High-Ticket Landing Page Template

`SN-W01583` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `de`

## Direction

A near-black ground with white headlines, where a trailing word fades to dim grey for emphasis. Red (#ef4444) is reserved for warning states, such as the bordered 'Warnung' card in the explanatory diagram, and one white pill button carries the action. Red means the problem and white the answer, giving a stark, authoritative tone.

**Mood:** stark, authoritative, urgent, dark, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#ef4444` · `#7f1d1d` · `#3b82f6` · `#22c55e` · `#4ade80` · `#020202` · `#e5e5e5` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_30px_rgba(207,166,40,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-black bg-white hover:bg-gold-200 rounded-full transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Bento grid (`bento-grid`)
8. Stats band (`stats`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #3b82f6;
  --font-display: "Instrument Serif", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use red (#ef4444) only for warning states and small status labels
- **Do:** Set headlines in white on black, with the closing word in dim grey
- **Do:** Keep the call to action as one white pill button
- **Don't:** Don't use red for buttons or headlines; it means a problem
- **Don't:** Don't add light panels in the middle of the dark sections
- **Don't:** Don't set body copy in pure white; keep it muted

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
