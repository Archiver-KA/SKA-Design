# Design system — Lifestyle Medicine Landing Page Template

`SN-W02432` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The page sits on a warm off-white ground (#fbf9f6), with a small deep green dot logo and a deep green (#064e3b) pill button in the nav. The deep green is the page's one filled control, and the hero is open, with space around its content.

**Mood:** calm, warm, clinical, unverified

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#022c22` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |

Palette by frequency of use: `#064e3b` · `#ffffff` · `#d1fae5` · `#022c22` · `#fbf9f6` · `#78716c` · `#e7e5e4` · `#57534e` · `#44403c` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 20px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex bg-emerald-900 text-[#FBF9F6] px-5 py-2.5 rounded-full text-base font-medium hover:bg-emerald-800 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Articles (`blog-articles`)
8. Feature grid (`features`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fbf9f6;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #022c22;
  --color-border: #e7e5e4;
  --color-accent: #064e3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf9f6',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#022c22',
    line: '#e7e5e4',
    accent: '#064e3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the navigation on the off-white ground (#fbf9f6) with the deep green (#064e3b) pill button
- **Do:** Keep the hero open, with generous space around its content.
- **Do:** Use deep green (#064e3b) for the primary action only
- **Don't:** Don't crowd the hero with extra elements.
- **Don't:** Don't set the nav button in another colour; it is the page's one filled control
- **Don't:** Don't add a dark band to the page; the ground is off-white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
