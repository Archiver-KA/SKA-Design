# Design system — LekkerAI

`SN-W02073` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome product agency hero on pure black, with a centred, tightly set Inter headline in white and a grey supporting paragraph. Both buttons are dark grey pills, one filled and one ghosted, and the navigation sits in a rounded dark bar at the top right. No accent colour appears in the hero, so the page relies on type and spacing alone.

**Mood:** monochrome, minimal, confident, dark, agency

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#404040` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#10b981` · `#34d399` · `#171717` · `#e5e5e5` · `#3b82f6` · `#a855f7` · `#404040` · `#064e3b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500 px-8 py-4 text-sm font-semibold text-black hover:bg-emerald-400 transition font-geist shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #404040;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#404040',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on pure black with white headline type and grey body copy.
- **Do:** Set headlines in Inter, centred, with tight tracking.
- **Do:** Use dark grey pills for buttons, one filled and one ghost.
- **Don't:** Don't add a green or purple accent to the hero.
- **Don't:** Don't use white-filled buttons; the buttons are dark grey.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
