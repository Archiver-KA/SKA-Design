# Design system — AI Automation Consulting Landing Page Template

`SN-W01396` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a cyan accent (#00b4d8) on the primary button and eyebrow, and a serif italic in the headline that contrasts with the heavy sans lines around it. On the right, a dark panel with a glowing diagram and status cards floats over a cyan glow. The serif-sans mix and the mechanical diagram give it a technical but refined tone.

**Mood:** technical, refined, dark, editorial, cyan-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050a18` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#050a18` | Hairlines, dividers, outlines |
| Accent | `#00b4d8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e2d4a` · `#94a3b8` · `#00b4d8` · `#050a18` · `#0f1a2e` · `#000000` · `#38bdf8` · `#f1f5f9` · `#1a2333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,180,216,0.3)]`, `shadow-2xl`, `shadow-[0_0_15px_rgba(0,180,216,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#050A18] text-base font-medium hover:bg-[#F1F5F9] transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Stats band (`stats`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050a18;
  --color-text: #ffffff;
  --color-border: #050a18;
  --color-accent: #00b4d8;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050a18',
    ink: '#ffffff',
    line: '#050a18',
    accent: '#00b4d8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button and the eyebrow in cyan (#00b4d8) and no other accent.
- **Do:** Mix a sans for the headline lines with a serif italic for one phrase.
- **Do:** Keep the diagram panel dark, with a single cyan glow behind it.
- **Don't:** Don't use a light page ground.
- **Don't:** Don't set the whole headline in serif; only the italic phrase.
- **Don't:** Don't use the dark navy (#1e2d4a) as an accent; it is a surface tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
