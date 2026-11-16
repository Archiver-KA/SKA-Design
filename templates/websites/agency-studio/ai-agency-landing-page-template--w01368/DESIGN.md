# Design system — AI Agency Landing Page Template

`SN-W01368` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a warm orange glow rising from the top-right corner and a faint grid of hairlines behind the nav. The headline is a large white sans on two lines, with a thin orange underline stroke beneath the words manual work. Orange is the accent for the glow, the underline and the logo, and the page reads as dark, technical and warm at once.

**Mood:** dark, technical, warm, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050402` | Page ground |
| Surface | `#555555` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f5f5f5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#050402` · `#f5f5f5` · `#333333` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Sora
- **Body:** Inter
- **Loaded families:** Inter, Sora
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-brand-dark px-4 py-2 rounded-full text-xs font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Services (`services`)
6. Stats band (`stats`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050402;
  --color-surface: #555555;
  --color-text: #ffffff;
  --color-muted: #f5f5f5;
  --color-border: #ffffff;
  --font-display: "Sora", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050402',
    surface: '#555555',
    ink: '#ffffff',
    muted: '#f5f5f5',
    line: '#ffffff',
  },
  fontFamily: { display: ['Sora'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near black, with a warm orange glow only in the top corner.
- **Do:** Use a thin orange underline stroke under one headline phrase.
- **Do:** Keep the hairline grid in the background faint and behind the nav.
- **Don't:** Don't use orange for body text or large buttons.
- **Don't:** Don't move the glow behind the headline; it sits in the corner.
- **Don't:** Don't add more than one underline stroke per headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
