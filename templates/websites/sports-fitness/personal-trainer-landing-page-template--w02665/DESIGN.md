# Design system — Personal Trainer Landing Page Template

`SN-W02665` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark navy trainer page on #050d1a with a stacked uppercase white headline whose final word is set in bright blue (#2979ff). A small monospace eyebrow sits above the headline, and a blue pill button sits in the top right. The sections use the slightly lighter panel colour #0b1628 for cards. The look is direct and sporty, and it relies on blue as the only accent.

**Mood:** direct, sporty, navy, crisp, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050d1a` | Page ground |
| Surface | `#0b1628` | Cards, panels, raised areas |
| Text | `#f2f2f2` | Headings and primary copy |
| Border | `#f2f2f2` | Hairlines, dividers, outlines |
| Accent | `#2979ff` | Primary action and highlights |

Palette by frequency of use: `#2979ff` · `#ffffff` · `#b0b0b0` · `#f2f2f2` · `#050d1a` · `#0b1628` · `#0b3d91` · `#1565c0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Barlow Condensed, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 112px · h2 60px · h3 30px · body 18px
- **Weights in use:** bold, normal, extrabold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_24px_rgba(41,121,255,0.35)]`, `shadow-[inset_0_1px_0_rgba(41,121,255,0.2)]`, `shadow-[0_0_24px_rgba(41,121,255,0.1)]`
- **Content width:** `max-w-[1440px]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="flex items-center justify-center gap-3 px-10 py-5 bg-[#2979FF] text-white uppercase font-display font-semibold text-xl tracking-widest rounded-sm hover:bg-white hover:text-[#0B3D91] transition-colors shadow-[0_0_32px_rgba(41,121,255,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Modal / overlay (`modal-overlay`)
6. Team (`team`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050d1a;
  --color-surface: #0b1628;
  --color-text: #f2f2f2;
  --color-border: #f2f2f2;
  --color-accent: #2979ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050d1a',
    surface: '#0b1628',
    ink: '#f2f2f2',
    line: '#f2f2f2',
    accent: '#2979ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final word of the headline in #2979ff and keep the rest white.
- **Do:** Place a small monospace eyebrow above each headline.
- **Do:** Use #0b1628 for cards and #050d1a for the page ground.
- **Don't:** Don't use blue for paragraph text.
- **Don't:** Don't use the deep blue (#0b3d91) as a fill for large areas.
- **Don't:** Don't set headlines in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
