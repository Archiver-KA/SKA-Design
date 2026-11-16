# Design system — Personal Portfolio Landing Page Template

`SN-W02153` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bold German-language developer portfolio on near-black, with large uppercase white display type in which the middle word fades to grey. Orange (#f97316) is the one accent: it marks the primary button and a tilted orange phone mockup beside the hero, with a column of arrow-marked service links on the right. Solid orange against black gives the page its energy.

**Mood:** bold, energetic, dark, direct, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#171717` · `#e5e5e5` · `#a3a3a3` · `#737373` · `#f5f5f5` · `#ea580c` · `#d4d4d4` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg tracking-wide transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(247,78,9,0.3)] hover:shadow-[0_0_30px_rgba(247,78,9,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
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
    background: '#171717',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in uppercase white, with the middle word in grey.
- **Do:** Use orange (#f97316) for the primary button and the mockup, one per section.
- **Do:** List services as rows with an arrow marker on the right.
- **Don't:** Don't use orange for body text or many links at once.
- **Don't:** Don't set the headline in a light weight.
- **Don't:** Don't put a light panel behind the phone mockup.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
