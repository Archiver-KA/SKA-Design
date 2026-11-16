# Design system — M&A Growth Agency Landing Page Template

`SN-W01630` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light advisory page on white with a dark navy headline (#111827) in Instrument Serif, set in three centred lines. The single word 'actively' switches to italic blue (#2563eb), which is also the only accent and outlines the form card, so the contact area shares the colour of the emphasis. The subline is short and grey, and a thin ruled underline runs under the headline.

**Mood:** formal, clean, editorial, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#2563eb` · `#ffffff` · `#3b82f6` · `#e5e7eb` · `#4b5563` · `#9ca3af` · `#6b7280` · `#ffe4e6` · `#881337`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 80px · h2 48px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-blue-500/20`, `shadow-[0_1px_2px_rgba(0,0,0,0.02)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg bg-gray-900 text-white shrink-0 hover:shadow-blue-500/20 hover:bg-blue-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif, navy (#111827), centred
- **Do:** Use blue (#2563eb) for the one emphasised word and the form frame
- **Do:** Keep the page white with grey supporting text (#4b5563)
- **Don't:** Don't use the rose (#ffe4e6) as a page ground; the page is white
- **Don't:** Don't set body copy in the serif
- **Don't:** Don't add a second accent colour to the form

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
