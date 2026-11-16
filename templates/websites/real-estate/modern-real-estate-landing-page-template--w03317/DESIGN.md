# Design system — Modern Real Estate Landing Page Template

`SN-W03317` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black page built on large, heavy uppercase sans type, with the headline spanning two full lines in white. A single orange (#ff4d1c) full stop ends the headline, and an orange pill labelled Contact Us sits centred in the top bar beside a menu toggle. A large orange circle floats in the lower right, so the orange is used as a shape as well as a colour.

**Mood:** bold, dark, urgent, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#141414` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff4d1c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ff4d1c` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#000000` · `#0f0f0f` · `#141414` · `#f5f5f5` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 12px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="bg-[#ff4d1c] hover:bg-[#ff3300] text-white text-xs font-semibold px-6 py-3 rounded-full uppercase tracking-wider transition-transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Process / steps (`how-it-works`)
5. Case studies (`case-studies`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #141414;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ff4d1c;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#141414',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ff4d1c',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans in white, tightly leaded.
- **Do:** Use the orange (#ff4d1c) for the full stop, the top contact pill and the floating circle.
- **Do:** Keep the top bar to a menu toggle, a centred wordmark and one orange pill.
- **Don't:** Don't set body text in orange; body copy is small and light.
- **Don't:** Don't add a second accent colour to the first screen.
- **Don't:** Don't use a light weight for the headline; the heavy cut is the identity.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
