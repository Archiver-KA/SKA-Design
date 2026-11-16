# Design system — Criminal Law Firm Landing Page Template

`SN-W03874` · business-services · dark mode · Sinera Atlas theme `route` · language `pt-BR`

## Direction

A dark navy page (#020617) with a white serif headline whose middle phrase is set in gold italic (#d4af37). The layout is split, with copy on the left and a tall framed portrait on the right. A small badge with a gold dot sits above the headline. Gold is kept to the italic phrase and small accents, so the page feels formal and composed.

**Mood:** formal, composed, dark, elegant, authoritative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0b0c10` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#94a3b8` · `#64748b` · `#020617` · `#0b0c10` · `#475569` · `#000000` · `#cbd5e1` · `#b5952f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_-5px_rgba(212,175,55,0.5)]`, `shadow-[0_0_15px_-5px_rgba(212,175,55,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_15px_-5px_rgba(212,175,55,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0b0c10;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #e2e8f0;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0b0c10',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif with the middle phrase in gold italic (#d4af37)
- **Do:** Use gold only for the italic phrase, the badge and small accents
- **Do:** Keep the page on deep navy (#020617) with light grey supporting text
- **Don't:** Don't use gold for body text or across whole buttons
- **Don't:** Don't set the headline in a bold sans-serif; it loses the formal voice
- **Don't:** Don't lighten the page to white; the navy ground is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
