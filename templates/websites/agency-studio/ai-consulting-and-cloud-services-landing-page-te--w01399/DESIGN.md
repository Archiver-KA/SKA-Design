# Design system — AI Consulting & Cloud Services Landing Page Template

`SN-W01399` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure-black hero with a centred white sans headline at large size and a grey support line beneath, both set in the same family. A small outlined pill above the headline is the only label, and the single call to action is a pale solid button with no second button beside it. Colour is almost absent from the first screen, so the page reads as austere and corporate.

**Mood:** austere, monochrome, corporate, flat, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff9900` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#111827` · `#9ca3af` · `#d1d5db` · `#030712` · `#000000` · `#3b82f6` · `#60a5fa` · `#0f0f11`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Geist
- **Loaded families:** Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(59,130,246,0.5)]`, `shadow-[0_0_15px_rgba(255,255,255,0.05)]`, `shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex h-8 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ff9900;
  --color-accent-2: #3b82f6;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ff9900',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the ground pure black and let white type carry the hierarchy.
- **Do:** Use one pale solid button for the call to action, with no second button on the hero.
- **Do:** Set the headline and support line in the same sans family, with grey for the support line.
- **Don't:** Don't add an orange accent to the first screen.
- **Don't:** Don't place a second button beside the primary one on the hero.
- **Don't:** Don't add coloured gradients to the headline; it is flat white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
