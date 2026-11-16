# Design system — Restaurant & Cabaret La Marmite d'Ongola

`SN-W02967` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A light editorial hero on a white ground with a large bold Inter headline where the second line is set in orange (#f97316) over a photograph of the dining room. Orange is the one accent: it marks the primary button and the highlighted words, while secondary buttons are dark outlined pills. Sections below sit on white and warm cream, so the page reads as clean and direct.

**Mood:** clean, direct, bold, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffedd5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#f97316` · `#ea580c` · `#71717a` · `#f4f4f5` · `#a1a1aa` · `#fafafa` · `#e4e4e7` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="h-12 px-8 bg-orange-600 hover:bg-orange-500 text-white rounded-full flex items-center justify-center gap-2 font-medium transition-all shadow-xl shadow-orange-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Booking form (`booking`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffedd5;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffedd5',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set only the second headline line in orange (#f97316) in each hero.
- **Do:** Use the orange primary button for the main booking action only.
- **Do:** Keep headlines in bold Inter at the large display size.
- **Don't:** Don't use orange for body text or small icons.
- **Don't:** Don't add gradients behind the hero text.
- **Don't:** Don't swap the dark navigation pill for an orange one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
