# Design system — High-Ticket DM Setter Landing Page Template

`SN-W02045` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, minimal sales landing page on near-black (#0a0a0a) with a large white Inter headline where the final phrase fades to grey. Indigo (#6366f1) is kept to a small status pill, and the primary button is white with a dark label, so the page reads as serious and restrained. A faint glow behind the hero gives depth without shadows.

**Mood:** restrained, serious, dark, minimal, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#a3a3a3` · `#737373` · `#171717` · `#0a0a0a` · `#818cf8` · `#262626` · `#525252` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full text-xs font-medium transition-all border border-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Articles (`blog-articles`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at large size, with a grey fade on the final phrase.
- **Do:** Use indigo (#6366f1) only for the status pill and small markers.
- **Do:** Make the primary button white with dark text, and the secondary a dark outline.
- **Don't:** Don't use indigo for large fills or section backgrounds.
- **Don't:** Don't add bright colours to the hero; the page stays grey and white.
- **Don't:** Don't place the headline on a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
