# Design system — Product Designer Portfolio Landing Page Template

`SN-W02188` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark minimal portfolio: a near-black ground (#050505) with a large white Inter headline set tight, and an orange (#f97316) eyebrow for the section label. Filter tabs run as a thin underline row with the active tab in white, and the image grid sits below in flat panels. Orange is the single accent, used for labels and the active state.

**Mood:** minimal, dark, precise, warm-accent, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#78716c` · `#f97316` · `#1c1917` · `#d6d3d1` · `#a8a29e` · `#e7e5e4` · `#f5f5f4` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · body 20px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-sm` (2px)
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-1`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2 bg-stone-100 text-black rounded-full hover:bg-stone-200 transition-all font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
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
    surface: '#1c1917',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) only for eyebrows and active states
- **Do:** Set filter tabs as a thin underline row with white active text
- **Do:** Keep headlines in white Inter, tight-tracked
- **Don't:** Don't use orange for large fills or buttons
- **Don't:** Don't add a light ground; the page stays dark
- **Don't:** Don't round the nav button beyond a small radius

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
