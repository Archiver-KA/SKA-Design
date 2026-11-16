# Design system — Visual Studio & Film Production Template

`SN-W03751` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black studio page with a large, heavy white sans-serif headline set in tight lines down the left side. Orange-red [#f04a23] is reserved for primary buttons, and each solid button is paired with a thin outlined secondary. Supporting copy sits in a narrow right-hand column behind a hairline rule, so the page reads as blunt and confident.

**Mood:** bold, direct, cinematic, confident, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#090909` | Page ground |
| Surface | `#101010` | Cards, panels, raised areas |
| Text | `#f4f1ea` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f04a23` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f04a23` · `#000000` · `#090909` · `#101010` · `#c43c1c` · `#ff5b32` · `#f4f1ea` · `#0b0b0b` · `#0d0d0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-5`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden min-h-11 items-center gap-2 rounded-md bg-[#f04a23] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#ff5b32] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Case studies (`case-studies`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #090909;
  --color-surface: #101010;
  --color-text: #f4f1ea;
  --color-border: #ffffff;
  --color-accent: #f04a23;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#090909',
    surface: '#101010',
    ink: '#f4f1ea',
    line: '#ffffff',
    accent: '#f04a23',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange-red (#f04a23) only for primary buttons
- **Do:** Set headlines in heavy white sans-serif with tight line spacing
- **Do:** Pair each solid button with a thin outlined secondary button
- **Don't:** Don't use orange for body text or icons
- **Don't:** Don't round button corners beyond a small radius
- **Don't:** Don't place orange behind body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
