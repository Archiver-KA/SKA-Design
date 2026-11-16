# Design system — Law Firm Industries Landing Page Template

`SN-W03976` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet, minimal advisory page on white, with a regular-weight sans-serif headline in near-black, set large and left aligned. The header button is olive green, the only colour on the page, and small uppercase eyebrows label each section. Body text is grey and comfortably spaced, so the page reads as considered and plain.

**Mood:** minimal, plain, considered, light, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#657b3d` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#f5f5f5` · `#e5e5e5` · `#fafafa` · `#525252` · `#657b3d` · `#ffffff` · `#737373` · `#546632` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-16`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="text-sm font-medium bg-[#657B3d] text-white px-5 py-2.5 rounded-full hover:bg-[#546632] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Benefits (`benefits`)
5. Case studies (`case-studies`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #657b3d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#657b3d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large regular-weight sans-serif, left aligned
- **Do:** Use olive green (#657b3d) for the header button and key labels only
- **Do:** Label sections with small uppercase eyebrows above the headline
- **Don't:** Don't add decorative imagery to the white hero
- **Don't:** Don't set headlines in a bold weight
- **Don't:** Don't add colours beside the olive green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
