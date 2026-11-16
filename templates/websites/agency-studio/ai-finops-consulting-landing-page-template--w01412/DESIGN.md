# Design system — AI FinOps Consulting Landing Page Template

`SN-W01412` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a gold-yellow (#facf39) primary button and a small yellow eyebrow mark, set against a two-tone headline where the first lines are grey and the final clause is white. The layout is centred and stacked under a thin dark navigation pill. Yellow is the only colour and it signals action, so the page reads as sober, financial and direct.

**Mood:** sober, financial, direct, dark, stacked

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facf39` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#facf39` · `#a3a3a3` · `#0a0a0a` · `#111111` · `#d4d4d4` · `#525252` · `#050505` · `#000000` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Manrope, Geist
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_10px_#facf39]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#facf39] hover:bg-[#ffe066] text-black rounded-full font-semibold text-sm tracking-tight transition-all shadow-[0_0_20px_-5px_rgba(250,207,57,0.4)] group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Services (`services`)
7. Team (`team`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #facf39;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#525252',
    line: '#ffffff',
    accent: '#facf39',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#facf39) for the primary button and the eyebrow mark only, with dark text on the button.
- **Do:** Set the headline in grey for the opening lines and white for the closing clause.
- **Do:** Keep the ground near-black (#0a0a0a) and the navigation as a thin dark pill.
- **Don't:** Don't put yellow on body text; it is an action colour.
- **Don't:** Don't set the primary button in white; the yellow is the signal.
- **Don't:** Don't apply the light mode tokens to this dark page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
