# Design system — Cafe & Restaurant Landing Page Template

`SN-W02857` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

Dark and restrained, with a contemporary feel. The hero fades from charcoal to near-black (#1c1917 to #000000), and a large tight-set white sans headline is the only text emphasis. White is the one colour on the first screen: the primary button is a white pill with a dark circular knob, and the navigation is a small dark pill with a white contact button.

**Mood:** dark, restrained, contemporary, tight

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#e7e5e4` · `#fafaf9` · `#000000` · `#292524` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Menu list (`menu-list`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white sans with tight tracking across two short lines
- **Do:** Make the primary button a white pill with a dark circular knob
- **Do:** Hold the hero to a charcoal-to-black gradient with white type only
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't place a light page background behind the dark hero
- **Don't:** Don't put the navigation on a light bar over the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
