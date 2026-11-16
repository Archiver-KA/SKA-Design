# Design system — Baziko Premium — высокотехнологичное швейное производство, где инновации встречаются с безупречным стилем. Мы специализируемся на пошиве одежды оптом и предоставляем полный цикл контрактного производс

`SN-W01832` · portfolio · light mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

Photographic and sober: a grey-washed fashion photograph fills the hero, with a large uppercase white wordmark, a small badge above it, and a round green chat button at the lower right. The page is light and neutral, and the green appears only on the chat action. The look is clean and commercial, with the photograph carrying the mood.

**Mood:** photographic, sober, clean, commercial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fefdfb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#7f7f7f` | Secondary copy, captions |
| Border | `#7f7f7f` | Hairlines, dividers, outlines |
| Accent | `#4a3728` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#7f7f7f` · `#ffffff` · `#1a1a1a` · `#000000` · `#fefdfb` · `#d1d1d1` · `#f9f7f5` · `#f5f5f5` · `#d4c5b9` · `#4a3728`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 48px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur text-dark text-[10px] font-semibold tracking-widest px-6 py-3 rounded shadow-lg font-manrope whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Video / media (`video-media`)
5. Bento grid (`bento-grid`)
6. Feature grid (`features`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Contact form (`contact-form`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fefdfb;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #7f7f7f;
  --color-border: #7f7f7f;
  --color-accent: #4a3728;
  --color-accent-2: #25d366;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fefdfb',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#7f7f7f',
    line: '#7f7f7f',
    accent: '#4a3728',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the WhatsApp green (#25d366) for the chat action only
- **Do:** Set the hero wordmark in large uppercase white over a grey wash
- **Do:** Use small uppercase labels above the wordmark
- **Don't:** Don't use the green for headings or the main buttons
- **Don't:** Don't remove the grey wash; the white type needs it
- **Don't:** Don't set the page on a dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
