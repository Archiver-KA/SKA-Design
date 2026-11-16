# Design system — Futuristic Skin Clinic Landing Page Template

`SN-W02380` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A quiet, premium clinic hero on a pale grey-white ground, with a large Cormorant Garamond headline in near-black navy and a thin gold ellipse drawn behind the second word. The gold is the only warm colour, and the navy primary button anchors the page. Generous space and a soft radial light give it a considered, scientific-luxury tone.

**Mood:** premium, scientific, quiet, refined, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#67e8f9` · `#ffffff` · `#0b1629` · `#94a3b8` · `#64748b` · `#0f172a` · `#d4af37` · `#1e293b` · `#334155` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-glow-blue`, `shadow-neon`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-3 px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-bold text-white bg-qms-blue hover:bg-slate-800 transition-all duration-300 rounded-sm shadow-lg hover:shadow-neon group overflow-hidden relative">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Services (`services`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #d4af37;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with a thin gold ring (#d4af37) behind one word.
- **Do:** Keep the page on the pale ground (#f3f4f6) with white panels.
- **Do:** Use the navy (#0f172a) for the primary button and the headline text.
- **Don't:** Don't use the cyan (#67e8f9) as a text or button colour.
- **Don't:** Don't add more gold beyond the single emphasis mark and small rules.
- **Don't:** Don't set the headline in a sans-serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
