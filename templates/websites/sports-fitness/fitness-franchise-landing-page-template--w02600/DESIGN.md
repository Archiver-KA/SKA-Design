# Design system — Fitness Franchise Landing Page Template

`SN-W02600` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, bold franchise page on black with a large white headline where the brand name is set in glowing yellow (#eab308). The yellow also fills the header and primary buttons, and the small caption under the button is in grey capitals. The design is loud in its headline and restrained elsewhere, with the yellow used as one clear signal against black.

**Mood:** bold, dark, confident, glowing, commercial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |

Palette by frequency of use: `#eab308` · `#ffffff` · `#000000` · `#18181b` · `#71717a` · `#3f3f46` · `#27272a` · `#a1a1aa` · `#09090b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 48px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(234,179,8,0.3)]`, `shadow-black`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="group relative overflow-hidden rounded-sm bg-yellow-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-yellow-400">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #18181b;
  --color-accent: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#18181b',
    accent: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand name in the yellow (#eab308) with a soft glow and the rest of the headline in white
- **Do:** Use the yellow for the header and primary buttons and nothing else
- **Do:** Keep the caption above the footer in small grey capitals with a yellow dot
- **Don't:** Don't set body copy in yellow; it is for the headline and the action
- **Don't:** Don't remove the glow on the yellow headline line; it is part of the look
- **Don't:** Don't fill large areas with yellow; the page stays black with yellow as a signal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
