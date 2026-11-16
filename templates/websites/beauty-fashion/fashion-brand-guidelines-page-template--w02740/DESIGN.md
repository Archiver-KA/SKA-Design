# Design system — Fashion Brand Guidelines Page Template

`SN-W02740` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Quiet editorial brand guidelines page on a warm cream ground, with a thin sidebar of small grey navigation and a large serif headline. The second word of the headline is set in italic in a pale taupe (#c6b8a6), and that tonal shift carries the look. Body text is short and generously spaced across three narrow columns.

**Mood:** quiet, editorial, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f3ee` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#8e8e8e` | Secondary copy, captions |
| Border | `#fee2e2` | Hairlines, dividers, outlines |
| Accent | `#c6b8a6` | Primary action and highlights |

Palette by frequency of use: `#fee2e2` · `#111111` · `#f6f3ee` · `#c6b8a6` · `#8e8e8e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="block px-4 py-2 text-sm text-brand-grey hover:text-brand-black hover:bg-brand-black/5 rounded-md transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f6f3ee;
  --color-text: #111111;
  --color-muted: #8e8e8e;
  --color-border: #fee2e2;
  --color-accent: #c6b8a6;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f3ee',
    ink: '#111111',
    muted: '#8e8e8e',
    line: '#fee2e2',
    accent: '#c6b8a6',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant Garamond, with the second word in italic taupe (#c6b8a6)
- **Do:** Keep the page on the warm cream ground (#f6f3ee) with hairline rules
- **Do:** Set small uppercase labels in grey above the three-column body text
- **Don't:** Don't use bold weights in headings; the look relies on light serif and italic
- **Don't:** Don't add saturated colour; the palette stays cream, black and taupe
- **Don't:** Don't fill the sidebar with a dark colour; it is the same cream with grey links

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
