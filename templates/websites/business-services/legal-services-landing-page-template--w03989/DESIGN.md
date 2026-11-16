# Design system — Legal Services Landing Page Template

`SN-W03989` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, blog-style page with a large white sans-serif headline over a faded, darkened photograph of a justice figure. Post cards sit in a three-column grid with photographs, small uppercase grey labels and bold white titles. There is almost no hue on the page, so tone, photography and type carry it, giving the content a sober, investigative mood.

**Mood:** moody, sober, investigative, monochrome, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#a3a3a3` · `#262626` · `#171717` · `#ffffff` · `#737373` · `#d4d4d4` · `#0a0a0a` · `#e5e5e5` · `#000000` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 20px · body 14px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-8`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Articles (`blog-articles`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0a0a0a) with white headlines
- **Do:** Set post titles in bold sans-serif, with small uppercase grey labels above them
- **Do:** Fade dark photography under the headline so the type stays clear
- **Don't:** Don't add bright accent colours; the design runs on greys
- **Don't:** Don't put bright hues over the photography
- **Don't:** Don't use glow shapes behind the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
