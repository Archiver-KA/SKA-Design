# Design system — Campus Restaurant & Bar Landing Page Template

`SN-W02870` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark, loud and energetic. A near-black navy ground (#020617) with a dimmed photo of the room behind it carries a very heavy all-caps white headline, and the key word GAME is set in amber-yellow (#fbbf24). The yellow pill is the only bright colour, reserved for the main booking action, while the secondary Host an Event is dark and outlined. The result is direct and campus-led.

**Mood:** loud, dark, energetic, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#fbbf24` · `#ffffff` · `#020617` · `#f9faf5` · `#9ca3af` · `#111827` · `#0b1120` · `#d1d5db` · `#1a1a1a` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(251,191,36,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-5`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#fbbf24] text-[#020617] px-7 py-3 rounded-full text-base font-normal hover:bg-[#f9faf5] transition-colors duration-300 cursor-interactive">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Feature grid (`features`)
4. 3D / canvas scene (`3d-canvas`)
5. Bento grid (`bento-grid`)
6. Contact form (`contact-form`)
7. Marquee (`marquee`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #7f1d1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline word in yellow (#fbbf24) and the rest in white heavy caps
- **Do:** Use the yellow pill for the main booking action only
- **Do:** Keep the page ground at #020617 with dimmed photography behind
- **Don't:** Don't use yellow for body text or secondary buttons
- **Don't:** Don't set headlines in lowercase
- **Don't:** Don't add light panels to the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
