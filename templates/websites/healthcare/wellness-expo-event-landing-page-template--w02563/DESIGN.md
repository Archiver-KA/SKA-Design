# Design system — Wellness Expo Event Landing Page Template

`SN-W02563` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A clean, light, sans-serif event page built on a near-white ground with a large dark headline in Inter. Colour is used sparingly: the deep green (#064e3b) marks one phrase in the headline and the primary ticket button, while everything else stays neutral. Pill badges, a live countdown row and generous whitespace give it an orderly, editorial rhythm that suits a conference landing page.

**Mood:** clean, airy, orderly, restrained, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#ffffff` · `#78716c` · `#57534e` · `#a8a29e` · `#064e3b` · `#047857` · `#f5f5f4` · `#065f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`, `shadow-emerald-900/10`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2 text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Logo cloud (`logo-cloud`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #064e3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#064e3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the one emphasised headline phrase in the deep green (#064e3b) and reuse that colour only for the primary button
- **Do:** Keep headlines in Inter at a heavy weight with tight line spacing, as in the 72px hero
- **Do:** Use rounded-full pills for badges and the paired primary and secondary buttons
- **Don't:** Don't add a second accent colour; the page relies on green against neutrals alone
- **Don't:** Don't fill large areas with the green; it is reserved for emphasis and the main action
- **Don't:** Don't use dark panels or heavy shadows; the page stays on the light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
