# Design system — autoservis3

`SN-W00240` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A black, stark automotive-service hero. A very large, faint outline word, 'SERVIS', fills the lower half behind the copy, and the nav is a white pill. The only loud colour is a solid red 'REZERVOVAT' button in the top right, which makes the booking action the one strong element. The headline sits below the fold, so the first screen is mostly dark ground and type.

**Mood:** stark, direct, dark, service-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#bfdbfe` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#000000` · `#0a0a0a` · `#171717` · `#2563eb` · `#ea580c` · `#737373` · `#a3a3a3` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h2 96px · h3 48px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-[240px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hover:bg-orange-600 transition-all flex items-center gap-3 hover:shadow-orange-500/20 hover:-translate-y-0.5 group text-white bg-blue-500 rounded-full px-8 py-3.5 shadow-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #bfdbfe;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#bfdbfe',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the solid red button for the booking action only
- **Do:** Keep the large background word faint and outlined behind the copy
- **Do:** Keep the nav as a white pill on the black ground
- **Don't:** Don't add a second accent colour beside the red
- **Don't:** Don't put the faint background word behind body text at full contrast
- **Don't:** Don't use a light background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
