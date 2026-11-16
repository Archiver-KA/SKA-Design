# Design system — Assistante Indépendante Landing Page Template

`SN-W03810` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A dark navy hero with a large uppercase headline in two parts: the first line in cool grey and the second in bright blue (#60a5fa). Solid blue buttons carry the actions, set against a soft gradient that sits behind the top of the page. Supporting copy is light grey and centred, which keeps the page calm and professional.

**Mood:** professional, calm, focused, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#475569` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#64748b` · `#94a3b8` · `#60a5fa` · `#0f172a` · `#475569` · `#93c5fd` · `#6366f1` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Geist
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_30px_rgba(37,99,235,0.4)]`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 px-5 py-2 text-xs tracking-widest uppercase transition-all text-white font-semibold font-geist rounded">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Stats band (`stats`)
7. Feature grid (`features`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #475569;
  --color-accent: #60a5fa;
  --color-accent-2: #10b981;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#475569',
    accent: '#60a5fa',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in Space Grotesk, uppercase, with the first line in grey and the second in blue (#60a5fa).
- **Do:** Use solid blue buttons for the main actions on the navy ground (#0f172a).
- **Do:** Keep supporting copy light grey and centred beneath the headline.
- **Don't:** Don't set the headline in a serif face.
- **Don't:** Don't use blue for body copy.
- **Don't:** Don't place the navy hero on a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
