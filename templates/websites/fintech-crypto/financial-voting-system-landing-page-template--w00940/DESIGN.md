# Design system — Financial Voting System Landing Page Template

`SN-W00940` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A plain, form-first voting panel on pale grey [#f9fafb], with a single white card holding a bold near-black title and a grey subtitle. Labelled dropdowns and an email input stack down the card, with grey placeholder text inside outlined boxes. Orange appears only in the inline terms link, so the page is functional and neutral.

**Mood:** functional, plain, neutral, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#ffa500` | Primary action and highlights |

Palette by frequency of use: `#ffa500` · `#ffffff` · `#f9fafb` · `#111827` · `#9ca3af` · `#e5e7eb` · `#f3f4f6` · `#374151` · `#e69500` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[#FFA500]/20`, `shadow-md`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-1.5`, `gap-2.5`, `gap-8`

**Primary button**

```html
<a class="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFA500] px-4 font-semibold text-white shadow-sm shadow-[#FFA500]/20 transition-all hover:bg-[#e69500] hover:shadow-md hover:shadow-[#FFA500]/30 focus:outline-none focus:ring-4 focus:ring-[#FFA500]/30 active:scale-[0.98] py-4 md:py-5 text-base md:text-lg">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #ffa500;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#ffa500',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the form inside a single white card on pale grey
- **Do:** Use grey placeholder text inside outlined input boxes
- **Do:** Use orange (#ffa500) for inline links and terms only
- **Don't:** Don't add decorative imagery to the card
- **Don't:** Don't set input labels in orange
- **Don't:** Don't change the card to a dark surface; the design is light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
