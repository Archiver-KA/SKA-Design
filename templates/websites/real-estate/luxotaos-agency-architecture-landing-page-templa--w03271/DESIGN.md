# Design system — LuxotaOS Agency Architecture Landing Page Template

`SN-W03271` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, technical opening sits on a pure black ground (#020203) with a dim oversized numeral and a small, widely spaced monospace status line beneath it. One sans family, glass panels and gradient fills complete the look. The tone is quiet and system-like.

**Mood:** technical, dark, minimal, system-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020203` | Page ground |
| Surface | `#050507` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#020203` · `#050507` · `#08080a` · `#000000` · `#0a0a0c` · `#e5e5e5` · `#22c55e` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Share Tech Mono
- **Scale (largest breakpoint):** h1 112px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_#4FD1C5]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[900px]`
- **Section padding:** `py-40`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Listings (`listings`)
6. Integrations (`integrations`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020203;
  --color-surface: #050507;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020203',
    surface: '#050507',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the intro on a pure black ground with a dim oversized numeral.
- **Do:** Set status text in a small, widely spaced monospace face.
- **Do:** Use the green (#22c55e) only for progress or status accents.
- **Don't:** Don't show the numeral at full brightness; it stays dim.
- **Don't:** Don't add colour beyond the status accent.
- **Don't:** Don't put light backgrounds behind the intro.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
