# Design system — Real Estate Landing Page Template

`SN-W03355` · real-estate · light mode · Sinera Atlas theme `dwell` · language `vi`

## Direction

A photo-led hero where a large white bold sans-serif headline sits over an architectural photograph of a white villa with a pool, shaded on its left side for legibility. The primary buttons are solid yellow (#ffc647) with dark text, and the stat numerals in the lower right are large white figures with small uppercase captions. Navigation is small white text over the photograph.

**Mood:** photographic, bold, confident, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f3ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#02365c` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffc647` | Primary action and highlights |
| Second accent | `#ffc647` | Supporting highlights |

Palette by frequency of use: `#02365c` · `#ffffff` · `#ffc647` · `#d1d5db` · `#52525b` · `#a1a1aa` · `#e4e4e7` · `#dca052` · `#000000` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 112px · h2 48px · h3 20px · body 16px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_0_4px_rgba(255,198,71,0.3)]`, `shadow-sm`
- **Content width:** `max-w-[1170px]`, `max-w-4xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-12`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 w-full text-base font-medium text-[#02365C] bg-[#FFC647] rounded-full hover:bg-white transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Listings (`listings`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f3ef;
  --color-surface: #ffffff;
  --color-text: #02365c;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #ffc647;
  --color-accent-2: #ffc647;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f3ef',
    surface: '#ffffff',
    ink: '#02365c',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#ffc647',
    accent2: '#ffc647',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white bold sans-serif over a dark wash on the photograph
- **Do:** Use yellow (#ffc647) for the primary buttons and the header call to action
- **Do:** Set stat numerals large in white with small uppercase captions
- **Don't:** Don't place dark text over the hero photograph
- **Don't:** Don't use yellow for body text or large background fills
- **Don't:** Don't leave the hero photograph unshaded behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
