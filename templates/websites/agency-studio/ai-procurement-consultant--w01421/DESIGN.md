# Design system — AI Procurement Consultant 

`SN-W01421` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark charcoal page with a faint warm gradient that lifts toward gold at the edges, and a centred stack of caps-set serif headings with the phrase 'make it DONE' in gold (#d4af37). The eyebrow is small spaced caps in gold, and the primary button is a solid gold block with dark text. Gold is the single accent throughout.

**Mood:** premium, sober, warm, dark, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#2c3e50` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#1a1a1a` · `#9ca3af` · `#f5f5f5` · `#2c3e50` · `#6b7280` · `#d1d5db` · `#4b5563` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Manrope
- **Loaded families:** Cinzel, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-[#d4af37] text-[#1a1a1a] font-serif font-medium tracking-tight overflow-hidden transition-all hover:bg-white">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. About (`about`)
7. Articles (`blog-articles`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #374151;
  --color-text: #f5f5f5;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #2c3e50;
  --font-display: "Cinzel", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#374151',
    ink: '#f5f5f5',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#2c3e50',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in the caps serif and mark one phrase per screen in gold (#d4af37).
- **Do:** Use the solid gold button with dark text as the only primary action.
- **Do:** Keep the eyebrow in small spaced caps in gold.
- **Don't:** Don't use gold for body text; the body is grey sans.
- **Don't:** Don't set the primary button as an outline; it is a solid gold block.
- **Don't:** Don't use a light background; the page stays charcoal.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
