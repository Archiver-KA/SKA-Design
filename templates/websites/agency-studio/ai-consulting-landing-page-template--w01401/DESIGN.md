# Design system — AI Consulting Landing Page Template

`SN-W01401` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, warm-white page on [#f7f7f7] with a heavy sans headline in near-black that breaks across lines without a second colour. The single accent is red (#ff3131), used for the primary button and the eyebrow dot, with a soft red shadow lifting that button off the page. Secondary actions are white outlined pills, and the hero has no imagery, so the page reads as confident and direct.

**Mood:** confident, direct, light, bold, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f7f7` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#ff3131` | Primary action and highlights |

Palette by frequency of use: `#ff3131` · `#1a1a1a` · `#f5f5f5` · `#ffffff` · `#fafafa` · `#a3a3a3` · `#737373` · `#525252` · `#e5e5e5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex bg-[#FF3131] hover:bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 shadow-md shadow-red-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f7f7f7;
  --color-surface: #fafafa;
  --color-text: #1a1a1a;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #ff3131;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f7f7',
    surface: '#fafafa',
    ink: '#1a1a1a',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#ff3131',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use red (#ff3131) for the primary button and the eyebrow dot only.
- **Do:** Give the primary button a soft red shadow, and keep the secondary as a white pill with a thin border.
- **Do:** Set headlines in the heavy sans at display size, in near-black on the light ground.
- **Don't:** Don't use red for body text or large fills; it is an action colour.
- **Don't:** Don't add imagery to the hero; the first screen is type and buttons.
- **Don't:** Don't set the page ground to pure white; it is the soft grey (#f7f7f7).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
