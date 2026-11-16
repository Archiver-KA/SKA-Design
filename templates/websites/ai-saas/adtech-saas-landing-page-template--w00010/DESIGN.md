# Design system — AdTech SaaS Landing Page Template

`SN-W00010` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page holds a centred, very large sans headline, 'Maximize Yield. Unify Demand.', in white with the second phrase fading into grey. Cyan (#00f5ff) is the single accent, used on the primary button and a floating Book a Call pill, so colour marks action rather than decoration. A faint teal glow sits behind the headline and the layout stays symmetric.

**Mood:** bold, dark, precise, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#33f8ff` | Primary action and highlights |

Palette by frequency of use: `#00f5ff` · `#ffffff` · `#a3a3a3` · `#050505` · `#737373` · `#404040` · `#d4d4d4` · `#525252` · `#000000` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(0,245,255,0.4)]`, `shadow-[0_0_15px_rgba(0,245,255,0.5)]`, `shadow-[0_0_15px_#00F5FF]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-8 py-4 rounded-full bg-[#00F5FF] text-[#050505] font-semibold text-sm hover:bg-[#33F8FF] transition-colors shadow-[0_0_20px_-5px_rgba(0,245,255,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Footer (`footer`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #33f8ff;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#33f8ff',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use cyan (#00f5ff) for primary actions and the floating booking pill only
- **Do:** Centre the headline and fade its second phrase into grey
- **Do:** Keep the nav to a single dark button on the right
- **Don't:** Don't use cyan for headings or body text
- **Don't:** Don't add light sections between dark ones
- **Don't:** Don't use more than one glowing element per viewport

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
