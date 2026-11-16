# Design system — Moon River Luxury Resort Template

`SN-W03119` · travel · dark mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

A dark modal over a dimmed resort page, on a near-black ground (#000000). The modal carries a centred white serif headline, a small letterspaced gold eyebrow, and a solid gold button (#d4af37) with dark text. Gold is the single accent and appears only on the eyebrow and the entry button, so the page reads as a formal, cinematic invitation.

**Mood:** cinematic, formal, dark, inviting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#c0c0c0` · `#000000` · `#09090b` · `#e7e5e4` · `#fde047` · `#6ee7b7` · `#34d399` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.32em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="min-h-11 rounded-md bg-gold px-4 py-3 text-xs font-medium text-black transition hover:bg-yellow-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Call to action (`cta`)
5. Contact form (`contact-form`)
6. Footer (`footer`)
7. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #f5f5f4;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #34d399;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#f5f5f4',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the modal title in a white serif, centred
- **Do:** Use gold (#d4af37) for the entry button and the small eyebrow only
- **Do:** Centre the modal over a dimmed page in a rounded dark frame
- **Don't:** Don't use gold for body text in the modal
- **Don't:** Don't add a second button colour to the modal
- **Don't:** Don't let bright page content show through the dimmed backdrop

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
