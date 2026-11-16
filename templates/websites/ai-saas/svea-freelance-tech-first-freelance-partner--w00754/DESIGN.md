# Design system — SVEA FREELANCE - Tech-First Freelance Partner

`SN-W00754` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black hero (#050505) with a blurred blue and amber glow in the middle and a plain white pill button in the nav. The system is built from the ground, the nav and the glow.

**Mood:** dark, atmospheric, minimal, tech

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f24e1e` | Primary action and highlights |
| Second accent | `#95bf47` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#635bff` · `#95bf47` · `#f24e1e` · `#146ef5` · `#0055ff` · `#10a37f` · `#050505` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 16px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.2)]`, `shadow-[0_0_30px_rgba(0,145,255,0.3)]`, `shadow-[0_0_50px_rgba(0,145,255,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-brand-gold hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f24e1e;
  --color-accent-2: #95bf47;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#333333',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f24e1e',
    accent2: '#95bf47',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground near-black (#050505) with soft blurred glows only
- **Do:** Use the orange (#f24e1e) only for the accent glow and small emphasis
- **Do:** Keep the nav to a few text links and one white pill button
- **Don't:** Don't add a light background to any hero section
- **Don't:** Don't use the logo colours (#635bff, #95bf47) as UI colours
- **Don't:** Don't add hard-edged shapes behind the headline; the glow is soft

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
