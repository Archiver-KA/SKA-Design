# Design system — KÁVA Coffee Shop Landing Page Template

`SN-W01198` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, dark cafe stance: a near-black brown ground under a full-bleed photograph of the room, with a cream-yellow headline and a cream solid and outline button pair. The photograph is darkened with a brown overlay so the cream type holds, and the intro block is a dark translucent panel with a cream left rule. The result feels evening-lit and atmospheric rather than bright.

**Mood:** warm, moody, atmospheric, hospitality

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#100c08` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#0c0a09` | Hairlines, dividers, outlines |
| Accent | `#fef3c7` | Primary action and highlights |

Palette by frequency of use: `#0c0a09` · `#fffbeb` · `#fef3c7` · `#ffffff` · `#a8a29e` · `#57534e` · `#000000` · `#fde68a` · `#100c08` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Google Sans, Space Mono, Lora, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-stone-950/10`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-4`, `gap-3`, `gap-5`

**Primary button**

```html
<a class="rounded-full bg-amber-100 px-5 py-2.5 text-sm font-medium text-stone-950 shadow-sm shadow-amber-950/20 transition hover:bg-amber-50 font-syne">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Process / steps (`how-it-works`)
5. Menu list (`menu-list`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #100c08;
  --color-surface: #0c0a09;
  --color-text: #f5f5f4;
  --color-muted: #78716c;
  --color-border: #0c0a09;
  --color-accent: #fef3c7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#100c08',
    surface: '#0c0a09',
    ink: '#f5f5f4',
    muted: '#78716c',
    line: '#0c0a09',
    accent: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in cream (#fef3c7) over a darkened photograph with a brown overlay.
- **Do:** Use the cream as the only accent for buttons and rules.
- **Do:** Keep the near-black ground (#100c08) behind every text block.
- **Don't:** Don't place light body text on the photograph without the dark overlay.
- **Don't:** Don't put the intro block on a bright panel; it sits as dark glass with a cream rule.
- **Don't:** Don't introduce bright colours; the only tint is warm cream and brown.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
