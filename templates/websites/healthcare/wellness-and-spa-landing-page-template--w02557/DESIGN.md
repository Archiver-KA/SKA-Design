# Design system — Wellness & Spa Landing Page Template

`SN-W02557` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A photographic wellness hero: a soft, light-toned portrait of a woman with closed eyes fills the frame under a light overlay, with a translucent dark pill navigation above it. The one saturated note is a warm orange contact button, and small uppercase labels sit along the edges. The stance is calm and editorial, and the photograph does the emotional work.

**Mood:** calm, editorial, photographic, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c2419` | Page ground |
| Surface | `#33402d` | Cards, panels, raised areas |
| Text | `#f1eee7` | Headings and primary copy |
| Border | `#1c2419` | Hairlines, dividers, outlines |
| Accent | `#cfe76a` | Primary action and highlights |

Palette by frequency of use: `#1c2419` · `#f1eee7` · `#cfe76a` · `#ffffff` · `#dff58a` · `#33402d` · `#222b1e` · `#161c13`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-5`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="text-xs px-4 py-2 rounded-full bg-[#CFE76A] text-[#1C2419] font-medium hover:bg-[#dff58a] transition-colors duration-300">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c2419;
  --color-surface: #33402d;
  --color-text: #f1eee7;
  --color-border: #1c2419;
  --color-accent: #cfe76a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c2419',
    surface: '#33402d',
    ink: '#f1eee7',
    line: '#1c2419',
    accent: '#cfe76a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Lead the hero with a full-bleed, soft-focus portrait under a light overlay
- **Do:** Keep the navigation a dark translucent pill with light labels
- **Do:** Use the warm orange only for the contact call to action
- **Don't:** Don't add more than one saturated colour to the hero
- **Don't:** Don't place body copy over the faces in the photograph
- **Don't:** Don't use dark green as the look of this hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
