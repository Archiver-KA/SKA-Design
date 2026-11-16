# Design system — Mental Health Services Landing Page Template

`SN-W02478` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black green page with a large, centred white sans headline and a lime (#d4ff45) pill as the only saturated colour. A thin green band sits at the foot of the hero, and the navigation is set in muted grey with a white active item. The palette is dark forest and lime, and the calm, open layout lets one large statement carry the page.

**Mood:** dark, calm, bold, centred, organic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1e16` | Page ground |
| Text | `#e8ece6` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4ff45` | Primary action and highlights |
| Second accent | `#15803d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4ff45` · `#0b1e16` · `#15803d` · `#e8ece6` · `#cbf72d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Inter, Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h3 24px · body 18px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(212,255,69,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-10`

**Primary button**

```html
<a class="bg-[#D4FF45] text-[#0B1E16] px-6 py-3 rounded-full text-base font-normal hover:bg-[#cbf72d] hover:shadow-[0_0_20px_rgba(212,255,69,0.3)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b1e16;
  --color-text: #e8ece6;
  --color-border: #ffffff;
  --color-accent: #d4ff45;
  --color-accent-2: #15803d;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1e16',
    ink: '#e8ece6',
    line: '#ffffff',
    accent: '#d4ff45',
    accent2: '#15803d',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use lime (#d4ff45) for the primary button only
- **Do:** Centre the headline in large Manrope with tight leading
- **Do:** Keep the supporting paragraph in muted grey beneath the headline
- **Don't:** Don't use lime for large fills or body text
- **Don't:** Don't treat the green band as a background; it is a divider
- **Don't:** Don't add rounded-square cards; keep the layout centred and open

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
