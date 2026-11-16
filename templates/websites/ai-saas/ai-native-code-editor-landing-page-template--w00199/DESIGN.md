# Design system — AI-Native Code Editor Landing Page Template

`SN-W00199` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark developer-tool page on deep navy-black (#030712) with a bold white headline. The words with AI on the second line are set in blue (#3b82f6), which is the one colour in the headline. A floating dark nav pill sits above the page, and two buttons sit under the copy: a dark outlined pill and a light-bordered secondary, with avatars and a short trust line beneath.

**Mood:** dark, precise, developer, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#1f2937` · `#ffffff` · `#9ca3af` · `#374151` · `#111827` · `#d1d5db` · `#3b82f6` · `#34d399` · `#030712` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 30px · body 14px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-base text-white bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 font-space-grotesk">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #3b82f6;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#3b82f6',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the blue (#3b82f6) only on the highlighted words in the headline
- **Do:** Use a dark outlined pill for the primary action with a clear border
- **Do:** Keep the nav as a floating dark pill with a thin border
- **Don't:** Don't set body copy in blue; it stays grey
- **Don't:** Don't use a light background; the page is near-black
- **Don't:** Don't remove the trust line of avatars under the buttons; it is part of the hero pattern

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
