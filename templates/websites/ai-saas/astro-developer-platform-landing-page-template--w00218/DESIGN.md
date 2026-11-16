# Design system — Astro Developer Platform Landing Page Template

`SN-W00218` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black developer-tool hero with a large white headline, where the second line fades into grey so the headline has two tones. The purple (#a855f7) appears only on the version pill and small badges. A real code block below the buttons shows the product in place, and its monospace type makes the commands read as code, not copy.

**Mood:** technical, sober, developer, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#94a3b8` · `#000000` · `#c084fc` · `#a855f7` · `#60a5fa` · `#4ade80` · `#fdba74` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-white text-black text-xs font-medium px-3 py-1.5 rounded hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Timeline (`timeline`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #444444;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#444444',
    ink: '#94a3b8',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in grey gradient text beneath the white first line
- **Do:** Show code samples in a dark panel below the CTAs
- **Do:** Use purple (#a855f7) for the version pill and small badges only
- **Don't:** Don't use purple for large areas
- **Don't:** Don't set the page background to anything but black
- **Don't:** Don't set code samples in the body sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
