# Design system — Junk Removal Services Landing Page Template

`SN-W03969` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, editorial service page on black. The headline sets one italic serif line in white above a heavy uppercase line in mint green (#34d399), which gives it a magazine-like contrast. A quote panel with italic text and a thin mint rule adds a composed, personal voice, and the buttons are white and dark pills.

**Mood:** editorial, dark, confident, composed, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#34d399` · `#000000` · `#6ee7b7` · `#d1fae5` · `#a7f3d0` · `#059669` · `#38bdf8` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 78px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-black`, `shadow-[0_0_0_1px_rgba(16,185,129,0.5),0_2px_0_#065f46]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full py-4 rounded-lg border font-semibold text-center transition-all mt-auto bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-emerald-200">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Pricing (`pricing`)
6. Comparison (`comparison`)
7. Testimonials (`testimonials`)
8. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #38bdf8;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one headline line in italic serif and the next in heavy uppercase
- **Do:** Use mint (#34d399) for the uppercase headline line and small labels
- **Do:** Mark quoted copy with a thin mint rule on a dark panel
- **Don't:** Don't set the hero on a light background
- **Don't:** Don't use mint for buttons or large fills
- **Don't:** Don't set the italic serif in capitals

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
