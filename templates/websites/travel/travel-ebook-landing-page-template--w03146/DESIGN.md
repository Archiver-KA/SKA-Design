# Design system — Travel Ebook Landing Page Template

`SN-W03146` · travel · dark mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A dark green hero fades into a warm cream section below. The hero carries a muted slate-green photograph, a thin outlined button and small caps, and beneath it a large centred serif italic quote on cream (#f4f2ed) sets the editorial voice.

**Mood:** editorial, muted, quiet, warm, literary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a2e22` | Page ground |
| Surface | `#0f1c15` | Cards, panels, raised areas |
| Text | `#f4f2ed` | Headings and primary copy |
| Border | `#0f1c15` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#0f1c15` · `#f4f2ed` · `#ffffff` · `#1a2e22` · `#f9f9f9` · `#cfccc5` · `#d4cfc3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 18px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[#1A2E22]/10`, `shadow-[#0F1C15]/30`
- **Content width:** `max-w-4xl`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full bg-[#F4F2ED] text-[#0F1C15] py-4 rounded-xl font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Articles (`blog-articles`)
4. Feature grid (`features`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a2e22;
  --color-surface: #0f1c15;
  --color-text: #f4f2ed;
  --color-border: #0f1c15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a2e22',
    surface: '#0f1c15',
    ink: '#f4f2ed',
    line: '#0f1c15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on the deep green (#1a2e22) and the lower sections on cream (#f4f2ed)
- **Do:** Set pull quotes in a large serif italic, centred, in dark ink
- **Do:** Use thin outlined buttons with small tracked caps, as in the hero
- **Don't:** Don't use bright colours for buttons; this style is outline and tone
- **Don't:** Don't set the quotes in sans-serif
- **Don't:** Don't set the quotes in a bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
