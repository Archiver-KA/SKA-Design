# Design system — AfterWordsAI SaaS Landing Page Template

`SN-W00015` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black hero sets a bold white sans headline above a light-blue subheadline, with a dark rounded card on the right that shows a sample executive brief. A navy band (#0f172a) follows, with a centred heavy heading that introduces the problem section. Small tracked uppercase labels mark each section, and the copy is short and direct.

**Mood:** clear, productive, dark, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#1a1a1a` · `#334155` · `#2563eb` · `#000000` · `#475569` · `#22c55e` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Inter
- **Loaded families:** Inter, Nunito
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 30px · body 16px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-14`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-[#1A1A1A] text-base font-normal px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-white hover:bg-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Integrations (`integrations`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #22c55e;
  --font-display: "Nunito", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Nunito'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a bold white sans headline with a blue subheadline beneath
- **Do:** Mark each section with a small uppercase tracked eyebrow label
- **Do:** Show a sample output inside a dark rounded card next to the hero copy
- **Don't:** Don't use bright green as an accent in the hero
- **Don't:** Don't use the blue for long body paragraphs
- **Don't:** Don't set section headings in lowercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
