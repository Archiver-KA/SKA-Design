# Design system — Architecture Studio Landing Page Template

`SN-W03198` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, editorial studio page with a full-bleed desaturated portrait behind a heavy uppercase sans-serif headline. The second line is set in dimmed grey, which builds depth through tone rather than colour. A pale pill button sits top right and a small status line sits above the headline.

**Mood:** dark, cinematic, bold, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#888888` · `#000000` · `#222222` · `#050505` · `#0f0f0f` · `#161616` · `#eaeaea` · `#404040` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 10px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[1600px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2 text-xs font-medium text-secondary hover:text-white hover:bg-white/10 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)
2. Hero (`hero`)
3. Navigation bar (`navbar`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Articles (`blog-articles`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#888888',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans-serif, with the second line dimmed grey
- **Do:** Use the white pill button as the only call to action
- **Do:** Keep the portrait full-bleed behind the headline
- **Don't:** Don't add colour; the page is black, grey and white
- **Don't:** Don't place body copy over the face
- **Don't:** Don't set the headline in lowercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
