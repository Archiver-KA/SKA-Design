# Design system — SaaS Revenue Optimization Landing Page Template

`SN-W00690` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A warm off-white page with a bold dark headline, where two phrases are set in burnt orange (#e85d1a). A small monospaced kicker sits above the headline like a label, and the orange primary button leads, with a quieter outline button beside it. The page is direct and confident, using orange as its single emphasis colour.

**Mood:** direct, warm, confident, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#fff3ed` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#e85d1a` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#e85d1a` · `#78716c` · `#a8a29e` · `#ffffff` · `#d6d3d1` · `#fff3ed` · `#f5f5f4` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Mono
- **Body:** Geist Mono
- **Loaded families:** Geist Mono, Inter, Manrope
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 16px · body 14px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-[1080px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-[#e85d1a] hover:bg-[#ff7a3d] text-white font-manrope font-semibold text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Team (`team`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #fff3ed;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #e85d1a;
  --font-display: "Geist Mono", sans-serif;
  --font-body: "Geist Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#fff3ed',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#e85d1a',
  },
  fontFamily: { display: ['Geist Mono'], sans: ['Geist Mono'] },
} }
```

## Do and don't

- **Do:** Set the two emphasis phrases in burnt orange (#e85d1a) and keep the rest near-black
- **Do:** Use the orange filled button as the primary action, with an outline button beside it
- **Do:** Set a small monospaced kicker above the headline as a label
- **Don't:** Don't use orange for body copy or large backgrounds
- **Don't:** Don't set the headline in monospace; it is a sans
- **Don't:** Don't add a second accent colour; the page uses orange alone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
