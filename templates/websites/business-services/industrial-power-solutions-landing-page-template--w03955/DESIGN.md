# Design system — Industrial Power Solutions Landing Page Template

`SN-W03955` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark industrial-electronics page on a deep navy ground (#0f172a). The headline is large, bold sans-serif in white, with the second line in a pale blue gradient, which is the page's signature. A solid blue primary button sits beside a dark secondary button, and a translucent navigation bar and soft glow behind the hero keep the mood technical and calm.

**Mood:** technical, calm, dark, precise, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#60a5fa` · `#94a3b8` · `#64748b` · `#475569` · `#0f172a` · `#1e293b` · `#2563eb` · `#0f111a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_20px_rgba(37,99,235,0.3)]`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden sm:flex bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. App download (`app-download`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold white sans-serif, with the second line in pale blue
- **Do:** Use solid blue for the primary button and a dark fill for the secondary
- **Do:** Keep the navigation bar translucent and floating above the hero
- **Don't:** Don't put pale blue headline text on light backgrounds
- **Don't:** Don't add more than two accent hues
- **Don't:** Don't remove the soft glow behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
