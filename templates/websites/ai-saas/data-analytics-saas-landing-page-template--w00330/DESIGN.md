# Design system — Data Analytics SaaS Landing Page Template

`SN-W00330` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark analytics page on a near-black ground where one emerald green (#10b981) marks the last word of the headline, the primary button and the social-proof line. Headlines are large Inter with tight leading over a soft green glow, and the layout is a centred stack that leads into a product panel below. The palette is almost entirely neutral, so the green carries the meaning.

**Mood:** focused, modern, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#3f3f46` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#09090b` · `#10b981` · `#a1a1aa` · `#18181b` · `#71717a` · `#d4d4d8` · `#000000` · `#6ee7b7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 30px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-emerald-500/20`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Marquee (`marquee`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-text: #ffffff;
  --color-muted: #3f3f46;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    ink: '#ffffff',
    muted: '#3f3f46',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#10b981) on the closing word of each headline only
- **Do:** Make the primary call to action a solid green pill beside a ghost secondary button
- **Do:** Keep the hero centred with a short line length
- **Don't:** Don't tint the background green; the ground stays neutral near-black
- **Don't:** Don't add a second brand colour to charts or badges
- **Don't:** Don't put heavy outlines around the hero text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
