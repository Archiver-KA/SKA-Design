# Design system — Creative Agency Landing Page Template

`SN-W01483` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page (#fdfcfc) with a very heavy, tightly set sans headline in near-black (#0c1100), set large over two lines. The black solid button in the navigation is the only filled block on the first screen, so the page depends on type scale and whitespace. The work grid beneath is where imagery carries the colour.

**Mood:** minimal, type-led, calm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcfc` | Page ground |
| Surface | `#eeeeee` | Cards, panels, raised areas |
| Text | `#0c1100` | Headings and primary copy |
| Muted text | `#999999` | Secondary copy, captions |
| Border | `#cccccc` | Hairlines, dividers, outlines |
| Accent | `#0c1100` | Primary action and highlights |

Palette by frequency of use: `#0c1100` · `#cccccc` · `#ffffff` · `#333333` · `#4d4d4d` · `#eeeeee` · `#fafafa` · `#2d2c2c` · `#262626` · `#e7e3e0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 56px · h3 20px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Content width:** `max-w-[82rem]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center bg-[#0c1100] text-white rounded-full py-2 px-4 gap-2 hover:bg-[#333] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Marquee (`marquee`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfcfc;
  --color-surface: #eeeeee;
  --color-text: #0c1100;
  --color-muted: #999999;
  --color-border: #cccccc;
  --color-accent: #0c1100;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcfc',
    surface: '#eeeeee',
    ink: '#0c1100',
    muted: '#999999',
    line: '#cccccc',
    accent: '#0c1100',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large and heavy in near-black (#0c1100) with tight leading.
- **Do:** Use the near-black solid button for the primary action, and keep it as the only filled element in the nav.
- **Do:** Let the work images carry the colour in the grid, and keep the page ground off-white (#fdfcfc).
- **Don't:** Don't add a coloured accent; the page is near-black and off-white only.
- **Don't:** Don't pad the hero with decorative shapes; the layout is type first.
- **Don't:** Don't use a dark navigation bar; the nav sits transparent on the light ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
