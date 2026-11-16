# Design system — Cafe Landing Page Template

`SN-W02862` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Warm, moody and action-led. A café interior photo sits under a dark brown overlay (#401c0c), with centred white bold sans headlines over it. Gold (#dfaa5e) pills carry every primary action, including a WhatsApp-style order button and a floating Order Now button in the corner. Arabic and English share the hero, so the layout keeps the lines short and centred.

**Mood:** bilingual, warm, moody, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#401c0c` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dfaa5e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#401c0c` · `#dfaa5e` · `#e7d6ba` · `#ffffff` · `#fdfbf7` · `#c9964b` · `#22c55e` · `#16a34a` · `#f4f1ea` · `#1a0b05`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#401C0C] text-[#FDFBF7] px-5 py-2.5 rounded-full hover:bg-[#401C0C]/90 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #401c0c;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #dfaa5e;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#401c0c',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#dfaa5e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white bold sans, centred over the dimmed photo
- **Do:** Use the gold (#dfaa5e) for every primary action, including order buttons
- **Do:** Keep the dark brown overlay (#401c0c) over any photo behind the headline
- **Don't:** Don't use green for the order buttons; gold is the action colour here
- **Don't:** Don't add a second photo layer under the headline
- **Don't:** Don't set long Arabic and English lines side by side without a break

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
