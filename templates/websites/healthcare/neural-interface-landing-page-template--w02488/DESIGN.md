# Design system — Neural Interface Landing Page Template

`SN-W02488` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A cool, neutral product page on near-white (#fafafa) with black type and rounded white cards that float over the hero. Electric blue (#2563eb) marks the primary button and the data rings, and a faint violet glow sits in the top corner. Bold uppercase Inter headlines and dashboard-style panels make it read as software rather than a clinic.

**Mood:** technical, cool, precise, software-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#404040` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#e5e5e5` · `#404040` · `#d4d4d4` · `#2563eb` · `#525252` · `#fafafa` · `#d8b4fe` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 72px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden rounded-xl border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 md:block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #404040;
  --color-border: #e5e5e5;
  --color-accent: #2563eb;
  --color-accent-2: #9333ea;
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
    ink: '#171717',
    muted: '#404040',
    line: '#e5e5e5',
    accent: '#2563eb',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#2563eb) for the primary button and data highlights only
- **Do:** Set hero headlines in bold uppercase Inter
- **Do:** Build product previews as white rounded panels with thin borders
- **Don't:** Don't use the violet (#9333ea) glow for buttons or text
- **Don't:** Don't add colour to the data panels; keep them neutral
- **Don't:** Don't set body text lighter than #404040 on the light ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
