# Design system — VisualJoy Agency Landing Page Template

`SN-W01724` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal black landing page with white centred headlines and a single violet accent [#a855f7] used on a small swatch and a soft glow under key words. The primary call to action is a white pill with a violet dot, which ties the button to the accent. Typography is system sans-serif, so the hierarchy comes from size and white-to-grey contrast alone.

**Mood:** minimal, dark, centred, glowing, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#e5e5e5` · `#000000` · `#a855f7` · `#262626` · `#171717` · `#7e22ce` · `#d4d4d4` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 88px · body 24px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-0.5`, `gap-8`, `gap-2.5`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-neutral-800 text-lg font-medium tracking-tight hover:bg-neutral-900 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #a855f7;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#a855f7',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in white system sans with key words given a soft violet glow
- **Do:** Use a white pill button with a small violet dot for the primary call to action
- **Do:** Keep the page background pure black (#000000) with cards on #171717
- **Don't:** Don't add more than one accent colour to a section
- **Don't:** Don't set body copy in the violet accent
- **Don't:** Don't left-align hero headlines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
