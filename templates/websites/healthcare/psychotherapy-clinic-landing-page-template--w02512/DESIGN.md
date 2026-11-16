# Design system — Psychotherapy Clinic Landing Page Template

`SN-W02512` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A calm, trust-led hero on near-white (#fafaf9), with a large Playfair Display headline in near-black whose second phrase is set in italic muted sage grey. A dark pill button is the main action and an outlined pill sits beside it. Supporting copy in warm grey (#78716c) and generous space keep the page quiet and credible.

**Mood:** calm, trust-led, quiet, credible

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#e7e5e4` · `#78716c` · `#1c1917` · `#a8a29e` · `#292524` · `#f5f5f4` · `#44403c` · `#fafaf9` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-stone-200/40`, `shadow-brand-200/50`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-800 text-white text-sm font-medium rounded-full hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-200/50 transition-all transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --font-display: "Playfair Display", serif;
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
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display with one italic phrase in muted sage
- **Do:** Use the dark pill (#1c1917) as the primary action with an outlined pill beside it
- **Do:** Keep supporting copy in warm grey (#78716c) on the off-white ground
- **Don't:** Don't add a saturated colour to headings or buttons
- **Don't:** Don't set the headline in heavy weights; keep it at regular weight.
- **Don't:** Don't use hard-edged cards; keep corners rounded

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
