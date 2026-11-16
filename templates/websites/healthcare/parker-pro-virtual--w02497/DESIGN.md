# Design system — Parker Pro Virtual

`SN-W02497` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en-GB`

## Direction

A dark, centred hero on deep navy (#0f172a) with a soft glow behind the headline, where the second line is set in cool grey-blue. Emerald (#34d399) is the primary button and the single accent, with an outlined dark button beside it. Small uppercase eyebrow text and a tight centred column keep the page to one clear message.

**Mood:** dark, focused, calm, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#f1f5f9` · `#64748b` · `#94a3b8` · `#e2e8f0` · `#475569` · `#f8fafc` · `#cbd5e1` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-brand-green/20`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-6 py-3 bg-brand-navy hover:bg-brand-navyLight text-white font-medium rounded-lg transition-colors inline-block">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Team (`team`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. Feature grid (`features`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-border: #f1f5f9;
  --color-accent: #34d399;
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
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#f1f5f9',
    muted: '#94a3b8',
    line: '#f1f5f9',
    accent: '#34d399',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use emerald (#34d399) for the primary button only
- **Do:** Set headlines in Inter with the second line in cool grey-blue (#94a3b8)
- **Do:** Centre the hero column and keep it to one headline, one line of copy and two buttons
- **Don't:** Don't use emerald for body text
- **Don't:** Don't put a light background behind the hero
- **Don't:** Don't add a second accent colour to the glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
