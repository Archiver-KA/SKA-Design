# Design system — dso0dskdosdokdso00k

`SN-W04189` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A Swedish business-software landing page with a large Inter headline set in tight leading over a muted grey-green background. The prompt field is the centrepiece: a rounded light panel with a lime (#c3df2d) dot and a dark pill button beside it. Suggestion chips sit beneath in small text, and the lower sections use sans type with generous spacing and a black pill for the top-right action.

**Mood:** confident, minimal, muted, business-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f3e6` | Page ground |
| Surface | `#faf9f5` | Cards, panels, raised areas |
| Text | `#2a2624` | Headings and primary copy |
| Muted text | `#6e6e6e` | Secondary copy, captions |
| Border | `#e1e3d6` | Hairlines, dividers, outlines |
| Accent | `#c3df2d` | Primary action and highlights |

Palette by frequency of use: `#6e6e6e` · `#2a2624` · `#e1e3d6` · `#ffffff` · `#faf9f5` · `#c3df2d` · `#1f1d1a` · `#edeee1` · `#f2f3e6` · `#0f0f0e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-[10px]` (10px)
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="text-sm px-5 py-3 rounded-[10px] border border-white/25 text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Integrations (`integrations`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2f3e6;
  --color-surface: #faf9f5;
  --color-text: #2a2624;
  --color-muted: #6e6e6e;
  --color-border: #e1e3d6;
  --color-accent: #c3df2d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f3e6',
    surface: '#faf9f5',
    ink: '#2a2624',
    muted: '#6e6e6e',
    line: '#e1e3d6',
    accent: '#c3df2d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter with tight line spacing
- **Do:** Use the lime (#c3df2d) only for small status dots and one highlight
- **Do:** Make the prompt panel the largest element in the hero
- **Don't:** Don't use lime as a button or background colour
- **Don't:** Don't add decorative imagery behind the prompt field
- **Don't:** Don't set body copy in light grey on the muted ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
