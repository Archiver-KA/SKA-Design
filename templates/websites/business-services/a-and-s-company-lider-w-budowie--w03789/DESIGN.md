# Design system — A&S Company - Lider w Budowie

`SN-W03789` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A construction landing page built on a dark photographic ground, with a very large white headline set in Inter Tight and a short grey paragraph beneath it. Red (#d92f24) is the single accent, used for the logo block and the primary button, while the secondary action is an outlined text link. The layout is wide and sparse, with thin technical labels along the top bar.

**Mood:** bold, industrial, premium, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d92f24` | Primary action and highlights |
| Second accent | `#e8d45a` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#d92f24` · `#111111` · `#e8d45a` · `#4ade80` · `#16a34a` · `#f7f6f3` · `#050505` · `#b5261d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight, IBM Plex Mono
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 36px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-[1440px]`, `max-w-3xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-[#D92F24] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#b5261d] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #000000;
  --color-accent: #d92f24;
  --color-accent-2: #e8d45a;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#000000',
    accent: '#d92f24',
    accent2: '#e8d45a',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter Tight at a very large size, in white (#ffffff) over the dark photograph.
- **Do:** Use red (#d92f24) for the primary button and the logo block only.
- **Do:** Keep secondary actions as text links with a short line beside them.
- **Don't:** Don't add a second strong colour beside the red.
- **Don't:** Don't place the headline on a light photograph.
- **Don't:** Don't round the corners of the buttons or the logo block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
