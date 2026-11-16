# Design system — Thinking Partner Coaching Landing Page Template

`SN-W03549` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Thinking Partner is a soft, light page with a dark ink-navy headline. The second line is set in italic grey serif, a contrast that gives the page its reflective tone. Deep rose (#b90560) is the single accent, used on the primary button and the small tag. Generous padding and a faint blurred glow keep the hero calm and unhurried.

**Mood:** calm, reflective, soft, unhurried, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f6f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1e29` | Headings and primary copy |
| Muted text | `#636c80` | Secondary copy, captions |
| Border | `#ebebef` | Hairlines, dividers, outlines |
| Accent | `#b90560` | Primary action and highlights |
| Second accent | `#0f173a` | Supporting highlights |

Palette by frequency of use: `#1a1e29` · `#ffffff` · `#c25871` · `#b90560` · `#636c80` · `#ebebef` · `#f6f6f8` · `#8e93a1` · `#652a3d` · `#d4d6dc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[#652A3D]/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="px-5 py-2.5 bg-white border border-[#EBEBEF] text-[#1A1E29] text-xs font-medium rounded-full hover:border-[#C25871]/30 hover:bg-[#F6F6F8] transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Testimonials (`testimonials`)
5. Process / steps (`how-it-works`)
6. Team (`team`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f6f6f8;
  --color-surface: #ffffff;
  --color-text: #1a1e29;
  --color-muted: #636c80;
  --color-border: #ebebef;
  --color-accent: #b90560;
  --color-accent-2: #0f173a;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f6f8',
    surface: '#ffffff',
    ink: '#1a1e29',
    muted: '#636c80',
    line: '#ebebef',
    accent: '#b90560',
    accent2: '#0f173a',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic grey to soften the statement
- **Do:** Use the rose (#b90560) only for the primary button and tags
- **Do:** Keep the hero spacious, with a faint blurred glow behind the image
- **Don't:** Don't add saturated colours beyond the rose accent
- **Don't:** Don't set body copy in pure black
- **Don't:** Don't stack dense feature grids above the fold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
