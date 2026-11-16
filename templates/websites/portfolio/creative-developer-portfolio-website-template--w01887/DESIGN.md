# Design system — Creative Developer Portfolio Website Template

`SN-W01887` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark page with a soft radial glow behind the centre, shifting from violet to blue, which the gradient in the second headline line picks up. The headline is a bold sans in white stacked over a gradient line in blue and violet, with a solid white pill as the primary button and a dark pill as the secondary. The look is centred, calm and glow-led.

**Mood:** calm, glowing, centred, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#3b82f6` · `#737373` · `#000000` · `#e5e5e5` · `#d4d4d4` · `#525252` · `#9333ea` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-blue-900/10`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2 text-xs font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #444444;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #9333ea;
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
    surface: '#444444',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#3b82f6) to violet (#9333ea) gradient only on the second headline line.
- **Do:** Keep the primary button a solid white pill and the secondary a dark pill.
- **Do:** Place the radial glow behind the hero content, one per section.
- **Don't:** Don't add hard-edged coloured boxes; glow shapes stay soft.
- **Don't:** Don't use the gradient on body copy.
- **Don't:** Don't stack more than one glow behind one section.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
