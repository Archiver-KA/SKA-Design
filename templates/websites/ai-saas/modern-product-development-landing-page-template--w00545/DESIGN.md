# Design system — Modern Product Development Landing Page Template

`SN-W00545` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, high-contrast product page with a large bold headline in white, where the last phrase fades into grey. The subtext is muted grey, and the primary action is a solid white pill with an arrow beside a dark outline button. The nav is a thin bar with a small white pill, so white is the only action colour and the page has no decorative accent on the first screen.

**Mood:** confident, dark, crisp, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#27272a` · `#18181b` · `#34d399` · `#a1a1aa` · `#d4d4d8` · `#71717a` · `#3f3f46` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-[0_0_30px_rgba(16,185,129,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Bento grid (`bento-grid`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a solid white pill for the primary action and a dark outline for the secondary
- **Do:** Set the last headline phrase in a grey gradient for emphasis
- **Do:** Keep subtext in muted grey directly below the headline
- **Don't:** Don't add a second action colour; white carries the calls to action
- **Don't:** Don't put a bright accent on the hero text
- **Don't:** Don't set the headline in a light weight; it reads through weight and size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
