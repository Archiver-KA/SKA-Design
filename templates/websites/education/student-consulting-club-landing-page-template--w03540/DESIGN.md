# Design system — Student Consulting Club Landing Page Template

`SN-W03540` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

ESC is a black, editorial page with a large serif headline in cream (#f0ede8) on the dark ground. A muted gold (#cfb991) is reserved for the partner button and small accents, and thin rules separate the uppercase navigation labels. Headlines are oversized and tightly set, with a gold full stop closing the statement. The look is restrained and institutional.

**Mood:** editorial, restrained, dark, institutional, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#f0ede8` | Headings and primary copy |
| Muted text | `#8a8680` | Secondary copy, captions |
| Border | `#242424` | Hairlines, dividers, outlines |
| Accent | `#cfb991` | Primary action and highlights |

Palette by frequency of use: `#cfb991` · `#f0ede8` · `#242424` · `#8a8680` · `#4a4744` · `#101010` · `#000000` · `#ffffff` · `#181818` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 12px · body 14px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-40`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-gold text-black px-6 py-3 hover:bg-white transition-colors duration-300 hover-target font-normal text-text-primary hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. About (`about`)
6. Services (`services`)
7. Feature grid (`features`)
8. Team (`team`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #f0ede8;
  --color-muted: #8a8680;
  --color-border: #242424;
  --color-accent: #cfb991;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#f0ede8',
    muted: '#8a8680',
    line: '#242424',
    accent: '#cfb991',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in cream (#f0ede8) serif at display size
- **Do:** Use the muted gold (#cfb991) only for the partner button and small accents
- **Do:** Separate sections with thin hairline rules rather than filled blocks
- **Don't:** Don't put large areas of gold behind text
- **Don't:** Don't use bold sans-serif headlines
- **Don't:** Don't add rounded cards or heavy shadows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
