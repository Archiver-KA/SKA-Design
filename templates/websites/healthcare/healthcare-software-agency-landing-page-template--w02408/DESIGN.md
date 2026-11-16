# Design system — Healthcare Software Agency Landing Page Template

`SN-W02408` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Latent's hero is a black ground (#000000) with dark grey cards in a three-column grid, each holding a white sans title and grey body text. The look is stark and engineering-focused, with depth from thin borders and a faint blurred glow rather than colour. Black ground and white type define the page.

**Mood:** stark, technical, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#000000` · `#3b82f6` · `#22c55e` · `#262626` · `#60a5fa` · `#171717` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-x-6`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Services (`services`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. About (`about`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #22c55e;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Keep the ground black (#000000) with white headings and grey body text (#a3a3a3)
- **Do:** Build cards from thin borders on near-black rather than from bright fills
- **Do:** Lay services out as a three-column card grid with a title and short body copy
- **Don't:** Don't use the blue (#3b82f6) as the page background.
- **Don't:** Don't use bright green as a large fill; it reads as an accent only
- **Don't:** Don't set body text in dark grey on the black ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
