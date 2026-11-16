# Design system — Event Planning Services Landing Page Template

`SN-W03599` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The event planning page is clean and premium, with a white ground and a heavy near-black sans headline. The second line is set in light grey, so one weight carries two tones. Buttons are a dark solid pill and a white outline pill. Green (#34d399) appears only as a small status dot. The hero is spare, and the type and spacing carry the page.

**Mood:** precise, minimal, premium, clean, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#f4f4f5` · `#a1a1aa` · `#fafafa` · `#3f3f46` · `#52525b` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-zinc-100/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm ring-1 ring-zinc-900/5 hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Pricing (`pricing`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#27272a',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy near-black sans, with the second line in light grey
- **Do:** Use a dark solid pill and a white outline pill for the hero actions
- **Do:** Keep green (#34d399) to small status markers
- **Don't:** Don't use green for buttons, headings or large areas
- **Don't:** Don't reduce the headline to a single tone
- **Don't:** Don't add decorative imagery behind the hero copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
