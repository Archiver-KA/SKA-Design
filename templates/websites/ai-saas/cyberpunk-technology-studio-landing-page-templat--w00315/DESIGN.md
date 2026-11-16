# Design system — Cyberpunk Technology Studio Landing Page Template

`SN-W00315` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, high-contrast agency hero on near-black, with a hard red [#dc2626] accent. The headline is heavy uppercase sans, with the first line solid white, the middle line in white-to-grey, and the last two lines outlined. The slanted red button and the thin red rule at the top left give the page a sharp, angular character.

**Mood:** sharp, angular, high-contrast, aggressive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#4b5563` · `#d1d5db` · `#374151` · `#dc2626` · `#050505` · `#333333` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Orbitron
- **Body:** Rajdhani
- **Loaded families:** Orbitron, Rajdhani
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, semibold, black
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-cyber-red/20`, `shadow-white/10`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-cyber-red hover:bg-red-700 text-white font-orbitron font-bold px-8 py-3 transition-colors uppercase tracking-wider text-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Articles (`blog-articles`)
8. Newsletter signup (`newsletter`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --font-display: "Orbitron", sans-serif;
  --font-body: "Rajdhani", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Orbitron'], sans: ['Rajdhani'] },
} }
```

## Do and don't

- **Do:** Use the red (#dc2626) for the primary button and the thin rules only
- **Do:** Set the headline as stacked uppercase lines, mixing solid, gradient and outlined type
- **Do:** Angle the buttons and section edges with a skewed cut
- **Don't:** Don't fill the outlined headline lines; they must stay as strokes
- **Don't:** Don't set body copy in red
- **Don't:** Don't set this page on a white ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
