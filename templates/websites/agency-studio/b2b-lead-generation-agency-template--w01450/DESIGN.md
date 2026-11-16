# Design system — B2B Lead Generation Agency Template

`SN-W01450` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark brown-black ground ([#1c1917]) with an orange ([#ea580c]) to pink gradient across the headline. The headline is a heavy sans set large and centred over four lines, with a muted subheading below. The gradient is the single expressive element, and everything else stays neutral.

**Mood:** bold, warm, energetic, dark, gradient-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#fff7ed` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#ea580c` · `#e7e5e4` · `#f97316` · `#fff7ed` · `#fed7aa` · `#ffedd5` · `#fafaf9` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Playfair Display, Poppins, Roboto
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-normal group shadow-md hover:shadow-lg hover:shadow-orange-500/20 shrink-0 bg-stone-900 text-white hover:bg-orange-600 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Integrations (`integrations`)
6. Booking form (`booking`)
7. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #fff7ed;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#fff7ed',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ea580c) gradient on the headline only
- **Do:** Set the headline in Inter at heavy weight, centred over four lines
- **Do:** Keep body copy neutral and muted on the dark ground
- **Don't:** Don't use the gradient on buttons or body copy
- **Don't:** Don't use orange on large background panels
- **Don't:** Don't set the headline left-aligned

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
