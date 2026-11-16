# Design system — AI English Learning Landing Page Template

`SN-W03405` · education · dark mode · Sinera Atlas theme `calm` · language `ar`

## Direction

Dark, right-to-left learning-app page on a near-black navy ground, with a large white Arabic headline whose middle line is set in lavender-indigo (#818cf8). A phone mockup on the left shows a live listening state with a violet microphone button, so the product is shown in use rather than described. Buttons are small pills, and the whole layout follows the right-to-left flow.

**Mood:** dark, conversational, modern, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#010309` | Page ground |
| Surface | `#010309` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#818cf8` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#1e293b` · `#4f46e5` · `#010309` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Tajawal
- **Body:** Tajawal
- **Loaded families:** Tajawal
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)]`, `shadow-[0_0_25px_-5px_rgba(79,70,229,0.6)]`, `shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="h-14 px-8 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-slate-200 transition-all hover:scale-[1.02] shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Bento grid (`bento-grid`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #010309;
  --color-surface: #010309;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #4ade80;
  --font-display: "Tajawal", sans-serif;
  --font-body: "Tajawal", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#010309',
    surface: '#010309',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Tajawal'], sans: ['Tajawal'] },
} }
```

## Do and don't

- **Do:** Set the Arabic headline in white with the middle line in lavender (#818cf8), aligned to the right.
- **Do:** Use the violet microphone and purple accents on the product mockup only.
- **Do:** Keep the layout right-to-left: text blocks align right and the phone mockup sits on the left.
- **Don't:** Don't left-align the Arabic copy; it follows the right-to-left flow.
- **Don't:** Don't set body copy in lavender.
- **Don't:** Don't fill the hero with a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
