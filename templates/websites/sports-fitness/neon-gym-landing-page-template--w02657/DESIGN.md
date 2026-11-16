# Design system — Neon Gym Landing Page Template

`SN-W02657` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A dark, neon-leaning gym hero on near-black (#050505) with a large white sans-serif headline that switches to grey on its second line. Red (#ff3b30) is used for the badge, a highlighted word and the primary pill button, so it is the one accent. The form is a dark pill input with a red button, which keeps the lead capture tight. Glass-style gradients add depth to the surfaces.

**Mood:** neon, dark, urgent, modern, tight

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff3b30` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ff3b30` · `#9ca3af` · `#050505` · `#121212` · `#6b7280` · `#d1d5db` · `#000000` · `#4b5563` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Rock Salt
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-neon`, `shadow-neon-hover`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2 px-4 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #121212;
  --color-text: #e5e7eb;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ff3b30;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#121212',
    ink: '#e5e7eb',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ff3b30',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set one highlighted word per headline in #ff3b30.
- **Do:** Use pill-shaped inputs with a red primary button attached at the end.
- **Do:** Keep the hero ground at #050505 with #121212 for panels.
- **Don't:** Don't use red for paragraph text.
- **Don't:** Don't use other bright colours beside the red.
- **Don't:** Don't use square corners on the lead form.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
