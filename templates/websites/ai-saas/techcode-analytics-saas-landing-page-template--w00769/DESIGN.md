# Design system — TechCode Analytics SaaS Landing Page Template

`SN-W00769` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black hero with a faint indigo tint and a large, tight Rethink Sans headline in white across three lines. A short purple eyebrow label sits above, and a white pill button is the only filled control. A dark dashboard preview sits to the right, so type sets the hierarchy and the purple stays a small eyebrow colour.

**Mood:** clean, dark, analytical, tight

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8f6ff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ebe7ff` | Hairlines, dividers, outlines |
| Accent | `#6145ff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0d0c54` · `#40406a` · `#ebe7ff` · `#6145ff` · `#b8b1d8` · `#f8f6ff` · `#ba9dff` · `#5035e4` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Rethink Sans
- **Body:** Rethink Sans
- **Loaded families:** Rethink Sans
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_8px_rgba(77,145,225,0.1)]`, `shadow-lg`
- **Content width:** `max-w-[1346px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="bg-white text-[#0D0C54] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Dashboard preview (`dashboard-preview`)
6. Call to action (`cta`)
7. Integrations (`integrations`)
8. Articles (`blog-articles`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8f6ff;
  --color-text: #ffffff;
  --color-border: #ebe7ff;
  --color-accent: #6145ff;
  --font-display: "Rethink Sans", sans-serif;
  --font-body: "Rethink Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8f6ff',
    ink: '#ffffff',
    line: '#ebe7ff',
    accent: '#6145ff',
  },
  fontFamily: { display: ['Rethink Sans'], sans: ['Rethink Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in Rethink Sans bold, tight leading, in white
- **Do:** Use the purple (#6145ff) only for the eyebrow label
- **Do:** Keep the white primary button as the one filled control in the hero
- **Don't:** Don't use the deep indigo (#0d0c54) as a text colour on dark sections
- **Don't:** Don't add extra accent colours to the hero
- **Don't:** Don't fill the rating stars; they stay outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
