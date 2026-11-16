# Design system — Golf Instruction Blog Landing Page Template

`SN-W03771` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A classic sporty hero on a navy gradient [#003257], deepening toward the top and lightening toward the lower edge. A large white serif headline sits over an italic second line, with red [#ec2224] reserved for a small uppercase eyebrow and the navigation call to action. Three serif items with small capital subtitles sit beneath a short sans-serif intro, which gives a clear split between display and text type.

**Mood:** classic, sporty, confident, navy, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#003257` | Page ground |
| Surface | `#f2f2f2` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec2224` | Primary action and highlights |
| Second accent | `#003257` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec2224` · `#003257` · `#555555` · `#f2f2f2` · `#333333` · `#666666` · `#c9191b` · `#999999` · `#0b1d2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-[#ec2224] text-white px-5 py-2.5 text-xs font-semibold tracking-wide uppercase hover:bg-[#c9191b] transition-colors whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Articles (`blog-articles`)
5. Testimonials (`testimonials`)
6. Stats band (`stats`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #003257;
  --color-surface: #f2f2f2;
  --color-text: #333333;
  --color-muted: #555555;
  --color-border: #ffffff;
  --color-accent: #ec2224;
  --color-accent-2: #003257;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#003257',
    surface: '#f2f2f2',
    ink: '#333333',
    muted: '#555555',
    line: '#ffffff',
    accent: '#ec2224',
    accent2: '#003257',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the second line in italic
- **Do:** Use red (#ec2224) only for the eyebrow label and primary calls to action
- **Do:** Set the three feature items as serif titles over small capital subtitles
- **Don't:** Don't use red for body copy or large areas
- **Don't:** Don't set headlines in sans-serif inside the hero
- **Don't:** Don't place light text on the lighter blue near the bottom edge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
