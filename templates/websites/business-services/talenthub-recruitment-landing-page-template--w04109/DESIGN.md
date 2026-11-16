# Design system — TalentHub Recruitment Landing Page Template

`SN-W04109` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, editorial recruitment page on near-black (#171717), with white display type set very large and tightly spaced. Headlines mix white and grey lines in heavy uppercase, and the type itself is the main visual, with no photography in the hero. Green (#34d399) marks status chips and small highlights.

**Mood:** bold, editorial, dark, oversized, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#404040` · `#171717` · `#a3a3a3` · `#262626` · `#34d399` · `#737373` · `#0a0a0a` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bricolage Grotesque
- **Body:** Bricolage Grotesque
- **Loaded families:** Bricolage Grotesque, Inter, Oswald, Space Grotesk
- **Scale (largest breakpoint):** h1 192px · h2 60px · h3 18px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-[90rem]`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="animate-on-scroll hidden uppercase hover:bg-neutral-800 transition-colors md:flex text-xs font-semibold tracking-widest bg-gradient-to-br from-white/10 to-white/0 rounded-full px-6 py-3">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #60a5fa;
  --font-display: "Bricolage Grotesque", sans-serif;
  --font-body: "Bricolage Grotesque", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Bricolage Grotesque'], sans: ['Bricolage Grotesque'] },
} }
```

## Do and don't

- **Do:** Set headlines very large, uppercase and tightly tracked
- **Do:** Use green (#34d399) only for status chips and small highlights
- **Do:** Alternate white and grey lines within one headline for contrast
- **Don't:** Don't set headlines at small sizes
- **Don't:** Don't add light backgrounds to the hero
- **Don't:** Don't fill the hero with photos or illustrations; the type carries the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
