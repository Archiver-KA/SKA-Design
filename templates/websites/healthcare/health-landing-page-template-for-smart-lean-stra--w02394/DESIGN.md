# Design system — Health Landing Page Template for Smart Lean Strategy

`SN-W02394` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bold, uppercase fitness-program hero on white, with a large navy (#244a70) sans-serif headline that switches to a lime-to-teal gradient on the words YOUR BODY. The lime (#d4ff33) is used for the header button only, so the energetic colour is kept to one place. Tight centred layout and heavy weight give it a direct, performance-driven tone.

**Mood:** bold, energetic, direct, uppercase, performance

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f0f9ff` | Cards, panels, raised areas |
| Text | `#244a70` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#305f8e` | Primary action and highlights |
| Second accent | `#d4ff33` | Supporting highlights |

Palette by frequency of use: `#305f8e` · `#ffffff` · `#d4ff33` · `#244a70` · `#8ebb14` · `#6b7280` · `#f3f4f6` · `#4b5563` · `#dbeafe` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 18px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#305F8E] bg-[#D4FF33] rounded-lg hover:bg-[#ccee22] transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-lime-400/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Testimonials (`testimonials`)
5. Stats band (`stats`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f0f9ff;
  --color-text: #244a70;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #305f8e;
  --color-accent-2: #d4ff33;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f0f9ff',
    ink: '#244a70',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#305f8e',
    accent2: '#d4ff33',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans-serif in navy (#244a70), with one phrase in the lime-to-green gradient.
- **Do:** Use the lime (#d4ff33) for the header button only, with dark text on it.
- **Do:** Keep the page on white with the pale blue surface (#f0f9ff) for panels.
- **Don't:** Don't set body copy in lime; it has no contrast on white.
- **Don't:** Don't extend the gradient beyond the highlighted phrase.
- **Don't:** Don't use lowercase headlines; the uppercase is part of the voice.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
