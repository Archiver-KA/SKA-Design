# Design system — Women's Empowerment Coaching Landing Page Template

`SN-W03560` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Women's Empowerment Coaching places its headline inside one large, rounded dark-teal panel on a cream page. The headline is set in a light sans-serif, and the phrase Reclaim your peace is picked out in mint green. Thin curved lines run across the panel as a quiet texture. The navigation call to action is a dark pill, and the layout keeps everything else calm and open.

**Mood:** calm, supportive, soft, contained, organic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-teal text-brand-cream font-medium hover:opacity-90 transition-opacity">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-muted: #6b7280;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    muted: '#6b7280',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in mint green
- **Do:** Keep the hero inside one large rounded dark panel
- **Do:** Use thin curved lines as the only texture in the hero
- **Don't:** Don't set hero text on the cream ground without the panel
- **Don't:** Don't add more than one accent colour
- **Don't:** Don't use heavy shadows on the panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
