# Design system — Product Designer Portfolio Layout

`SN-W02189` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark resume-style page: a near-black warm ground with a two-line headline, the second line in orange (#f97316), and a stone-coloured (#44403c) card holding skills and experience. A solid orange download pill sits in the nav, and the layout splits text on the left from a framed photo on the right. Orange is used for the name and the one primary action, nothing else.

**Mood:** warm, dark, focused, professional, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#44403c` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#57534e` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#f472b6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#fb923c` · `#d6d3d1` · `#44403c` · `#57534e` · `#a8a29e` · `#111827` · `#78716c` · `#fdba74`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[40px]` (40px)
- **Shadows:** `shadow-lg`, `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-8`, `gap-1`

**Primary button**

```html
<a class="lg:hidden rounded-lg p-2 hover:bg-black/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #44403c;
  --color-text: #f3f4f6;
  --color-muted: #57534e;
  --color-border: #57534e;
  --color-accent: #f97316;
  --color-accent-2: #f472b6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#44403c',
    ink: '#f3f4f6',
    muted: '#57534e',
    line: '#57534e',
    accent: '#f97316',
    accent2: '#f472b6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in two lines, the second in orange (#f97316)
- **Do:** Use one solid orange pill for the download action
- **Do:** Keep skill lists as short bullets with no icons
- **Don't:** Don't use orange for body copy
- **Don't:** Don't add a second accent colour beside the orange.
- **Don't:** Don't float the photo over text; it sits in its own frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
