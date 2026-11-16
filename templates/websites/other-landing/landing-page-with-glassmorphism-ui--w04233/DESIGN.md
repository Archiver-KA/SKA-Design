# Design system — Landing Page with Glassmorphism UI

`SN-W04233` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A saturated indigo-to-violet gradient fills the first screen, with a translucent glass navigation bar and white headline text. The primary action is a solid white pill, with a translucent outline button beside it, so the contrast does the work. Inter sits large and centred, and the page leans on colour gradient rather than imagery or illustration.

**Mood:** bold, gradient, saturated, glassy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#312e81` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c7d2fe` · `#e0e7ff` · `#312e81` · `#6366f1` · `#6b21a8` · `#3730a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="bg-white text-indigo-900 px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #312e81;
  --color-text: #ffffff;
  --color-accent: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#312e81',
    ink: '#ffffff',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero as an indigo gradient starting from #312e81
- **Do:** Use a solid white pill for the primary action and a translucent button for the second
- **Do:** Keep headlines in Inter, large and white
- **Don't:** Don't use light backgrounds in the hero; the white text needs the gradient
- **Don't:** Don't add a second solid accent colour next to the indigo
- **Don't:** Don't use imagery in the hero; the gradient carries the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
