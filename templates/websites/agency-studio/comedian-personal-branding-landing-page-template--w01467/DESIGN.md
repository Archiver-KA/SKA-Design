# Design system — Comedian Personal Branding Landing Page Template

`SN-W01467` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm cream ground ([#fdf8f3]) with a dark charcoal ([#2d2926]) serif headline and a coral ([#e8927c]) italic phrase. Nunito carries the body and small labels, and a pill badge with a coral dot sits above the headline. The look is warm and personal, with soft shapes and a rounded portrait area on the right.

**Mood:** warm, personal, soft, editorial, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdf8f3` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d2926` | Headings and primary copy |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#e8927c` | Primary action and highlights |
| Second accent | `#5aafa9` | Supporting highlights |

Palette by frequency of use: `#2d2926` · `#e8927c` · `#ffffff` · `#fdf8f3` · `#e7e5e4` · `#5aafa9` · `#f5f5f4` · `#d4a853` · `#fafaf9` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Nunito
- **Loaded families:** Nunito, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-6`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 bg-coral text-white text-sm font-semibold rounded-full hover:bg-coralDark transition-all duration-300 shadow-lg shadow-coral/20 hover:shadow-xl hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Video / media (`video-media`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Listings (`listings`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdf8f3;
  --color-surface: #ffffff;
  --color-text: #2d2926;
  --color-border: #e7e5e4;
  --color-accent: #e8927c;
  --color-accent-2: #5aafa9;
  --font-display: "Playfair Display", serif;
  --font-body: "Nunito", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdf8f3',
    surface: '#ffffff',
    ink: '#2d2926',
    line: '#e7e5e4',
    accent: '#e8927c',
    accent2: '#5aafa9',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Use coral (#e8927c) for the italic phrase and the primary button
- **Do:** Set headlines in Playfair Display with one italic coral phrase per headline
- **Do:** Set body copy and labels in Nunito on the cream ground (#fdf8f3)
- **Don't:** Don't use the teal (#5aafa9) in the hero
- **Don't:** Don't set the headline in a bold sans
- **Don't:** Don't put coral on cream for small body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
