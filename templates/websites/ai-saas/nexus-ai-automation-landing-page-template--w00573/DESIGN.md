# Design system — Nexus AI Automation Landing Page Template

`SN-W00573` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark, cinematic product page on a near-black ground (#020202) with one decorative move: a violet-to-blue gradient on the second line of the hero headline. Type is Inter at large size with tight leading. The primary call to action is a solid white pill beside a ghost secondary button. Flow diagrams in the hero use violet, green and orange node borders on the dark surface, so colour carries function.

**Mood:** dark, cinematic, technical, restrained, gradient-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#020202` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#818cf8` · `#6366f1` · `#525252` · `#d4d4d4` · `#22c55e` · `#020202` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-inner`, `shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="h-10 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. About (`about`)
7. Comparison (`comparison`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #020202;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
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
    background: '#020202',
    surface: '#020202',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black (#020202) and step cards one tone lighter.
- **Do:** Use the violet accent (#818cf8) only on the second line of the hero headline.
- **Do:** Keep the primary button a solid white pill (#ffffff) with a ghost button beside it.
- **Don't:** Don't use the indigo (#6366f1) as the page background; the ground is near-black.
- **Don't:** Don't add drop shadows; separation comes from hairline borders and surface steps.
- **Don't:** Don't add more accent hues to the node diagrams than the violet, green and orange shown.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
