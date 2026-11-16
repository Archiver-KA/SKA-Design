# Design system — Real Estate Lead Generation Landing Page Template

`SN-W03359` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A split hero on a dark navy ground (#0f2035) with a darkened dusk photograph of a house behind it. Headlines are set in a serif, with the keyword 'VA Home' in gold (#c9a24b), and a white form card sits on the right with a solid gold submit button. Small pill badges with gold icons list the benefits, and a thin gold rule separates the headline from its copy.

**Mood:** trustworthy, warm, direct, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f2035` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#181818` | Headings and primary copy |
| Muted text | `#4a4a46` | Secondary copy, captions |
| Accent | `#c9a24b` | Primary action and highlights |
| Second accent | `#0f2035` | Supporting highlights |

Palette by frequency of use: `#c9a24b` · `#b98d4b` · `#f7f3ea` · `#4a4a46` · `#ffffff` · `#0f2035` · `#2a4a68` · `#efe7d4` · `#ded6c2` · `#fcfaf5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Fraunces
- **Loaded families:** Fraunces, Inter
- **Scale (largest breakpoint):** h1 48px · h2 24px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-[3px]` (3px)
- **Shadows:** `shadow-[0_24px_60px_-18px_rgba(0,0,0,.55)]`, `shadow-[10px_16px_30px_-10px_rgba(0,0,0,.5),inset_-2px_0_0_rgba(255,255,255,.06)]`
- **Content width:** `max-w-[1180px]`, `max-w-[520px]`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-2.5`

**Primary button**

```html
<a class="w-full bg-[#B98D4B] text-[#0F2035] p-3.5 rounded-md font-bold text-sm tracking-wide uppercase mt-1 hover:bg-[#C9A24B] transition-colors cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f2035;
  --color-surface: #ffffff;
  --color-text: #181818;
  --color-muted: #4a4a46;
  --color-accent: #c9a24b;
  --color-accent-2: #0f2035;
  --font-display: "Fraunces", serif;
  --font-body: "Fraunces", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f2035',
    surface: '#ffffff',
    ink: '#181818',
    muted: '#4a4a46',
    accent: '#c9a24b',
    accent2: '#0f2035',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Fraunces'] },
} }
```

## Do and don't

- **Do:** Use gold (#c9a24b) for the headline keyword and the submit button
- **Do:** Keep the hero on the dark navy ground (#0f2035) with white text
- **Do:** Place the form on a white card with dark labels and a full-width submit button
- **Don't:** Don't use gold for form labels or body text on white
- **Don't:** Don't use more than one gold element per block
- **Don't:** Don't add colours beyond navy, white and gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
