# Design system — AI Automation Agency

`SN-W01376` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black first screen with a three-line centred headline in heavy white sans, where the last phrase, With AI, fades to grey. A small badge with a phone line sits above, and the nav is a plain row of grey links with a white outlined button at the right. The design is restrained and typographic, and the grey fade is the only emphasis on the page.

**Mood:** restrained, typographic, dark, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#000000` · `#34d399` · `#3b82f6` · `#10b981` · `#050505` · `#d4d4d4` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_30px_rgba(255,255,255,0.4)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all group shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)
10. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, centred over three lines.
- **Do:** Fade the last phrase to grey as the single emphasis.
- **Do:** Keep the nav to plain grey links and one outlined button.
- **Don't:** Don't add colour to the headline; the grey fade is the only emphasis.
- **Don't:** Don't use a light background for this template's hero.
- **Don't:** Don't add decorative imagery to the first screen; the type is the design.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
