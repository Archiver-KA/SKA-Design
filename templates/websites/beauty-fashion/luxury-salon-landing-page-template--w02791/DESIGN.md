# Design system — Luxury Salon Landing Page Template

`SN-W02791` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A soft, editorial salon page on warm off-white (#fafaf9). A large Cormorant headline in near-black sits on the left, with the second line in italic, a pill badge above and a short paragraph below. Two buttons, one solid dark and one outlined, sit under the copy. On the right, a tall photograph of a warmly lit salon interior sits in an arch-shaped frame, which is the page's most recognisable detail.

**Mood:** warm, editorial, soft, calm, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#ffffff` · `#78716c` · `#57534e` · `#fafaf9` · `#f5f5f4` · `#292524` · `#a8a29e` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-stone-200/50`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center px-6 py-2 bg-stone-900 text-stone-50 text-xs font-medium tracking-wide uppercase hover:bg-stone-700 transition-all rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
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
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Frame the hero photograph in an arch shape with a large rounded top corner, not a plain rectangle.
- **Do:** Set the headline in Cormorant with the second line in italic.
- **Do:** Use near-black (#1c1917) for the primary button and an outlined button for the secondary action.
- **Don't:** Don't use green for the primary button; green is for the chat bubble only.
- **Don't:** Don't add shadows around the arch image.
- **Don't:** Don't set the italic line in bold weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
