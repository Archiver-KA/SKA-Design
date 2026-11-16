# Design system — Education Consulting Landing Page Template

`SN-W03448` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, calm education-systems page on a near-white gradient ground, with a large serif headline in deep forest green [#31543a]. The word heal is set in italic teal [#3f8a84], which is the only accent in the hero. A solid green button and a muted subtitle complete a quiet, humane layout.

**Mood:** calm, humane, earthy, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#31543a` | Cards, panels, raised areas |
| Text | `#31543a` | Headings and primary copy |
| Muted text | `#31543a` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#3f8a84` | Primary action and highlights |
| Second accent | `#3f8a84` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#31543a` · `#2a2a2a` · `#e4b756` · `#3f8a84` · `#6b7280` · `#f3f4f6` · `#6ca8c2` · `#f9fafa` · `#c89a8f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#31543A] hover:bg-[#3F8A84] text-white px-5 py-2 rounded-full text-xs font-medium transition-all transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Stats band (`stats`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #31543a;
  --color-text: #31543a;
  --color-muted: #31543a;
  --color-border: #f3f4f6;
  --color-accent: #3f8a84;
  --color-accent-2: #3f8a84;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#31543a',
    ink: '#31543a',
    muted: '#31543a',
    line: '#f3f4f6',
    accent: '#3f8a84',
    accent2: '#3f8a84',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif in deep forest green (#31543a)
- **Do:** Use the teal (#3f8a84) italic for one emphasised word per headline
- **Do:** Use the forest green (#31543a) for the primary button
- **Don't:** Don't use bright gold or blue accents; keep to green and teal
- **Don't:** Don't set headlines in sans-serif
- **Don't:** Don't use white text on the pale background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
