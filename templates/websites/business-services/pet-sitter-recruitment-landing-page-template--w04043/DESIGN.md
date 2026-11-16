# Design system — Pet Sitter Recruitment Landing Page Template

`SN-W04043` · business-services · light mode · Sinera Atlas theme `route` · language `ja`

## Direction

A warm, friendly recruitment page on white, with a soft photograph of a pet and a person behind the hero copy. The headline is dark and centred on two lines, the kicker line above it is orange, and the primary button is solid orange beside a plain outlined button. Three stat cards with large numbers sit below the hero.

**Mood:** warm, friendly, approachable, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#292524` · `#f97316` · `#f5f5f4` · `#78716c` · `#e7e5e4` · `#ffedd5` · `#fff7ed` · `#fffdf9` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Zen Maru Gothic
- **Body:** Zen Maru Gothic
- **Loaded families:** Zen Maru Gothic
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 16px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-[90%]`, `max-w-[80%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm shadow-orange-500/20 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Benefits (`benefits`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #f97316;
  --font-display: "Zen Maru Gothic", sans-serif;
  --font-body: "Zen Maru Gothic", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#f97316',
  },
  fontFamily: { display: ['Zen Maru Gothic'], sans: ['Zen Maru Gothic'] },
} }
```

## Do and don't

- **Do:** Set the kicker line above headlines in orange (#f97316)
- **Do:** Keep the primary button orange and the secondary white with a thin outline
- **Do:** Use three stat cards with large numbers under the hero
- **Don't:** Don't set headline text in orange
- **Don't:** Don't set body copy in orange
- **Don't:** Don't place hero copy over busy parts of the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
