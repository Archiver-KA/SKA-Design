# Design system — AI Career Coaching Landing Page Template

`SN-W03401` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark page on black with a centred white sans headline, its second clause set in a violet gradient (#a855f7 to #c084fc). A small outlined pill above signals early access, and two buttons sit below: a white pill for the main action and a dark outlined button for institutions. Violet is limited to the gradient clause and labels, so the rest of the page stays neutral.

**Mood:** neutral, focused, modern, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#a855f7` · `#c084fc` · `#737373` · `#000000` · `#171717` · `#d4d4d4` · `#525252` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 24px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(168,85,247,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Process / steps (`how-it-works`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Benefits (`benefits`)
6. Booking form (`booking`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #ef4444;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white (#ffffff) and the second clause in the violet gradient (#a855f7).
- **Do:** Use the white pill for the main action and a dark outlined button for the institutional route.
- **Do:** Keep the eyebrow pill outlined in violet, with small uppercase text.
- **Don't:** Don't gradient the whole headline; only one clause takes the violet.
- **Don't:** Don't place violet fills behind body copy.
- **Don't:** Don't add a second gradient colour to labels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
