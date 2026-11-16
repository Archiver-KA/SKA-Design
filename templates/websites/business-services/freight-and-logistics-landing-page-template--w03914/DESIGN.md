# Design system — Freight & Logistics Landing Page Template

`SN-W03914` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page where a heavy uppercase sans headline fills the first screen, and its final two words glow in bright blue (#3b82f6). The rest of the headline is white at very large size, so the contrast between the two colours does the main work. The primary action is a solid blue button beside a dark outlined button, and supporting copy is set in muted grey. The look is focused and high-tech.

**Mood:** focused, high-tech, bold, precise, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#444444` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#333333` · `#444444` · `#050505` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Oswald, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[var(--shadow)]`, `shadow-[0_0_8px_var(--accent)]`, `shadow-[0_20px_40px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs px-5 py-2.5 bg-[color:var(--text)] text-[color:var(--bg-main)] font-semibold rounded tracking-tight transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-white/25">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Booking form (`booking`)
5. Services (`services`)
6. Listings (`listings`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #444444;
  --color-accent: #3b82f6;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#444444',
    accent: '#3b82f6',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing words of the headline in blue (#3b82f6) and keep the rest in white.
- **Do:** Use the solid blue button for the primary tracking action and a dark outlined button for the rate request.
- **Do:** Keep the hero on the near-black ground with the soft blue glow behind the headline.
- **Don't:** Don't use blue for body copy or small labels.
- **Don't:** Don't introduce a second bright accent such as green.
- **Don't:** Don't set the headline in mixed case; the uppercase display is the signature.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
