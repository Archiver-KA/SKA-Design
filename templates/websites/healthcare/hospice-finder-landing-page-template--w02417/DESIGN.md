# Design system — Hospice Finder Landing Page Template

`SN-W02417` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The hospice finder opens on a pale stone ground (#fafaf9) with a regular-weight charcoal headline, where the second word is set in sage green (#839b83). The right half is a muted map with sage pins and a white info card, and the search button is the same sage. Green is the only accent on the page, so the layout reads calm and unhurried, which suits a page about end-of-life care.

**Mood:** calm, muted, compassionate, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#839b83` | Secondary copy, captions |
| Border | `#fafaf9` | Hairlines, dividers, outlines |
| Accent | `#839b83` | Primary action and highlights |

Palette by frequency of use: `#839b83` · `#ffffff` · `#1c1917` · `#fafaf9` · `#e7e5e4` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#292524` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h3 14px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-stone-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-stone-800 transition-colors shadow-sm ring-1 ring-stone-900/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #839b83;
  --color-border: #fafaf9;
  --color-accent: #839b83;
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
    ink: '#292524',
    muted: '#839b83',
    line: '#fafaf9',
    accent: '#839b83',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline word in sage (#839b83) and keep the rest in charcoal
- **Do:** Use the sage button for the primary search action
- **Do:** Keep the map muted in grey and sage with white info cards
- **Don't:** Don't use bold headlines; the regular weight sets the tone
- **Don't:** Don't add saturated colours; sage is the only accent
- **Don't:** Don't fill the search field with colour; keep it white with a border

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
