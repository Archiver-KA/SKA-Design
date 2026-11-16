# Design system — AI Portfolio Website Template

`SN-W01780` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A light grey framed page with a very large black Inter headline stacked over two lines, and a blue phrase in the sub line. A small black pill tags the service label, and a black filled button sits at the top right. The page is spare and high-contrast, with blue used only in one sub-phrase and the rest in black and grey.

**Mood:** spare, high-contrast, light, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#e5e7eb` · `#6b7280` · `#111827` · `#1f2937` · `#60a5fa` · `#9ca3af` · `#2563eb` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 20px · h3 48px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-inner`
- **Content width:** `max-w-4xl`, `max-w-[1400px]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-12`, `gap-20`, `gap-3`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-widest text-gray-500 hover:text-black transition-colors px-4 py-2 rounded-full hover:bg-gray-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #facc15;
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
    surface: '#000000',
    ink: '#111111',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black Inter, stacked on two lines.
- **Do:** Use the blue (#60a5fa) only for the highlighted phrase in the sub line.
- **Do:** Keep the header button black with white text, and the label tag black.
- **Don't:** Don't add more colour; black and grey carry the page.
- **Don't:** Don't set the headline in a light weight; it reads as heavy.
- **Don't:** Don't place the framed page on a dark background; it sits on light grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
