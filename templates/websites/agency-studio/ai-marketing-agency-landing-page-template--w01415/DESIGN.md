# Design system — AI Marketing Agency Landing Page Template

`SN-W01415` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, airy page on [#f9f9f9] with a large headline in near-black, where the key phrase 'Intelligent' takes a rose-to-orange gradient that is the page's only colour. The layout is a two-column hero with a white card and a stats panel on the right, set inside a rounded frame with a faint grid behind.

**Mood:** airy, editorial, light, rounded, warm-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f9f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#e11d48` · `#111827` · `#ffffff` · `#f43f5e` · `#9ca3af` · `#6b7280` · `#f3f4f6` · `#e5e7eb` · `#4b5563` · `#fecdd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 36px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-rose-500/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="group bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. About (`about`)
6. Services (`services`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f9f9;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #e11d48;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f9f9',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#e11d48',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase in the rose-to-orange gradient (#e11d48 to #f97316) and keep the rest near-black.
- **Do:** Keep the hero inside a rounded light frame with a faint grid behind the headline.
- **Do:** Set the stats panel as a white card with a small caption and a red trend mark.
- **Don't:** Don't use the gradient on more than one phrase per screen.
- **Don't:** Don't set the headline in Inter; it is a serif.
- **Don't:** Don't add a dark hero; the page is light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
