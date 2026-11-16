# Design system — OmegaDigital Agency Landing Page Template

`SN-W01654` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a lime (#d7ff00) call-to-action button in the top right and a faint lime glow across the upper right corner. The style is dark and high-contrast, with lime used as a single attention colour.

**Mood:** dark, high-contrast, sparse, energetic, modest

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#a0a0a0` | Headings and primary copy |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#d7ff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d7ff00` · `#2a2a2a` · `#a0a0a0` · `#111111` · `#050505` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(215,255,0,0.5)]`, `shadow-2xl`, `shadow-[#D7FF00]/5`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#D7FF00] text-black font-semibold text-base px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Contact form (`contact-form`)
6. Team (`team`)
7. Case studies (`case-studies`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #a0a0a0;
  --color-border: #2a2a2a;
  --color-accent: #d7ff00;
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
    surface: '#111111',
    ink: '#a0a0a0',
    line: '#2a2a2a',
    accent: '#d7ff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#d7ff00) for the header call-to-action button
- **Do:** Keep the navigation links in muted grey (#a0a0a0) at small size
- **Do:** Use a faint lime glow at the top edge rather than behind body copy
- **Don't:** Don't place body copy over the lime glow
- **Don't:** Don't use lime for large fills or long text
- **Don't:** Don't add a second bright accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
