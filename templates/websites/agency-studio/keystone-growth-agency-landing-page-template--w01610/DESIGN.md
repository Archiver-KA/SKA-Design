# Design system — Keystone Growth Agency Landing Page Template

`SN-W01610` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A clean growth-agency page on off-white (#fafafa) with an all-caps bold sans headline in near-black, centred. The key phrase 'COLD EMAIL' switches to blue (#2563eb), which is the only accent and appears on the headline phrase and the primary button, so the page reads as functional and direct. Logo, nav and cards are white with pale grey (#e5e7eb) borders, and a large dark image sits below the copy.

**Mood:** functional, direct, clean, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563eb` · `#e5e7eb` · `#071733` · `#13742f` · `#0f172a` · `#176bff` · `#4aa92f` · `#7c3aed` · `#ea580c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 48px · h3 20px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-[0_1px_2px_rgba(0,0,0,0.02)]`, `shadow-blue-600/20`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg text-white shrink-0 hover:shadow-blue-600/20 bg-blue-600 hover:bg-blue-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Phosphor

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#0f172a',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold uppercase Inter, near-black, with one blue (#2563eb) keyword
- **Do:** Use the blue for the primary button and the keyword only
- **Do:** Keep cards white with a pale grey (#e5e7eb) border instead of shadows
- **Don't:** Don't use the orange (#ea580c) as more than a rare secondary highlight
- **Don't:** Don't set the headline in mixed case; it stays all-caps
- **Don't:** Don't put text on the dark image frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
