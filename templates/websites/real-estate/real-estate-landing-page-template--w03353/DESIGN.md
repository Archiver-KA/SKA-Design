# Design system — Real Estate Landing Page Template

`SN-W03353` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, minimal estate page on charcoal (#18181b), with a large white sans-serif headline in two lines and a grey intro beneath. The primary button is solid white and the secondary is thin-outlined, and a small green status dot leads the eyebrow label. Thin rules and a scroll cue give the hero a precise, architectural frame.

**Mood:** dark, restrained, minimal, architectural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#f4f4f5` · `#52525b` · `#fafafa` · `#d4d4d8` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-zinc-200/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-colors rounded-full bg-zinc-900 text-white hover:bg-zinc-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Team (`team`)
8. FAQ (`faq`)
9. Sign-in form (`auth-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #e4e4e7;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#e4e4e7',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white primary buttons and thin-outlined secondary buttons on charcoal (#18181b)
- **Do:** Set headlines large in white, with grey (#a1a1aa) for intro copy
- **Do:** Use the green status dot only in the eyebrow label
- **Don't:** Don't use the green as a fill; it is for the status dot
- **Don't:** Don't place light grey text on the light grey navigation strip
- **Don't:** Don't set the headline in a serif; the type is sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
