# Design system — Zyloch Cybersecurity Landing Page Template

`SN-W00844` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black security hero with small, spaced uppercase navigation and a faint cyan glow on the right. The headline is large Inter at 128px, set with pill buttons and an orange (#f97316) second accent.

**Mood:** dark, austere, security-focused, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00e5ff` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#00e5ff` · `#ffffff` · `#71717a` · `#000000` · `#52525b` · `#a1a1aa` · `#050505` · `#27272a` · `#3f3f46` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_50px_20px_rgba(0,229,255,0.2)]`, `shadow-[0_0_10px_#00E5FF]`, `shadow-[0_0_20px_rgba(0,229,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#00E5FF] text-black px-6 py-3 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2 rounded-sm group cursor-pointer inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Dashboard preview (`dashboard-preview`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #00e5ff;
  --color-accent-2: #f97316;
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
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#00e5ff',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on a near-black ground (#050505) with a single cyan glow as the accent
- **Do:** Set navigation in small, letter-spaced uppercase
- **Do:** Use the cyan (#00e5ff) for links and one call to action per screen
- **Don't:** Don't switch the hero to a light background
- **Don't:** Don't add more than one glow source to the hero
- **Don't:** Don't use the orange (#f97316) in the hero; keep it for secondary highlights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
