# Design system — Pergola Builder Landing Page Template

`SN-W03324` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The first screen is a flat charcoal navigation bar with a white filled quote button at the top right, sitting over a neutral grey field that fades to black. The look rests on the chrome alone: a plain sans for the links and a single light button. The design is minimal and utilitarian, with no accent colour.

**Mood:** plain, dark, minimal, utilitarian

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#e4e4e7` · `#09090b` · `#a1a1aa` · `#d4d4d8` · `#f4f4f5` · `#3f3f46` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,0,0,0.5)]`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="hidden md:block px-5 py-2.5 bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Call to action (`cta`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the navigation bar in dark charcoal (#18181b) with light sans links.
- **Do:** Use the white filled button for the quote action at the top right.
- **Do:** Keep the hero on a neutral grey field that fades to black, with no added colour.
- **Don't:** Don't add a colour accent to the navigation; it is neutral throughout.
- **Don't:** Don't use decorative type; the sans links stay plain.
- **Don't:** Don't put a light background behind the navigation.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
