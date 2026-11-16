# Design system — IP Investment Platform Landing Page Template

`SN-W00988` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A navy financial page with a gold accent: the hero sits on deep navy (#0b1c2d) with a centred serif headline, its second line set in gold (#c6a85b). Gold is the single accent, used for that phrase and the solid primary button, with a thin outline button beside it. The tone is institutional and regulated, and the serif display type supplies the trust cues.

**Mood:** institutional, regulated, navy and gold, formal, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1c2d` | Page ground |
| Surface | `#122336` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6a85b` | Primary action and highlights |
| Second accent | `#122336` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e3a5f` · `#c6a85b` · `#94a3b8` · `#0b1c2d` · `#122336` · `#0d1e30` · `#10b981` · `#34d399` · `#071320`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 30px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_8px_30px_rgb(0,0,0,0.12)]`, `shadow-[#C6A85B]/5`, `shadow-[0_0_30px_rgb(198,168,91,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="rounded-none border border-[#C6A85B]/50 bg-[#C6A85B]/10 px-5 py-2.5 text-sm font-medium text-[#C6A85B] transition-all duration-300 hover:bg-[#C6A85B] hover:text-[#0B1C2D]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Comparison (`comparison`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b1c2d;
  --color-surface: #122336;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c6a85b;
  --color-accent-2: #122336;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1c2d',
    surface: '#122336',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c6a85b',
    accent2: '#122336',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in gold (#c6a85b) and keep gold out of running text.
- **Do:** Use the solid gold button for the primary action and an outline button for the secondary.
- **Do:** Keep headlines in the serif display face, centred.
- **Don't:** Don't set body copy in gold.
- **Don't:** Don't add a second accent hue such as green to the hero.
- **Don't:** Don't put the hero copy on a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
