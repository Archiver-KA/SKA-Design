# Design system — Digital Agency Landing Page Template

`SN-W01528` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A black page with a red radial glow behind the centred headline, and the second line set in red with a soft red glow. The primary button is solid red with an uppercase label and a glow, and the secondary is a dark outline button. The look is loud: red carries the headline, the glow and the primary action together.

**Mood:** loud, dark, red-glowing, uppercase

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec1d24` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#1f2937` · `#111827` · `#ec1d24` · `#dc2626` · `#0a0a0a` · `#333333` · `#374151` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_30px_rgba(236,29,36,0.1)]`, `shadow-[0_0_50px_rgba(236,29,36,0.8)]`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(236,29,36,0.4)] hover:shadow-[0_0_25px_rgba(236,29,36,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Logo cloud (`logo-cloud`)
6. Stats band (`stats`)
7. Articles (`blog-articles`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ec1d24;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1f2937',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ec1d24',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in red (#ec1d24) and the primary button in solid red
- **Do:** Keep the red glow centred behind the hero, not spread across the page
- **Do:** Use uppercase for button labels
- **Don't:** Don't use red for body text
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't put large blocks of text on the red glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
