# Design system — Beauty Salon Landing Page Template

`SN-W02723` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Beauty and wellness page on a near-white ground (#fafafa) with a large, tight, bold sans headline in near-black, where the second phrase drops to a light grey. The layout is plain: a small status pill above the headline, a grey paragraph, and a black Book now button in the nav. Colour is almost absent, so the hierarchy comes from weight and the grey step between the two headline lines.

**Mood:** plain, bold, neutral, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#e4e4e7` · `#ffffff` · `#71717a` · `#a1a1aa` · `#fafafa` · `#f4f4f5` · `#52525b` · `#d4d4d8` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-zinc-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-medium border border-zinc-200 rounded-full px-4 py-2 hover:bg-white hover:border-zinc-300 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. FAQ (`faq`)
6. Contact form (`contact-form`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold sans with tight leading in near-black (#18181b).
- **Do:** Drop the second headline phrase to a lighter grey for contrast within the line.
- **Do:** Make the primary button near-black (#18181b) with white text.
- **Don't:** Don't use green (#22c55e) as an accent; it only marks the open-hours dot.
- **Don't:** Don't add a colour block behind the hero; the ground is plain.
- **Don't:** Don't set the second headline phrase in full black; the grey step is the design.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
