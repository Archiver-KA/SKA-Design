# Design system — Coaching Projet Professionnel

`SN-W03427` · education · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A light, expressive coaching page on a warm off-white ground, where the brand name is set large in an orange [#f97316] serif with a hand-drawn underline. The rest of the hero uses a plain, dark sans-serif, so the serif word is the only decorative type. A dashed orange curve crosses the top of the page and frames the brand moment.

**Mood:** expressive, warm, clear, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffedd5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#292524` · `#ffffff` · `#57534e` · `#f97316` · `#ffedd5` · `#ea580c` · `#78716c` · `#a8a29e` · `#e7e5e4` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Pacifico, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 18px · body 16px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-orange-100/50`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-4`, `gap-5`, `gap-10`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-sm ring-1 bg-stone-800 text-stone-50 hover:bg-stone-700 ring-stone-900/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Schedule (`schedule-agenda`)
6. Articles (`blog-articles`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffedd5;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #f97316;
  --color-accent-2: #059669;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffedd5',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#f97316',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand word in orange (#f97316) serif, with its underline
- **Do:** Use the dark sans-serif (#292524) for all other headline and body text
- **Do:** Keep the orange for the brand word, the eyebrow label and the primary button
- **Don't:** Don't add more serif words beyond the brand word
- **Don't:** Don't use orange for body text
- **Don't:** Don't set the hero headline in all caps

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
