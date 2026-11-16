# Design system — Local Marketing Agency Landing Page Template

`SN-W01622` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A light, warm-grey French acquisition page. Headlines are bold near-black sans, with one italic serif phrase, 'en clients', underlined in ink. The olive green (#4c5a3e) is the brand colour, used on the navigation CTA and the logo mark, and the copy sits in short grey lines with small bullets. A black video frame below the hero is the main visual.

**Mood:** warm, earthy, direct, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e5e7eb` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#4c5a3e` | Primary action and highlights |

Palette by frequency of use: `#4c5a3e` · `#111827` · `#ffffff` · `#000000` · `#4b5563` · `#f3f4f6` · `#d1d5db` · `#e5e7eb` · `#6b7280` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-gray-900/5`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2 cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e5e7eb;
  --color-surface: #000000;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #4c5a3e;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e5e7eb',
    surface: '#000000',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#4c5a3e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use olive (#4c5a3e) for the navigation CTA and the logo mark only
- **Do:** Set the headline in bold sans, near-black (#111827), with one italic serif phrase underlined
- **Do:** Keep the background warm light grey and centre the video frame below the hero
- **Don't:** Don't use a dark background; the page is light
- **Don't:** Don't use black for panels other than the video frame
- **Don't:** Don't use olive for large fills; keep it to small controls

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
