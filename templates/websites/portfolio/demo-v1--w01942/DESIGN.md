# Design system — Demo V1

`SN-W01942` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pt-PT`

## Direction

A black tattoo-studio page with a heavy, all-caps white serif headline set on three lines, and a gold filled button as the one colour. Light grey small text sits under the hero, and a centred header carries a short wordmark. Thin dark outline frames behind the headline suggest a gallery of works without showing it.

**Mood:** bold, luxurious, dark, gallery-like, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#333333` | Secondary copy, captions |
| Border | `#222222` | Hairlines, dividers, outlines |
| Accent | `#c8a96e` | Primary action and highlights |

Palette by frequency of use: `#888888` · `#c8a96e` · `#0a0a0a` · `#f5f5f5` · `#222222` · `#161616` · `#ffffff` · `#111111` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-6`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="border border-accent text-accent hover:bg-accent hover:text-bgPrimary text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Modal / overlay (`modal-overlay`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #333333;
  --color-border: #222222;
  --color-accent: #c8a96e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#333333',
    line: '#222222',
    accent: '#c8a96e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold all-caps serif, white, on three lines
- **Do:** Use gold (#c8a96e) only for the primary button and key highlights
- **Do:** Keep the gallery frames as thin dark outlines behind the hero
- **Don't:** Don't set large background areas in gold
- **Don't:** Don't use a light background for the hero
- **Don't:** Don't add a second colour to the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
