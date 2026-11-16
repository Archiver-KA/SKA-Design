# Design system — AI Infrastructure Landing Page Template

`SN-W00106` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

This infrastructure page is a dark, technical product hero on a near-black ground (#18181b), with a large white sans headline in two lines and a light grey sub-line. A wide, dark device-style panel with a faint grid sits under the copy, and the nav is a rounded glass bar. Colour is almost absent from the first screen, so the page reads as engineering-led and neutral.

**Mood:** technical, neutral, engineered, dark, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#a1a1aa` · `#71717a` · `#6366f1` · `#3f3f46` · `#d4d4d8` · `#f4f4f5` · `#18181b` · `#52525b` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 83px · h2 30px · h3 18px · body 14px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-inner`, `shadow-2xl`, `shadow-[0_0_8px_rgba(161,161,170,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-3 py-1 text-xs font-normal text-zinc-100 bg-[#1e1e24] rounded border border-zinc-700 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Code / terminal (`code-terminal`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #3f3f46;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#3f3f46',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans on the near-black ground (#18181b)
- **Do:** Show the product as a dark framed panel with a faint technical grid
- **Do:** Use the indigo (#6366f1) only for small markers, not for fills
- **Don't:** Don't use the grey (#27272a) as a card surface across the page; it is too light for the hero
- **Don't:** Don't add decorative gradients to the hero; the style is flat
- **Don't:** Don't add a second accent colour; the page is mostly neutral

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
