# Design system — Logistics &trade pageShahensha Global Trade Pvt Limited

`SN-W03995` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, centred hero on near-black navy (#020617) with a large white sans-serif headline. The second line is set in blue (#3b82f6), which is the page's single highlight and also marks the top quote button. Buttons are solid white for the main action and outlined for the secondary, so the layout stays clear and corporate.

**Mood:** corporate, clear, dark, steady, global

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#3b82f6` · `#94a3b8` · `#64748b` · `#2563eb` · `#cbd5e1` · `#0f172a` · `#334155` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]`, `shadow-[0_0_20px_-10px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-all shadow-[0_0_20px_-10px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Benefits (`benefits`)
5. Team (`team`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for the highlight line and the top quote button only
- **Do:** Keep the hero text centred, with the headline in white
- **Do:** Use solid white buttons for the main action and outlined ones for secondary actions
- **Don't:** Don't add light backgrounds to hero sections
- **Don't:** Don't use the green (#10b981) on dark sections except for small marks
- **Don't:** Don't set the headline in a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
