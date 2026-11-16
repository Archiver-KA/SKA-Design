# Design system — BuildAI SaaS Landing Page Template

`SN-W00257` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, technical SaaS hero: a near-black ground with a bright teal (#2dd4bf) reserved for the headline line '10x Faster' and the primary button. The product appears as a dark chat-style window with small white labels, and the rest of the type is pale grey. A row of plain stat figures sits beneath the hero, so the page reads as a developer tool rather than a decorated landing page.

**Mood:** dark, developer, precise, teal-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2dd4bf` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2dd4bf` · `#cbd5e1` · `#34d399` · `#94a3b8` · `#000000` · `#e2e8f0` · `#5eead4` · `#c084fc` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 20px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #000000;
  --color-text: #f1f5f9;
  --color-border: #ffffff;
  --color-accent: #2dd4bf;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#000000',
    ink: '#f1f5f9',
    line: '#ffffff',
    accent: '#2dd4bf',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the teal (#2dd4bf) only for the highlighted headline line and the primary button
- **Do:** Set headlines in bold Inter in white, with the highlight line in teal
- **Do:** Show the product as a dark chat window with small label text
- **Don't:** Don't add teal to body copy or icons; keep it to the headline and CTA
- **Don't:** Don't use large coloured gradient fills behind the hero
- **Don't:** Don't swap the dark ground for a light one; the chat window relies on contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
