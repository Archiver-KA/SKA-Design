# Design system — High-Voltage EPC Services Landing Page Template

`SN-W03930` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page with a faint blue glow on the right, giving a dark, technical base to an engineering brand. The headline is a heavy white sans, and a widely tracked uppercase line lists the service areas beneath it. A solid blue button leads the actions, with a thin-outlined white button beside it, and certification marks sit small at the bottom. The tone is serious and precise.

**Mood:** serious, precise, technical, dark, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0071ce` · `#2563eb` · `#000000` · `#94a3b8` · `#374151` · `#3b82f6` · `#60a5fa` · `#d1d5db` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-blue-600/30`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hover:bg-blue-700 transition-colors flex gap-2 text-base font-medium text-white bg-blue-600 w-full py-4 items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Case studies (`case-studies`)
4. Bento grid (`bento-grid`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f1f5f9;
  --color-text: #ffffff;
  --color-border: #334155;
  --color-accent: #2563eb;
  --color-accent-2: #fb923c;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f1f5f9',
    ink: '#ffffff',
    line: '#334155',
    accent: '#2563eb',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with a widely tracked uppercase line of service areas beneath it.
- **Do:** Use the solid blue (#2563eb) for the main project action and a white outlined button for the tender.
- **Do:** Keep the blue glow in the background as the only colour on the hero.
- **Don't:** Don't use orange in the hero; it does not appear there.
- **Don't:** Don't set the service-area line in mixed case; keep it uppercase.
- **Don't:** Don't place light panels over the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
