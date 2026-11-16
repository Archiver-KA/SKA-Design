# Design system — AI Lead Generation Landing Page Template

`SN-W00115` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Leadz is a black, high-contrast agency page with a bold white sans headline over an italic serif line, set in a light grey. The orange (#ff6600) primary button is the only colour above the fold, and the secondary button is a dark grey pill. The serif italic gives the otherwise hard black page a slightly editorial voice.

**Mood:** black, high-contrast, editorial, direct, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6600` | Primary action and highlights |
| Second accent | `#ff9e44` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#9ca3af` · `#6b7280` · `#080808` · `#1f2937` · `#374151` · `#ff6600` · `#ff9e44` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 48px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,102,0,0.1)]`, `shadow-xl`, `shadow-[0_0_15px_rgba(255,102,0,0.3)]`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-gradient-to-r from-[#FF6600] to-[#FF9E44] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all shadow-[0_0_15px_rgba(255,102,0,0.3)] hover:shadow-[0_0_25px_rgba(255,102,0,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll, Alpine.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #ff6600;
  --color-accent-2: #ff9e44;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#ff6600',
    accent2: '#ff9e44',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero in white bold sans with the second line in an italic serif
- **Do:** Use the orange (#ff6600) for the primary button and the nav CTA only
- **Do:** Keep the secondary button as a dark grey pill with light text
- **Don't:** Don't use green (#22c55e) as an accent; orange is the accent
- **Don't:** Don't set the italic serif in bold; it is light
- **Don't:** Don't add extra accent colours beside the orange

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
