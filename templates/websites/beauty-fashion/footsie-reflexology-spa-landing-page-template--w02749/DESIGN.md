# Design system — Footsie Reflexology Spa Landing Page Template

`SN-W02749` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Grey, misty hero with a white serif headline laid directly over a soft grey photograph wash, with no dark overlay. A small outlined label sits under the title, and the primary action is a white pill with dark text beside a faint outlined pill. The look is calm and clinical, and the spa's name carries the page.

**Mood:** calm, misty, spa, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e5e4` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#57534e` · `#fafaf9` · `#f5f5f4` · `#78716c` · `#292524` · `#000000` · `#e7e5e4` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-stone-800 hover:bg-stone-700 transition-all shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e7e5e4;
  --color-surface: #fafaf9;
  --color-text: #ffffff;
  --color-muted: #57534e;
  --color-border: #f5f5f4;
  --color-accent: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7e5e4',
    surface: '#fafaf9',
    ink: '#ffffff',
    muted: '#57534e',
    line: '#f5f5f4',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display in white over the soft grey photo wash
- **Do:** Use a white filled pill with dark text as the primary action
- **Do:** Keep the header a light translucent bar with a dark pill booking button
- **Don't:** Don't add bright accent colour; the yellow in the palette does not show in the hero
- **Don't:** Don't put light text on a pale area; the wash must stay mid grey behind the headline
- **Don't:** Don't add heavy shadows to the hero buttons; they are flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
