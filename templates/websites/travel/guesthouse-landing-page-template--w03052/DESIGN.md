# Design system — Guesthouse Landing Page Template

`SN-W03052` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A plain, warm guest house page on an off-white ground (#fafaf9) with a dark olive-green headline and one orange (#ea580c) call to action in the navigation. The hero is a two-column layout: headline and a short checklist on the left, a framed room photo with a soft shadow on the right. The page is calm and practical, and it relies on clear service facts rather than decoration.

**Mood:** warm, practical, homely, uncluttered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#57534e` · `#ffffff` · `#1c1917` · `#fafaf9` · `#e7e5e4` · `#78716c` · `#f5f5f4` · `#44403c` · `#ea580c` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-mata-orange hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Feature grid (`features`)
5. Map / location (`map-location`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#ea580c) for the navigation booking button only
- **Do:** Put three short service facts as a checklist under the headline
- **Do:** Frame the room photo beside the hero text rather than full width
- **Don't:** Don't use orange for secondary buttons
- **Don't:** Don't add decorative gradients to the hero
- **Don't:** Don't set body copy in light grey that loses contrast on the off-white ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
