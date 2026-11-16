# Design system — Impact Venture Studio Landing Page Template

`SN-W00455` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark photographic hero with a large white sans headline, and the closing word set in a muted teal-to-sage gradient that sets the tone for the page. The copy is calm and mission-led, with two white pill buttons, one filled and one outlined, as the only controls. Inter and DM Sans give the type a clean, institutional voice.

**Mood:** mission-led, calm, photographic, institutional, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d9a441` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f3f4f6` · `#d9a441` · `#f9fafb` · `#9ca3af` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** Inter
- **Loaded families:** DM Sans, Inter, Spectral, Noto Sans TC, Geist, Roboto
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-40`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Feature grid (`features`)
8. Team (`team`)
9. Articles (`blog-articles`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-border: #ffffff;
  --color-accent: #d9a441;
  --font-display: "DM Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#000000',
    line: '#ffffff',
    accent: '#d9a441',
  },
  fontFamily: { display: ['DM Sans'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing word of the headline in the gradient treatment
- **Do:** Use one filled and one outlined white pill button in the hero
- **Do:** Keep copy short and let the photograph sit under the text
- **Don't:** Don't put light grey panels directly on the dark hero
- **Don't:** Don't add a second gradient to the headline
- **Don't:** Don't use decorative icons next to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
