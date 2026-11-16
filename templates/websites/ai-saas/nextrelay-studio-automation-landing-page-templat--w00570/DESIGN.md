# Design system — NextRelay Studio Automation Landing Page Template

`SN-W00570` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero on near-black (#050505) with a white two-line headline whose second line, 'digital workforce.', carries a pink-to-peach gradient. A pink-tinted glow sits above the headline, and a tag names the Relay.app partnership in pink. The primary action is a white pill, beside a dark outline button for the case studies, so pink is reserved for the headline and tag.

**Mood:** energetic, dark, warm, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f472b6` | Primary action and highlights |
| Second accent | `#0c2d64` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#ec4899` · `#f472b6` · `#d1d5db` · `#000000` · `#050505` · `#080808` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-black`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #080808;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f472b6;
  --color-accent-2: #0c2d64;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#080808',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f472b6',
    accent2: '#0c2d64',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a pink (#f472b6) gradient under the white first line
- **Do:** Use the white pill for the consultation action and a dark outline for the second
- **Do:** Keep the pink glow above the hero, not behind the body copy
- **Don't:** Don't use pink for body text or buttons; it belongs to the headline and tag
- **Don't:** Don't switch the hero to a light background; it stays dark
- **Don't:** Don't stack more gradients on the page beyond the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
