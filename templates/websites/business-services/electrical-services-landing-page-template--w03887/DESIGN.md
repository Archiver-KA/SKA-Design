# Design system — Electrical Services Landing Page Template

`SN-W03887` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy hero with white bold sans-serif headlines and one phrase set in amber. The buttons are an amber primary and a dark outlined secondary, and a photo of an electrician sits in a rounded frame on the right with a small white caption card over its corner. Amber is kept to the highlighted phrase and the primary button, so the page stays steady.

**Mood:** steady, trustworthy, bold, clear, practical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#f59e0b` · `#e2e8f0` · `#f8fafc` · `#64748b` · `#475569` · `#cbd5e1` · `#334155` · `#d97706`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_2px_10px_rgba(0,0,0,0.02)]`, `shadow-[0_8px_30px_rgba(0,0,0,0.04)]`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-[240px]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Sign-in form (`auth-form`)
4. About (`about`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #f59e0b;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#f59e0b',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on deep navy (#0f172a) with white bold sans-serif headlines
- **Do:** Use amber (#f59e0b) for the highlighted phrase and the primary button
- **Do:** Place photos in a rounded frame with a small white caption card over the corner
- **Don't:** Don't use amber for body text; it is for the highlight and the action
- **Don't:** Don't use a light hero background; the navy ground is part of the look
- **Don't:** Don't add more than one highlighted phrase per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
