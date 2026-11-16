# Design system — Building Materials Landing Page Template

`SN-W01116` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, premium showroom page on near-black (#050505) pairs each white sans-serif headline with a gold (#d4af37) italic serif for the key word. The hero text is large and left-aligned, with the navigation thin and widely spaced. Gold is reserved for the accent word and the main call to action, so the page reads as quietly luxurious rather than decorative.

**Mood:** luxurious, restrained, warm, showroom

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#6b7280` · `#050505` · `#9ca3af` · `#d1d5db` · `#121212` · `#4b5563` · `#1a1a1a` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.2)]`, `shadow-[0_0_30px_rgba(212,175,55,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-1.5`, `gap-2`

**Primary button**

```html
<a class="text-white flex items-center gap-3 group hover:text-[#D4AF37] transition-all duration-300 px-6 py-3.5 rounded border border-white/10 hover:border-[#D4AF37]/30 bg-white/5 hover:bg-[#D4AF37]/5 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#121212',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the key word of each headline in gold (#d4af37) italic serif.
- **Do:** Keep hero copy left-aligned with a thin gold rule beside the paragraph
- **Do:** Use dark surfaces (#050505, #121212) and keep gold to one highlight per section
- **Don't:** Don't use gold as the background of buttons or large panels
- **Don't:** Don't set whole headlines in a bold sans-serif
- **Don't:** Don't place light backgrounds behind the hero text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
