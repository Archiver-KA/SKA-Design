# Design system — Orthotics Clinic Landing Page Template

`SN-W02495` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A clean clinical hero on white with a dark slate headline, where one phrase is set in lighter grey-blue to separate the claim from the qualifier. Teal (#2cb1bc) is the single primary button and the only solid colour block. Product photography sits in a rounded frame with small floating data cards overlapping its corner, which is the signature of the page.

**Mood:** clinical, clear, technical, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2cb1bc` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#2cb1bc` · `#0f172a` · `#64748b` · `#f1f5f9` · `#e2e8f0` · `#f8fafc` · `#94a3b8` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="inline-flex justify-center items-center px-8 py-3.5 bg-[#2CB1BC] text-white rounded-lg font-medium hover:bg-[#259aa3] transition-all shadow-sm shadow-[#2CB1BC]/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Sign-in form (`auth-form`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Bento grid (`bento-grid`)
7. FAQ (`faq`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2cb1bc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2cb1bc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter with one phrase in lighter slate for contrast
- **Do:** Use teal (#2cb1bc) only for the primary button
- **Do:** Overlap small data cards on the corner of rounded product photos
- **Don't:** Don't use teal for body text or links
- **Don't:** Don't put more than one solid colour block on the first screen
- **Don't:** Don't square off the photo frame's rounded corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
