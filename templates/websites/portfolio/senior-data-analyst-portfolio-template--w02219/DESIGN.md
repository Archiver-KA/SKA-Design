# Design system — Senior Data Analyst Portfolio Template

`SN-W02219` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A clean, light, data-forward page where a large tightly set grotesque headline in near-black (#18181b) is followed by a second line in light grey, so the hierarchy comes from tone rather than colour. Small chips for tools and a black button sit below the intro, and the stats are bold figures with small caps labels. The look is neutral and type-led, with no accent colour.

**Mood:** clean, neutral, data-led, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#a1a1aa` · `#f4f4f5` · `#18181b` · `#ffffff` · `#71717a` · `#52525b` · `#e4e4e7` · `#fafafa` · `#27272a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-medium bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a tight grotesque, with the second line in grey (#a1a1aa)
- **Do:** Use near-black (#18181b) for the primary button and the headline
- **Do:** Set stats as bold figures with small uppercase labels beneath
- **Don't:** Don't introduce an accent colour; the page is grey and black
- **Don't:** Don't add charts to the hero; the look is type-led
- **Don't:** Don't use a serif for the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
