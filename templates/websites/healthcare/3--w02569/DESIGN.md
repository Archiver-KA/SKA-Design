# Design system — 알룰로스 저당 약과 3조 리푸드랩

`SN-W02569` · healthcare · light mode · Sinera Atlas theme `calm` · language `ko`

## Direction

An editorial food-brand page on a warm cream ground (#f0ece5) with a large black serif headline in Korean. One phrase is set in a dark green, which is the only colour in the hero, and the layout splits into a type column and a soft product photo. Pill labels and a rounded-full header button add a quiet, premium restraint suited to a dessert brand.

**Mood:** editorial, warm, premium, quiet, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f0ece5` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#f0ece5` · `#000000` · `#f3efe8` · `#e9e2d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Noto Serif KR
- **Body:** system sans-serif
- **Loaded families:** Noto Serif KR
- **Scale (largest breakpoint):** h1 68px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1380px]`, `max-w-2xl`
- **Section padding:** `py-28`, `py-20`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brand-dark text-white hover:bg-brand-green transition-colors text-sm font-bold shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Video / media (`video-media`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f0ece5;
  --color-text: #111111;
  --font-display: "Noto Serif KR", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f0ece5',
    ink: '#111111',
  },
  fontFamily: { display: ['Noto Serif KR'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the emphasised headline phrase in dark green and keep the rest of the headline black
- **Do:** Use the cream (#f0ece5) for large panels and let the photograph sit on it without a frame
- **Do:** Keep the serif display face for the headline and use the system sans only for body copy
- **Don't:** Don't add bright colours; the page depends on cream, black and a single green
- **Don't:** Don't use heavy shadows on the photo panel; the edge is a plain tonal change
- **Don't:** Don't crowd the headline; leave generous line spacing.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
