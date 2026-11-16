# Design system — Lumière Films Wedding Photography Template

`SN-W03718` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `de`

## Direction

Warm dark brown ground with a large serif wordmark in cream, followed by an italic serif tagline and a thin tan rule above small spaced caps. Navigation is a small wordmark and a two-line menu mark, and the caption at the foot of the page is the quietest element. The type carries the page with a calm, cinematic tone, and gold is kept to thin rules and labels.

**Mood:** cinematic, refined, warm, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2b2622` | Page ground |
| Surface | `#f6f0e6` | Cards, panels, raised areas |
| Text | `#fbf7f0` | Headings and primary copy |
| Border | `#2b2622` | Hairlines, dividers, outlines |
| Accent | `#b89b5e` | Primary action and highlights |

Palette by frequency of use: `#2b2622` · `#b89b5e` · `#d8c3a5` · `#fbf7f0` · `#ffffff` · `#000000` · `#f6f0e6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 36px · body 14px
- **Weights in use:** light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="inline-block border border-[#2B2622] px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#2B2622] hover:text-[#FBF7F0] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #2b2622;
  --color-surface: #f6f0e6;
  --color-text: #fbf7f0;
  --color-border: #2b2622;
  --color-accent: #b89b5e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2b2622',
    surface: '#f6f0e6',
    ink: '#fbf7f0',
    line: '#2b2622',
    accent: '#b89b5e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif in cream (#fbf7f0), at a large size
- **Do:** Use italic serif for taglines beneath the headline
- **Do:** Keep gold (#b89b5e) to thin rules and small labels
- **Don't:** Don't use a bright white background
- **Don't:** Don't set captions in bold
- **Don't:** Don't add decorative icons beside the wordmark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
