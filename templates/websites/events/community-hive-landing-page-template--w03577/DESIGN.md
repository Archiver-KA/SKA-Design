# Design system — Community Hive Landing Page Template

`SN-W03577` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Hive uses one saturated yellow field (#facc15) as the whole page ground, with a soft gradient that lightens toward the top right. The large white wordmark HIVE. is set in a plain sans in the centre, with dark navigation and a near-black pill button. Colour does the work here; the layout stays simple, and content panels are pale yellow with dark body text.

**Mood:** sunny, flat, friendly, single-colour, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#facc15` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#facc15` · `#262626` · `#f97316` · `#fef08a` · `#171717` · `#eab308` · `#fef9c3` · `#ea580c` · `#fefce8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 48px · body 20px
- **Weights in use:** normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-yellow-400 text-neutral-900 hover:bg-yellow-500 transition-colors rounded-full px-8 py-4 text-lg font-normal whitespace-nowrap shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Integrations (`integrations`)
5. Team (`team`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #facc15;
  --color-surface: #ffffff;
  --color-text: #262626;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#facc15',
    surface: '#ffffff',
    ink: '#262626',
    muted: '#525252',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#facc15) as the page ground across the hero and sections
- **Do:** Set headlines in white on yellow and body copy in dark grey (#262626)
- **Do:** Use pill buttons in near-black for the main action
- **Don't:** Don't introduce a second bright hue beside the yellow
- **Don't:** Don't set small text in white on yellow
- **Don't:** Don't add ornament or illustration on top of the flat field

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
