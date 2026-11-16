# Design system — Interior Design Landing Page Template

`SN-W03255` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A restrained dark page on a near-black ground (#050505), with a single saturated blue (#3955e7) reserved for the navigation call to action. One sans family runs throughout, with glass panels and soft glow shapes that add depth without hard edges. Contrast comes from the blue button against the black.

**Mood:** minimal, dark, restrained, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3955e7` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3955e7` · `#000000` · `#0a0a0a` · `#050505` · `#080808` · `#262626` · `#404040` · `#4ade80` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]`, `shadow-2xl`, `shadow-[0_0_20px_rgba(57,85,231,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-[#3955E7] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(57,85,231,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. Case studies (`case-studies`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3955e7;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#3955e7',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#3955e7) only for the primary call to action.
- **Do:** Keep the ground near-black (#050505) and let glass panels and glow shapes sit on it.
- **Do:** Set all text in Inter, with the same family for headings and body.
- **Don't:** Don't add a second bright accent beside the blue.
- **Don't:** Don't use the blue as a fill for whole sections.
- **Don't:** Don't swap the sans family for a display face; one family carries the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
