# Design system — Digital Marketing Agency Landing Page Template

`SN-W01547` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light grid background with thick black outlines and hard offset black shadows on pills, cards and the chart, a neo-brutalist treatment. The headline is heavy black, and the key words DIGITAL GROWTH are filled lime with a black outline. Lime is the only colour, used on the highlight words, the primary button and the chart's active bar.

**Mood:** neo-brutalist, bold, playful, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#b9ff66` | Primary action and highlights |
| Second accent | `#ff9900` | Supporting highlights |

Palette by frequency of use: `#000000` · `#b9ff66` · `#ffffff` · `#27272a` · `#e4e4e7` · `#f4f4f5` · `#d4d4d8` · `#3f3f46` · `#18181b` · `#88cc33`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bricolage Grotesque
- **Body:** Bricolage Grotesque
- **Loaded families:** Bricolage Grotesque
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 30px · body 20px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[30px]` (30px), `rounded-xl` (12px)
- **Shadows:** `shadow-[8px_8px_0_0_#B9FF66]`, `shadow-[0_8px_0_0_rgba(0,0,0,1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="bg-[#B9FF66] text-black text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Logo cloud (`logo-cloud`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #000000;
  --color-accent: #b9ff66;
  --color-accent-2: #ff9900;
  --font-display: "Bricolage Grotesque", sans-serif;
  --font-body: "Bricolage Grotesque", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#000000',
    accent: '#b9ff66',
    accent2: '#ff9900',
  },
  fontFamily: { display: ['Bricolage Grotesque'], sans: ['Bricolage Grotesque'] },
} }
```

## Do and don't

- **Do:** Give cards, pills and charts a thick black outline and a hard offset black shadow
- **Do:** Fill the key headline words in lime (#b9ff66) with a black outline
- **Do:** Use lime for the primary button and one active chart bar only
- **Don't:** Don't use soft blurred shadows; the style depends on hard edges
- **Don't:** Don't use gradients
- **Don't:** Don't set body copy in lime

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
