# Design system — Fitness Club Landing Page Template

`SN-W02592` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, cinematic club page on deep blue-black with a very large white headline and a teal (#1797a6) second line set in an italic serif. The teal is the one accent, used for the primary button and the lead phrase, and a small uppercase line under the headline gives a technical tone. The look is moody and premium, with a faint glow behind the hero.

**Mood:** cinematic, moody, dark, premium, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111115` | Page ground |
| Surface | `#070709` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e7eb` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1797a6` | Primary action and highlights |
| Second accent | `#d97706` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1797a6` · `#070709` · `#0a0a0d` · `#111115` · `#16161c` · `#d97706` · `#10b981` · `#000000` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_40px_rgba(23,151,166,0.1)]`, `shadow-[0_0_20px_rgba(23,151,166,0.3)]`, `shadow-[0_0_40px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="btn-pulse relative group overflow-hidden bg-[#1797A6] text-[#070709] px-8 py-4 font-sans font-medium text-lg tracking-tight rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111115;
  --color-surface: #070709;
  --color-text: #ffffff;
  --color-muted: #e5e7eb;
  --color-border: #ffffff;
  --color-accent: #1797a6;
  --color-accent-2: #d97706;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111115',
    surface: '#070709',
    ink: '#ffffff',
    muted: '#e5e7eb',
    line: '#ffffff',
    accent: '#1797a6',
    accent2: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the lead headline phrase in the teal (#1797a6) italic serif and the rest in white
- **Do:** Use the teal for the primary button and the lead phrase only
- **Do:** Keep a small uppercase tracking line under the headline
- **Don't:** Don't brighten the background beyond the deep blue-black; the glow is the only lift
- **Don't:** Don't use orange as a fill; teal is the only accent
- **Don't:** Don't set body copy in teal; it is for emphasis

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
