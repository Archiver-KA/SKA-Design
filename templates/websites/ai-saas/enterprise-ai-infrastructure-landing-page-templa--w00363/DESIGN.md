# Design system — Enterprise AI Infrastructure Landing Page Template

`SN-W00363` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The dark variant of the same heavy two-line AI infrastructure page, with a faint dot grid across the hero behind SYNTHETIC COGNITION. The second word fades from white to grey, and the primary button is orange-red (#ff3b00). Bracketed numeric navigation labels and a green status line sit in the header. The dot grid adds texture without colour, so the orange stays the only signal.

**Mood:** technical, precise, dark, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#6b7280` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff3b00` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff3b00` · `#6b7280` · `#050505` · `#000000` · `#4b5563` · `#9ca3af` · `#22c55e` · `#d1d5db` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 20px
- **Weights in use:** bold, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_white]`, `shadow-2xl`, `shadow-[0_0_20px_rgba(255,59,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 border border-white/20 rounded font-bold uppercase text-xs tracking-wider text-white hover:bg-white hover:text-black transition-all z-10 relative">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Code / terminal (`code-terminal`)
7. Feature grid (`features`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #6b7280;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ff3b00;
  --color-accent-2: #22c55e;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#6b7280',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ff3b00',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans with the second word in a white-to-grey gradient
- **Do:** Use orange-red (#ff3b00) for the primary button only
- **Do:** Keep the dot grid faint and behind the hero only
- **Don't:** Don't brighten the dot grid into a pattern that competes with the type
- **Don't:** Don't add rounded corners to the buttons; they are square-cut
- **Don't:** Don't use the green status colour as a button fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
