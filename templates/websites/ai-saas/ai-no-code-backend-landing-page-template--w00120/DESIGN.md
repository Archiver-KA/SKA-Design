# Design system — AI No-Code Backend Landing Page Template

`SN-W00120` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Spala is a stark, minimal no-code page on a pure black ground, with a large white sans headline whose second line is grey. The hero centres on a single dark command input with a monospace placeholder and a blinking caret, which makes the input itself the visual. Almost no colour appears in the hero, so the page reads as austere and tool-like.

**Mood:** stark, minimal, tool-like, austere, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#6366f1` · `#818cf8` · `#10b981` · `#d1d5db` · `#34d399` · `#3b82f6` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 14px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium text-black bg-white hover:bg-gray-200 transition-colors px-3 py-1.5 rounded-md tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Feature grid (`features`)
5. Integrations (`integrations`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Pricing (`pricing`)
9. Code / terminal (`code-terminal`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans on pure black (#000000), with the second line in grey
- **Do:** Set the command input in monospace, with a blinking caret and a small arrow button
- **Do:** Keep the hero to type and one input, with no decorative imagery
- **Don't:** Don't use indigo (#6366f1) as a page background; the ground is black
- **Don't:** Don't add coloured buttons; the one action is the input
- **Don't:** Don't set the input placeholder in sans; it is monospace

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
