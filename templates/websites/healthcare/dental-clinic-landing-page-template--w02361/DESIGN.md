# Design system — Dental Clinic Landing Page Template

`SN-W02361` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, sharp dental page on near-black (#09090b) with a bold white sans headline, where the second line fades into a grey gradient. The primary action is a lime (#a3e635) pill with dark text, and the hero photograph is a large rounded arch. Lime is the only colour and is reserved for one action, so the page feels modern and energetic.

**Mood:** dark, sharp, energetic, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#27272a` · `#a1a1aa` · `#09090b` · `#000000` · `#18181b` · `#71717a` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-lime-400 text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-lime-300 transition-all transform hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#a3e635) for the primary button only, with dark text on it.
- **Do:** Set the headline in large bold sans with the second line in a grey gradient.
- **Do:** Frame the hero photograph in a large rounded arch.
- **Don't:** Don't use lime for body text or for large fills beyond the button.
- **Don't:** Don't add a second accent colour.
- **Don't:** Don't use light backgrounds; the page stays black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
