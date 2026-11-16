# Design system — Agency Website Landing Page Template

`SN-W01360` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `bg`

## Direction

A deep navy-black page with a centred headline in Inter, where the first line is white and the second fades to grey. Blue (#3b82f6) fills the primary button and a dark outlined pill sits beside it, so the blue carries the action. A thin rotated outline frame sits behind the hero as a faint geometric detail. The look is clean, dark and product-like, with colour held to the button.

**Mood:** dark, clean, corporate, product-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#9ca3af` · `#d1d5db` · `#020617` · `#818cf8` · `#60a5fa` · `#2563eb` · `#111827` · `#030712`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** DM Sans, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-blue-900/20`
- **Content width:** `max-w-3xl`, `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-x-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hover:bg-blue-500 transition-all duration-300 text-base font-medium text-white rounded-full px-6 py-2.5 bg-blue-600 shadow-[0_0_24px_rgba(37,99,235,0.75)] hover:shadow-[0_0_32px_rgba(37,99,235,0.9)] ring-1 ring-blue-400/70 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#020617',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground at #020617 and headlines in white Inter at large size.
- **Do:** Use blue (#3b82f6) for the primary button and one highlight per section.
- **Do:** Keep the secondary button as a dark outlined pill beside the primary one.
- **Don't:** Don't use the rotated outline frame for text or cards; it stays a background detail.
- **Don't:** Don't add a second saturated colour to the hero.
- **Don't:** Don't set the page on a light background; the dark ground is the design.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
