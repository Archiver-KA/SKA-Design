# Design system — High-Ticket Growth Agency Landing Page Template

`SN-W01596` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, editorial sales page on white with a dark ink headline (#111827) in Instrument Serif. Key phrases switch to italic and the promised outcome, the '10-20 Qualified Sales Calls' figure, takes a rose-to-coral gradient so the eye lands on the number first. Pale-pink eyebrow pills and a grey subline keep the rest quiet, and the product frame below the hero stays neutral and flat.

**Mood:** editorial, persuasive, clean, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#e5e7eb` · `#6b7280` · `#f43f5e` · `#e11d48` · `#9ca3af` · `#ffe4e6` · `#fff1f2` · `#fecdd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="md:px-5 md:py-2.5 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-rose-500/20 hover:bg-rose-600 shrink-0 text-xs font-medium text-white font-montserrat bg-gray-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. FAQ (`faq`)
7. Booking form (`booking`)

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
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #e11d48;
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
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#e11d48',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif, with the outcome phrase in italic rose (#e11d48)
- **Do:** Keep the page background white and the sub-copy in mid grey (#6b7280)
- **Do:** Use one rounded-full eyebrow pill with rose text above each headline
- **Don't:** Don't use rose on more than the key headline phrase and the primary button
- **Don't:** Don't set body copy in the serif; Inter is for text and buttons
- **Don't:** Don't add colour to the product frame below the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
