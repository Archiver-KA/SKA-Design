# Design system — Church Landing Page Template

`SN-W03573` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The church page sits on a warm cream ground (#f9f6f0) with a dark brown headline in serif, and the second line set in italic terracotta (#d06b4a). Terracotta also fills the top-right button, with a plain outlined button beside the hero copy. A soft paper texture and a large rounded photo frame give the page a homely feel.

**Mood:** warm, homely, textured, faithful, welcoming

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f6f0` | Page ground |
| Surface | `#fdfbf7` | Cards, panels, raised areas |
| Text | `#3a2e2a` | Headings and primary copy |
| Muted text | `#4a3b32` | Secondary copy, captions |
| Border | `#fdfbf7` | Hairlines, dividers, outlines |
| Accent | `#d06b4a` | Primary action and highlights |

Palette by frequency of use: `#fdfbf7` · `#d06b4a` · `#4a3b32` · `#d1a741` · `#2d2421` · `#e8e1d3` · `#f9f6f0` · `#314f40` · `#c8c0b1` · `#3a2e2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Vollkorn
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_20px_-10px_rgba(45,36,33,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#D06B4A] text-[#FDFBF7] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#B55737] transition-all duration-300 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f6f0;
  --color-surface: #fdfbf7;
  --color-text: #3a2e2a;
  --color-muted: #4a3b32;
  --color-border: #fdfbf7;
  --color-accent: #d06b4a;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f6f0',
    surface: '#fdfbf7',
    ink: '#3a2e2a',
    muted: '#4a3b32',
    line: '#fdfbf7',
    accent: '#d06b4a',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic terracotta (#d06b4a)
- **Do:** Use terracotta for the primary button and key phrases only
- **Do:** Frame photographs in large rounded shapes on the cream ground
- **Don't:** Don't use cool greys or blues
- **Don't:** Don't set headlines in a bold geometric sans-serif
- **Don't:** Don't use pure white for page backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
