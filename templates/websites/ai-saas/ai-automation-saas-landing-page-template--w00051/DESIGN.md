# Design system — AI Automation SaaS Landing Page Template

`SN-W00051` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page carries a large white sans headline with a grey second line above an orange (#f97316) primary button. A soft orange glow sits behind the hero copy, and a dark instrument panel with sliders carries the product visual on the right. Orange is the one accent, used for the call to action and the status dots.

**Mood:** bold, product-led, dark, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#71717a` · `#18181b` · `#a1a1aa` · `#60a5fa` · `#3f3f46` · `#f97316` · `#0c0c0e` · `#121214`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.05)]`, `shadow-[0_0_8px_rgba(34,197,94,0.6)]`, `shadow-[0_0_30px_rgba(37,99,235,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="text-sm px-5 py-2 bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors rounded-full flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Integrations (`integrations`)
3. Process / steps (`how-it-works`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #27272a;
  --color-accent: #f97316;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#27272a',
    accent: '#f97316',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for the primary button and status dots only
- **Do:** Set headlines in heavy sans with the second line in grey
- **Do:** Keep the instrument panel to the right of the copy
- **Don't:** Don't switch to a light page treatment
- **Don't:** Don't use the blue (#60a5fa) highlight as a second accent in the hero
- **Don't:** Don't put body copy over the orange glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
