# Design system — AI Website Translator Landing Page Template

`SN-W00194` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Light editorial page on off-white with a serif headline in near-black, where Translation is set in grey italic and Instant in rose red (#e11d48). The hero sits on a large rounded white card, and a stack of pale translated-text cards forms the product view. Red appears only in the one headline word, so the page stays calm and open-source in tone.

**Mood:** editorial, soft, clear, open-source

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f9f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#1f2937` · `#374151` · `#4b5563` · `#e5e7eb` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Marquee (`marquee`)
6. Pricing (`pricing`)
7. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f9f9;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #374151;
  --color-accent: #e11d48;
  --color-accent-2: #22c55e;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f9f9',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#374151',
    accent: '#e11d48',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif, with one word in rose red (#e11d48) and one in grey italic
- **Do:** Keep the hero in a large rounded white card on the off-white ground
- **Do:** Use pale tinted cards for the product preview rather than strong fills
- **Don't:** Don't use rose red for buttons or body text; it marks one headline word
- **Don't:** Don't set headlines in a sans-serif; the serif carries the look
- **Don't:** Don't add dark sections to the hero; the page stays light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
