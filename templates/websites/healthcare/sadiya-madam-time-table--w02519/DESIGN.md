# Design system — sadiya madam time table

`SN-W02519` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, gentle wellness landing on off-white, with a charcoal headline whose second line is set in coral pink (#fb7185). Charcoal (#292524) fills the single primary button, and the stone scale holds the body copy and small cards. Rounded white cards with a coloured status dot list the habits, giving the page an everyday, approachable character.

**Mood:** gentle, approachable, soft, everyday

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |
| Second accent | `#fb7185` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a8a29e` · `#292524` · `#f5f5f4` · `#fafaf9` · `#44403c` · `#57534e` · `#78716c` · `#e7e5e4` · `#fff1f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Outfit, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 48px · h2 24px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Schedule (`schedule-agenda`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #f5f5f4;
  --color-accent: #fb7185;
  --color-accent-2: #fb7185;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#f5f5f4',
    accent: '#fb7185',
    accent2: '#fb7185',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in coral (#fb7185) and keep the first in charcoal
- **Do:** Use charcoal (#292524) for the primary button
- **Do:** Present habit items as white rounded cards with a small coloured dot
- **Don't:** Don't use coral for body copy or links
- **Don't:** Don't use a pink page background; the ground is off-white
- **Don't:** Don't use green as a headline colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
