# Design system — Offensive Security & AI Red Teaming Landing Page Template

`SN-W00609` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black security landing page with a heavy white sans headline, where the second line is set in a grey gradient, and a magenta-pink (#e81c79) pill as the only strong colour. A pink tag sits above the headline, and a circuit-board photograph in a dark framed card carries the hero. The pink is used as a signal for action and status, and the photograph gives the page its technical depth.

**Mood:** bold, technical, dark, high-impact, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050507` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e81c79` | Primary action and highlights |
| Second accent | `#8046f2` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e81c79` · `#000000` · `#a1a1aa` · `#52525b` · `#27272a` · `#71717a` · `#050507` · `#18181b` · `#8046f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 36px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_20px_-5px_#E81C79]`, `shadow-[0_0_50px_-15px_rgba(0,0,0,1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#E81C79] hover:bg-[#c91666] text-white px-6 py-2 rounded-md font-bold uppercase text-xs tracking-wider transition-colors flex-shrink-0 shadow-[0_0_20px_-5px_#E81C79]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Marquee (`marquee`)
6. Testimonials (`testimonials`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050507;
  --color-surface: #000000;
  --color-text: #f4f4f5;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #e81c79;
  --color-accent-2: #8046f2;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050507',
    surface: '#000000',
    ink: '#f4f4f5',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#e81c79',
    accent2: '#8046f2',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black (#050507) with heavy white headlines (#f4f4f5) and a grey gradient second line.
- **Do:** Use the magenta (#e81c79) for the primary button and the status tag only.
- **Do:** Frame the hero image as a dark card with a thin border and a short caption in small caps.
- **Don't:** Don't use the magenta as a large background or for body text.
- **Don't:** Don't copy a brand's name or logo into a derived template.
- **Don't:** Don't add the violet (#8046f2) to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
