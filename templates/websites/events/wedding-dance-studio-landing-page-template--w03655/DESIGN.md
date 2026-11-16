# Design system — Wedding Dance Studio Landing Page Template

`SN-W03655` · events · light mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A calm, neutral landing page on an off-white ground with a dark charcoal primary button carrying most of the emphasis. The large heavy headline runs over two lines, and the second line is set in muted grey for contrast. A single soft pink (#efafa9) appears only on the navigation booking button, so the accent reads as a small signal rather than a theme.

**Mood:** calm, neutral, restrained, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#efafa9` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#4b5563` · `#e5e7eb` · `#f3f4f6` · `#000000` · `#9ca3af` · `#f9fafb` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Bricolage Grotesque, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-[0.2em]`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-5`, `gap-8`

**Primary button**

```html
<a class="bg-theme-pink hover:bg-theme-pink-dark text-white px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 font-manrope">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #efafa9;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#efafa9',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the charcoal (#1f2937) for primary buttons and as the main contrast colour
- **Do:** Keep the pink (#efafa9) to the single booking call to action in the navigation
- **Do:** Set hero headlines large and heavy, with the second line in muted grey (#6b7280)
- **Don't:** Don't add a second accent colour; keep the blue (#2563eb) off the page
- **Don't:** Don't fill large areas or backgrounds with the pink
- **Don't:** Don't place light text on the white surfaces

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
