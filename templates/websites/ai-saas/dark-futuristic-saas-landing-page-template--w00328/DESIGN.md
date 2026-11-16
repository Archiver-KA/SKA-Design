# Design system — Dark Futuristic SaaS Landing Page Template

`SN-W00328` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic dark page built on a full-bleed photograph under a dark overlay, with red (#ef4444) primary buttons and a red gradient on the last word of the headline. Headlines are bold, large and tightly set in Inter, with a small pill label above. The photograph and the glowing red word do most of the work, so there are few other graphic elements.

**Mood:** cinematic, bold, dark, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#737373` · `#dc2626` · `#000000` · `#a3a3a3` · `#050505` · `#7f1d1d` · `#171717` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_40px_-10px_rgba(220,38,38,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-white/5 border border-white/10 rounded-full hover:bg-red-600 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
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
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the dark overlay over the hero photograph so white text stays legible
- **Do:** Use red (#ef4444) for the primary button and the gradient word only
- **Do:** Keep headlines in bold Inter with tight line spacing
- **Don't:** Don't add light section backgrounds; the page stays dark
- **Don't:** Don't introduce a second accent colour beside the red
- **Don't:** Don't set body copy in pure white; use the softer grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
