# Design system — Growth Marketing Agency Landing Page Template

`SN-W01592` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A deep navy ground (#020617) with a left-aligned headline in white, the closing line set in muted slate (#64748b) as a quieter echo. A bordered lead-capture form with dark fields sits on the right, with one solid blue (#3b82f6) button, and small light-blue badges sit under the copy. The two-column split puts the form at the centre of attention.

**Mood:** trustworthy, clear, dark, performance-driven, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#94a3b8` · `#020617` · `#64748b` · `#0b1121` · `#60a5fa` · `#1e293b` · `#1e3a8a` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Booking form (`booking`)
5. Dashboard preview (`dashboard-preview`)
6. Call to action (`cta`)
7. Feature grid (`features`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #22c55e;
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
    surface: '#020617',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter with the closing line in slate (#64748b)
- **Do:** Use the blue (#3b82f6) for the form's primary button only
- **Do:** Build forms as dark fields inside a bordered card, with one button
- **Don't:** Don't set the page on a light ground; it stays navy
- **Don't:** Don't put blue behind body text
- **Don't:** Don't use more than one solid blue button per view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
