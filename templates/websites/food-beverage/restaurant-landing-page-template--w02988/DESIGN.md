# Design system — Restaurant Landing Page Template

`SN-W02988` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark food-first page with a large white Inter headline, where one word, ignites, runs in an orange-to-rose gradient (#f97316 to #e11d48). The primary button is solid orange and the secondary is a dark outline, with a rounded photograph of plated dishes beside the copy. A small rounded label sits above the headline as the eyebrow.

**Mood:** dark, vivid, food-first, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#e11d48` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#27272a` · `#71717a` · `#18181b` · `#a1a1aa` · `#09090b` · `#ea580c` · `#52525b` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-1`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-semibold tracking-tight hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Menu list (`menu-list`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #fafafa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f97316;
  --color-accent-2: #e11d48;
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
    surface: '#18181b',
    ink: '#fafafa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f97316',
    accent2: '#e11d48',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one word per headline in the orange-to-rose gradient, as the hero does.
- **Do:** Use solid orange (#f97316) for the primary button only.
- **Do:** Frame food photographs in rounded-2xl cards beside the headline.
- **Don't:** Don't put the gradient on body text.
- **Don't:** Don't fill the secondary button with colour.
- **Don't:** Don't run the gradient across a whole headline line.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
