# Design system — AI Agents Business Landing Page Template

`SN-W00033` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black, high-contrast page where the only saturated colour is yellow (#eab308), reserved for the primary call to action in the floating navigation bar. Nav links are small, uppercase and widely tracked, and the page relies on large Space Grotesk headlines and a media field. The yellow glow on the nav button is the one recognisable detail.

**Mood:** bold, dark, energetic, minimal, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#000000` · `#030303` · `#080808` · `#22c55e` · `#0a0a0a` · `#fde047` · `#050505` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Manrope
- **Loaded families:** Manrope, Space Grotesk
- **Scale (largest breakpoint):** h1 104px · h2 48px · h3 36px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_20px_rgba(234,179,8,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:block uppercase transition-colors hover-trigger hover:bg-yellow-300 cursor-pointer text-xs font-bold text-black tracking-wider bg-yellow-500 rounded-full px-6 py-3 shadow-[0_0_20px_rgba(234,179,8,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #080808;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #22c55e;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#080808',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#eab308) only for the primary call to action
- **Do:** Set navigation links in small uppercase with wide letter spacing
- **Do:** Set headlines in Space Grotesk at about 104px in white on black
- **Don't:** Don't add a second accent colour; the green (#22c55e) appears only in small details
- **Don't:** Don't use a light background; the ground is pure black (#000000)
- **Don't:** Don't use yellow for body text or large fills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
