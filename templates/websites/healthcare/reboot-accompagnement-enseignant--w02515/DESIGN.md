# Design system — ReBoot - accompagnement enseignant

`SN-W02515` · healthcare · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A warm, personal page on off-white (#fafaf9) built around a bold orange script wordmark (#f97316) that carries most of the brand character. The headline is dark sans, and orange returns in a dashed curve and small eyebrow labels. A dark top bar with a session countdown adds urgency, and the single black button closes the header.

**Mood:** warm, energetic, personal, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#292524` · `#57534e` · `#f97316` · `#ffedd5` · `#a8a29e` · `#ea580c` · `#78716c` · `#e7e5e4` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Pacifico
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 18px · body 16px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-orange-100/50`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-4`, `gap-5`, `gap-3`

**Primary button**

```html
<a class="text-sm font-medium bg-stone-800 text-stone-50 px-5 py-2.5 rounded-full hover:bg-stone-700 transition-colors shadow-sm ring-1 ring-stone-900/5">…</a>
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
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
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
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#f97316',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for the wordmark, the dashed curve and eyebrow labels
- **Do:** Set headlines in bold dark sans, one line per idea
- **Do:** Keep the header's black button as the single call to action
- **Don't:** Don't set body copy in orange; it is for brand marks and labels
- **Don't:** Don't use the pale orange (#ffedd5) as a text colour; it is a tint only
- **Don't:** Don't replace the script wordmark with a plain sans logo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
