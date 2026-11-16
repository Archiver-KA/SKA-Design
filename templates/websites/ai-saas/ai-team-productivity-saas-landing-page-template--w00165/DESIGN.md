# Design system — AI Team Productivity SaaS Landing Page Template

`SN-W00165` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark product page on a near-black ground (#030304) with a gradient headline that moves from pale slate to indigo (#818cf8). Buttons are white with dark text, and a small indigo pill sits above the headline. Inter at heavy weight carries the display, and a soft radial glow behind the hero does the work an image would do.

**Mood:** dark, focused, modern, luminous

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030304` | Page ground |
| Surface | `#0a0a0c` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#64748b` · `#94a3b8` · `#818cf8` · `#cbd5e1` · `#475569` · `#a855f7` · `#34d399` · `#0a0a0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-[10px] rounded transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Video / media (`video-media`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030304;
  --color-surface: #0a0a0c;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030304',
    surface: '#0a0a0c',
    ink: '#94a3b8',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter, with the second phrase in the indigo gradient
- **Do:** Use a white primary button with dark text as the main call to action
- **Do:** Keep the hero on the near-black ground with a soft radial glow behind the headline
- **Don't:** Don't use indigo for body text; it is reserved for emphasis and the badge
- **Don't:** Don't fill the primary button with indigo; the main action is white on dark
- **Don't:** Don't add a light section to the hero; the top of the page stays dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
