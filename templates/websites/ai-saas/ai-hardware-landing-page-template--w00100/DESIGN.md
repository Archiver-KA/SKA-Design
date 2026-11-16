# Design system — AI Hardware Landing Page Template

`SN-W00100` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Quill Forward is a dark, cinematic page on a near-black ground (#050505), with a very large white bold sans headline over an italic line that shifts from coral-red to pale peach. The primary button is white and the secondary is dark, and a soft orange glow sits behind the hero. The mood is bold and atmospheric, and the orange carries the emphasis.

**Mood:** cinematic, dark, bold, atmospheric, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff3d00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#050505` · `#000000` · `#333333` · `#ff3d00` · `#f97316` · `#fed7aa` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Inter
- **Loaded families:** Inter, Syne
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,61,0,0.3)]`, `shadow-[0_0_30px_rgba(255,255,255,0.2)]`, `shadow-[0_0_40px_rgba(255,61,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-accent-orange hover:bg-white text-white hover:text-accent-orange text-xs font-semibold px-5 py-2.5 rounded-full transition-all border border-accent-orange/20 shadow-[0_0_20px_rgba(255,61,0,0.3)] group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff3d00;
  --font-display: "Syne", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ff3d00',
  },
  fontFamily: { display: ['Syne'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in very large white bold sans, with one italic line in the coral gradient
- **Do:** Use the orange-red (#ff3d00) for the nav button and the highlight phrase only
- **Do:** Keep the hero on near-black (#050505) with a soft glow behind it
- **Don't:** Don't use the orange (#f97316) as a page background; the ground is near-black
- **Don't:** Don't set the body copy in dark text; it is light grey on black
- **Don't:** Don't add more than one glow to a single screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
