# Design system — Asterix Digital Studio Landing Page Template

`SN-W01437` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground ([#050505]) with orange ([#f97316]) used for one italic word in the headline, the logo mark and the primary button. The headline is large sans in white, and the orange italic word is a serif, which sets it apart from the body. A faint grid sits behind the hero, and cards are outlined with thin borders.

**Mood:** precise, dark, warm-accented, modern, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fff7ed` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#fb923c` · `#000000` · `#fdba74` · `#0f0f0f` · `#7c2d12` · `#ea580c` · `#101010` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Instrument Serif, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-orange-500/20`, `shadow-orange-500/40`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="block w-full py-3 px-4 rounded-full bg-orange-500 text-center text-sm font-semibold text-black hover:bg-orange-400 transition shadow-lg shadow-orange-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Integrations (`integrations`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0f0f0f;
  --color-text: #ffffff;
  --color-muted: #fff7ed;
  --color-border: #ffffff;
  --color-accent: #f97316;
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
    surface: '#0f0f0f',
    ink: '#ffffff',
    muted: '#fff7ed',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f97316) for the logo mark, primary button and one headline word
- **Do:** Set the hero headline in large sans with one italic serif word
- **Do:** Keep the faint grid texture behind the hero only
- **Don't:** Don't use the orange for body text
- **Don't:** Don't remove the thin outlined card borders
- **Don't:** Don't add a second accent hue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
