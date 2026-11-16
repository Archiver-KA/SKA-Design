# Design system — Enterprise Digital Agency Landing Page Template

`SN-W01567` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A charcoal ground (#141618) with a large bold white headline stacked over four lines and a single yellow (#f9d022) pill as the call to action. Thin yellow curved lines sweep across the lower right of the hero as the only graphic, so the visual is abstract and drawn in the accent colour. The yellow is strictly a signal, and the page otherwise stays dark and sober.

**Mood:** sober, bold, dark, enterprise, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141618` | Page ground |
| Surface | `#17191c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f9d022` | Primary action and highlights |
| Second accent | `#d31245` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f9d022` · `#848e9c` · `#141618` · `#17191c` · `#000000` · `#fef08a` · `#1c1e21` · `#333333` · `#1f6520`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[2px]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Content width:** `max-w-[1240px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="bg-[#f9d022] text-[#141618] px-7 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Services (`services`)
5. Feature grid (`features`)
6. Logo cloud (`logo-cloud`)
7. Stats band (`stats`)
8. Call to action (`cta`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #141618;
  --color-surface: #17191c;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f9d022;
  --color-accent-2: #d31245;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141618',
    surface: '#17191c',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f9d022',
    accent2: '#d31245',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#f9d022) for the primary button and the thin line graphic only
- **Do:** Set the headline in a heavy sans, stacked tight over several lines
- **Do:** Draw any hero graphic as thin curved lines in the accent colour
- **Don't:** Don't use yellow as a page background; it is an accent
- **Don't:** Don't add photographs to the hero; the abstract lines are the visual
- **Don't:** Don't set body copy in pure white; it sits in muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
