# Design system — B2B Agency Landing Page Template

`SN-W01445` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A near-black ground ([#080808]) with raised panels in [#0e0e0e] and a red-orange ([#ff2200]) button as the single accent. The headline is large Zalando Sans Expanded in white, with the second phrase in grey, set left in a wide block. A dark chart card with a red figure anchors the right column.

**Mood:** bold, dark, wide, industrial, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#0e0e0e` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#ff2200` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ff2200` · `#a1a1aa` · `#2a2a2a` · `#080808` · `#0e0e0e` · `#1c1c1c` · `#000000` · `#cc1b00` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Zalando Sans Expanded
- **Body:** Zalando Sans Expanded
- **Loaded families:** Zalando Sans Expanded, Zalando Sans
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(255,34,0,0.15)]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex bg-accent hover:bg-accentDark text-white px-6 py-2 text-sm tracking-wide font-medium transition-colors duration-300 items-center gap-2 group">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Framer Motion, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #0e0e0e;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #2a2a2a;
  --color-accent: #ff2200;
  --font-display: "Zalando Sans Expanded", sans-serif;
  --font-body: "Zalando Sans Expanded", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#0e0e0e',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#2a2a2a',
    accent: '#ff2200',
  },
  fontFamily: { display: ['Zalando Sans Expanded'], sans: ['Zalando Sans Expanded'] },
} }
```

## Do and don't

- **Do:** Use red (#ff2200) for the primary button and one figure per section
- **Do:** Set headlines in Zalando Sans Expanded in white with a grey second phrase
- **Do:** Keep panels at #0e0e0e with hairline borders (#2a2a2a)
- **Don't:** Don't use red for body text or links in running copy
- **Don't:** Don't use rounded pills for primary buttons
- **Don't:** Don't place the imagery on a light panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
