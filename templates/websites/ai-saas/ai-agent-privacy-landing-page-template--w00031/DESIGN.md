# Design system — AI Agent Privacy Landing Page Template

`SN-W00031` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A hard, high-contrast technical stance: a black ground with uppercase Space Grotesk headlines at about 96px, where one word in each headline turns red (#ff2a2a) as the emphasis. A dark code panel on a #1a1a1a surface sits beside the hero copy, so the page reads like a trading terminal. Grey body text and sharp type keep it engineered rather than playful.

**Mood:** hard-edged, high-contrast, engineered, urgent, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#374151` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff2a2a` | Primary action and highlights |
| Second accent | `#88ff88` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff2a2a` · `#6b7280` · `#374151` · `#9ca3af` · `#000000` · `#1a1a1a` · `#e5e5e5` · `#4b5563` · `#ff7b7b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_#ff2a2a]`, `shadow-[0_0_20px_rgba(255,42,42,0.3)]`, `shadow-[0_0_20px_#ff2a2a]`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="h-14 px-8 bg-[#ff2a2a] hover:bg-[#ff4444] text-black text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,42,42,0.3)] flex items-center justify-center gap-3 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #374151;
  --color-border: #ffffff;
  --color-accent: #ff2a2a;
  --color-accent-2: #88ff88;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#374151',
    line: '#ffffff',
    accent: '#ff2a2a',
    accent2: '#88ff88',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase Space Grotesk at about 96px
- **Do:** Use the red (#ff2a2a) on one word per headline and on the primary button only
- **Do:** Place a dark code panel (#1a1a1a) beside the hero copy to show the product
- **Don't:** Don't use a light page ground; the page is black by design
- **Don't:** Don't set long body copy in uppercase
- **Don't:** Don't add a second typeface; Space Grotesk covers headings and body

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
