# Design system — Financial Advisor Landing Page Template

`SN-W00929` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A dark advisory hero on near-black [#030405], with the headline in white and its final phrase in mint green [#34d399]. The headline runs large and tight, and a light grey sentence-case subheadline sits below it. A white filled button and an outlined button sit side by side, and a small green scroll cue sits at the foot. The page uses one green, reserved for emphasis.

**Mood:** direct, dark, trustworthy, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030405` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#030405` · `#1f2937` · `#34d399` · `#0c0f13` · `#4b5563` · `#111827` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 104px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, normal, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_15px_rgba(52,211,153,0.1)]`, `shadow-[0_0_25px_rgba(52,211,153,0.3)]`, `shadow-[0_0_8px_#34d399]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="mt-4 bg-white text-brand-base px-8 py-4 text-sm uppercase tracking-widest font-normal hover:bg-brand-neon transition-colors self-start inline-flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030405;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030405',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline phrase in mint green (#34d399)
- **Do:** Pair a white filled button with an outlined secondary button
- **Do:** Keep the green for emphasis words and small status marks
- **Don't:** Don't set the whole headline in green
- **Don't:** Don't add a second accent colour; the page uses one green
- **Don't:** Don't use a light background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
