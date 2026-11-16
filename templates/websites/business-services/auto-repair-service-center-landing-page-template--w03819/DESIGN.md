# Design system — Auto Repair Service Center Landing Page Template

`SN-W03819` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy page (#020617) with a centred hero: a large light-weight Inter headline in white, a short grey intro, and a solid blue (#3b82f6) button beside an outline button. A row of uppercase manufacturer names in muted grey closes the hero as a trust signal. The surface stays flat with no imagery, so the blue button is the one strong colour on the page.

**Mood:** precise, clean, trustworthy, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#64748b` · `#94a3b8` · `#475569` · `#60a5fa` · `#0f172a` · `#020617` · `#2563eb` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)]`, `shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded text-xs font-medium hover:bg-blue-50 transition-colors shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Inter at a light weight, centred, in white (#ffffff).
- **Do:** Use the blue (#3b82f6) only for the main call to action.
- **Do:** Place the manufacturer names in muted grey uppercase below the hero.
- **Don't:** Don't add a background photo behind the hero.
- **Don't:** Don't show more than one solid button in the same view.
- **Don't:** Don't set body text in bright colours; keep it in slate grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
