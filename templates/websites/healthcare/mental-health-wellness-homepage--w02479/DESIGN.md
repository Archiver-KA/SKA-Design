# Design system — Mental Health Wellness Homepage

`SN-W02479` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A black hero with a pale, blurred headline fading in at the left and a centred cyan pill as the only colour. Small monospaced captions sit under the button in muted grey, and the navigation is small uppercase cyan. The page is a dark, minimal product hero.

**Mood:** dark, minimal, quiet, technical, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#67e8f9` | Primary action and highlights |

Palette by frequency of use: `#67e8f9` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Mono, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 14px
- **Weights in use:** semibold, bold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-20`
- **Common gaps:** `gap-7`

**Primary button**

```html
<a class="inline-block bg-turquoise-600 hover:bg-turquoise-700 text-sage-50 font-medium py-3 px-10 rounded-full shadow-lg transition mb-6 text-lg tracking-wide section-animate">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #111111;
  --color-accent: #67e8f9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#111111',
    accent: '#67e8f9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#67e8f9) for the primary button and the navigation links only
- **Do:** Set captions in a small monospaced face in muted grey
- **Do:** Keep the hero on black, with the headline and button as the only focal points
- **Don't:** Don't switch the hero to a light background; the design is dark
- **Don't:** Don't use cyan for body text
- **Don't:** Don't add bright colours beyond the cyan

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
