# Design system — Travel Booking Landing Page Template

`SN-W03144` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic booking hero on near-black (#000000), with a soft teal glow at the top left and an amber glow on the right. The headline is heavy white sans, and its second word takes a grey-to-white gradient. The search panel is a dark translucent card with labelled fields, so the page reads as night-mode luxury.

**Mood:** cinematic, dark, sleek, luxurious, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#000000` · `#a1a1aa` · `#3f3f46` · `#d4d4d8` · `#f59e0b` · `#22d3ee` · `#e4e4e7` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Nunito
- **Loaded families:** Bricolage Grotesque, Nunito
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-white/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Product grid (`product-grid`)
5. Marquee (`marquee`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #f59e0b;
  --font-display: "Nunito", sans-serif;
  --font-body: "Nunito", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Nunito'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Set the page on near-black (#000000) with white headlines
- **Do:** Use teal (#22d3ee) for the glow and one accent cue; amber (#f59e0b) only in the background glow
- **Do:** Keep the search panel as a dark translucent card with labelled fields
- **Don't:** Don't use a white ground; the page is dark
- **Don't:** Don't use the amber glow as a button colour
- **Don't:** Don't put more than one gradient word in a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
