# Design system — Hair Salon Landing Page Template

`SN-W02755` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

Black, monochrome salon page with a centred, tightly set bold sans headline in two lines, white on near-black. The subline is light grey and the only button is a faint translucent pill, so the hierarchy comes from scale alone. The header is minimal, with a small wordmark at left and a menu label at right.

**Mood:** monochrome, bold, minimal, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#050505` · `#a3a3a3` · `#e5e5e5` · `#000000` · `#171717` · `#404040` · `#0a0a0a` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-main)
- **Body:** var(--font-main)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-500 group opacity-0 animate-[textFadeIn_1s_ease-out_1.5s_forwards]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Team (`team`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --font-display: "var(--font-main)", sans-serif;
  --font-body: "var(--font-main)", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-main)'], sans: ['var(--font-main)'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans, white and centred, with tight line spacing
- **Do:** Keep the subline light grey and short beneath the headline
- **Do:** Use a faint translucent pill for the single action so it stays quiet
- **Don't:** Don't add colour; the page is black, white and grey
- **Don't:** Don't set the headline in a serif; the headline is a bold sans
- **Don't:** Don't use a light page ground; the hero is near-black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
