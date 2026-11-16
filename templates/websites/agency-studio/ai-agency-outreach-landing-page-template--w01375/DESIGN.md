# Design system — AI Agency Outreach Landing Page Template

`SN-W01375` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep navy page with a centred two-line headline in Inter: the first line is white and the second is a blue gradient set in capitals. A solid blue primary button sits beside a dark outlined secondary, and a dark dashboard window sits below as the product preview. Blue is the single accent and carries the headline, so the look is confident and product-led.

**Mood:** confident, product-led, deep, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#02040a` | Page ground |
| Surface | `#13151b` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#22c55e` · `#4f46e5` · `#a855f7` · `#13151b` · `#475569` · `#0f1117` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 20px · h3 14px · body 10px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-brand-500/20`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center px-5 py-2 text-xs font-medium transition-all bg-gradient-to-r rounded-full hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] hover:scale-105 border text-white from-brand-600 to-indigo-600 border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #02040a;
  --color-surface: #13151b;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #4f46e5;
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
    background: '#02040a',
    surface: '#13151b',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#4f46e5',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white Inter, with the second line in a blue gradient in capitals.
- **Do:** Use blue for the primary button and the headline phrase only.
- **Do:** Keep the dashboard preview in a dark window frame below the calls to action.
- **Don't:** Don't use green for the primary action; blue is the accent.
- **Don't:** Don't set the second headline line in white; it carries the blue.
- **Don't:** Don't put the product preview above the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
