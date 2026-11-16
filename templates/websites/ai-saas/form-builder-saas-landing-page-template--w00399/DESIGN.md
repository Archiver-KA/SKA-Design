# Design system — Form Builder SaaS Landing Page Template

`SN-W00399` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black, grid-ruled page with large serif headlines set in Newsreader, mixing italic and roman, with one line in grey and the other in white. Small monospace labels with index numbers such as '01_UNLOCKED' sit at the corners of the hero, which gives it an editorial, technical rhythm. Cyan (#06b6d4) appears as sparse dots and a quote rule, while the white pill button carries the call to action.

**Mood:** editorial, technical, dark, ruled, contrasting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#06b6d4` · `#9ca3af` · `#22d3ee` · `#d1d5db` · `#000000` · `#67e8f9` · `#e5e7eb` · `#0891b2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 78px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_2px_0_#0e7490]`, `shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_4px_0_#0e7490,0_10px_15px_-3px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full py-4 rounded-lg bg-cyan-500 text-black font-bold text-center text-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] mt-auto hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #e5e7eb;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #f87171;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#e5e7eb',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Mix roman and italic in the serif headline, with one line grey and the other white.
- **Do:** Label hero sections with small monospace index tags, such as '01_UNLOCKED', in grey.
- **Do:** Use the cyan (#06b6d4) only for small dots and the quote rule beside testimonials.
- **Don't:** Don't replace the serif headline with a sans; the serif carries the page.
- **Don't:** Don't use the cyan on buttons; the primary call to action is white.
- **Don't:** Don't remove the thin vertical grid lines; they structure the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
