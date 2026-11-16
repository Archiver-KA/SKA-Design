# Design system — Hotel Kinderzeche Event Landing Page Template

`SN-W03065` · travel · light mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A German event hotel with a dark, misty photograph as the hero, a white serif headline and a yellow italic line for the event name. The page uses an orange (#b45309) button as the main action beside an outlined secondary button, and a light navigation bar sits across the top. The photograph sets the mood, and the text stays centred over its darkest area.

**Mood:** historic, atmospheric, warm, festive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#475569` · `#94a3b8` · `#e2e8f0` · `#b45309` · `#000000` · `#64748b` · `#334155` · `#fde68a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-amber-700 text-white rounded-lg text-lg font-normal hover:bg-amber-800 transition-all shadow-lg shadow-amber-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Feature grid (`features`)
5. FAQ (`faq`)
6. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #b45309;
  --color-accent-2: #e2e8f0;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#b45309',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use burnt orange (#b45309) for the main booking button only
- **Do:** Set the event name as an italic line in a warm yellow
- **Do:** Keep headline text centred over the darkest part of the photograph
- **Don't:** Don't use bright sans for the headline; the serif carries the page
- **Don't:** Don't place the orange button over the light part of the photo
- **Don't:** Don't add a second primary colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
