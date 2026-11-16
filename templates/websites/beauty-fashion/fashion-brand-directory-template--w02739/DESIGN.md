# Design system — Fashion Brand Directory Template

`SN-W02739` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Neo-brutalist layout built from flat colour blocks: a cream page holds a large yellow panel with a thick black outline. The headline is heavy black sans-serif in short stacked lines, and the coral action button has a black border and a hard offset shadow. A tilted pill label and small stickers add playful energy without any soft gradients.

**Mood:** playful, brutalist, bold, flat

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff4e0` | Page ground |
| Surface | `#ffd460` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff6b6b` | Primary action and highlights |
| Second accent | `#ffd460` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ff6b6b` · `#ffffff` · `#ffd460` · `#1f2937` · `#4d96ff` · `#6b7280` · `#fff4e0` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h3 30px · body 18px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`, `shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`, `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
- **Content width:** `max-w-[90rem]`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-6`, `gap-8`, `gap-x-8`

**Primary button**

```html
<a class="inline-block border-4 border-black bg-[#FF6B6B] text-white px-8 py-4 text-lg font-bold uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fff4e0;
  --color-surface: #ffd460;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #ff6b6b;
  --color-accent-2: #ffd460;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff4e0',
    surface: '#ffd460',
    ink: '#000000',
    muted: '#6b7280',
    line: '#000000',
    accent: '#ff6b6b',
    accent2: '#ffd460',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Keep panels and buttons outlined in solid black with a thick border
- **Do:** Use coral (#ff6b6b) for the main action button, with a hard offset black shadow
- **Do:** Set headlines in Space Grotesk, heavy and stacked in short lines
- **Don't:** Don't add soft shadows or gradients; the offset shadows are hard and flat
- **Don't:** Don't use the yellow as the page ground; it is a panel colour on cream
- **Don't:** Don't set body text in a light weight; the page relies on heavy type

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
