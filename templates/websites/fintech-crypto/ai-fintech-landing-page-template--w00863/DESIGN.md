# Design system — AI Fintech Landing Page Template

`SN-W00863` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page (#050505) with a centred, stacked headline split into grey and white lines, a yellow (#facf39) button as the only saturated colour, and a floating dark nav bar with a hairline border. The layout is restrained and corporate, and the yellow appears on the primary action and nowhere else in the hero. The ground is near-black, not yellow.

**Mood:** dark, restrained, corporate, direct, single-accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facf39` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#facf39` · `#ffffff` · `#d4d4d4` · `#0a0a0a` · `#050505` · `#161616` · `#a3a3a3` · `#000000` · `#262626` · `#ffe066`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_30px_-10px_rgba(250,207,57,0.1)]`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#facf39] hover:bg-[#ffe066] text-black rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_-5px_rgba(250,207,57,0.4)] group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Feature grid (`features`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #facf39;
  --color-accent-2: #22c55e;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#facf39',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the primary action in yellow (#facf39) and use it once per view
- **Do:** Stack the headline in two tones, grey then white, centred
- **Do:** Keep the nav in one floating dark bar with a hairline border
- **Don't:** Don't use yellow as a background field for sections
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't use a light background for the hero section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
