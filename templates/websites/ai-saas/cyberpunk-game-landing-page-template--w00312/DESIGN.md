# Design system — Cyberpunk Game Landing Page Template

`SN-W00312` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A high-contrast, dark shooter page on near-black [#050507], with a large white headline whose second line fades from silver to dark. The single red [#eb0029] accent marks the status badge, the enlist button and the logo mark. The hero is left-aligned with a portrait panel on the right, and Inter in bold uppercase suits the aggressive tone.

**Mood:** aggressive, high-contrast, dark, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050507` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eb0029` | Primary action and highlights |

Palette by frequency of use: `#eb0029` · `#ffffff` · `#000000` · `#71717a` · `#52525b` · `#a1a1aa` · `#27272a` · `#050507` · `#18181b` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 48px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_20px_-5px_#eb0029]`, `shadow-[0_0_50px_-15px_rgba(0,0,0,1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#eb0029] hover:bg-[#c40022] text-white px-6 py-2 rounded-md font-medium uppercase tracking-wider transition-colors flex-shrink-0 shadow-[0_0_20px_-5px_#eb0029]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Newsletter signup (`newsletter`)
4. About (`about`)
5. Marquee (`marquee`)
6. Services (`services`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050507;
  --color-surface: #000000;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #eb0029;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050507',
    surface: '#000000',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#eb0029',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the red (#eb0029) for the enlist button and the status badge only
- **Do:** Set the hero headline in bold uppercase Inter, with the second line in silver
- **Do:** Keep the portrait panel dark with a thin border and a bold caption
- **Don't:** Don't use red as a page background or a large fill
- **Don't:** Don't set body copy in uppercase; only headings and buttons
- **Don't:** Don't publish a placeholder character panel or broken image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
