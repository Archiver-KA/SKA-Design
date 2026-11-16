# Design system — Therapy SaaS Landing Page Template

`SN-W02543` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A calm SaaS hero on a white ground with a faint blue wash: a heavy near-black headline on the first line and a muted slate second line, with that two-tone split as the main emphasis. A single medium blue (#4a90e2) button and a fully rounded email field form the only interactive element, sitting on a soft glow. The stance is soft, professional and restrained, a product that speaks quietly.

**Mood:** soft, professional, restrained, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f7f9fc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e2e8f0` | Hairlines, dividers, outlines |
| Accent | `#4a90e2` | Primary action and highlights |

Palette by frequency of use: `#4a90e2` · `#0f172a` · `#ffffff` · `#e2e8f0` · `#64748b` · `#94a3b8` · `#f7f9fc` · `#3b7ecc` · `#e0e7ff` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[#4A90E2]/10`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2 bg-[#4A90E2] hover:bg-[#3B7ECC] text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-[#4A90E2]/20 hover:shadow-xl hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f7f9fc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #e2e8f0;
  --color-accent: #4a90e2;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f7f9fc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#e2e8f0',
    accent: '#4a90e2',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use blue (#4a90e2) for the primary button only
- **Do:** Set the second headline line in a muted slate (#64748b) to create the two-tone split
- **Do:** Keep the email field and its button combined into one rounded pill
- **Don't:** Don't add a second blue action in the hero
- **Don't:** Don't use hard corners; the field and button are fully rounded
- **Don't:** Don't remove the faint blue glow behind the hero; it is the only colour in the ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
