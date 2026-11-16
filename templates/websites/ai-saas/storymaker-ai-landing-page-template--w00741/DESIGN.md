# Design system — StoryMaker AI Landing Page Template

`SN-W00741` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, centred hero on a near-black ground (#0a0a12) with a large, bold Inter headline in pale grey and a small pill navbar CTA. Warm orange (#fb923c) runs into pink (#ec4899) in the primary button and the logo mark, and soft blurred glows sit low on the page. Warm colour is limited to these few controls, so the page reads as dark and calm rather than loud.

**Mood:** dark, warm, bold, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a12` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#fb923c` · `#f8fafc` · `#ec4899` · `#d4d4d8` · `#000000` · `#94a3b8` · `#e4e4e7` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 16px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-orange-900/25`, `shadow-lg`, `shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Articles (`blog-articles`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a12;
  --color-surface: #171717;
  --color-text: #f4f4f5;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --color-accent-2: #ec4899;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a12',
    surface: '#171717',
    ink: '#f4f4f5',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter bold at large size, in pale grey
- **Do:** Use the orange-to-pink gradient only on primary buttons and the logo mark
- **Do:** Keep blurred glow shapes low on the page, behind content and never over text
- **Don't:** Don't use the orange gradient on secondary buttons
- **Don't:** Don't set body text in pure white on the near-black ground
- **Don't:** Don't put a light band between hero sections; the dark ground runs the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
