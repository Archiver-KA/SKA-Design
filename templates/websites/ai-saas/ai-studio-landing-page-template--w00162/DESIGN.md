# Design system — AI Studio Landing Page Template

`SN-W00162` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

Cream editorial page on #fefae0 with a large dark sans headline, and a second line in lavender italic serif (#9a78c1) that carries the emphasis. A soft lilac glow sits to the right of the headline, and the small uppercase tag above it is set in lavender. The page is literary and quiet, with the italic serif doing the expressive work and the sans grounding it.

**Mood:** literary, warm, quiet, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fefae0` | Page ground |
| Text | `#1a1a1a` | Headings and primary copy |
| Border | `#fefae0` | Hairlines, dividers, outlines |
| Accent | `#9a78c1` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#9a78c1` · `#ba9cdc` · `#fefae0` · `#ffffff` · `#d7bef1` · `#121212`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Arimo
- **Body:** Arimo
- **Loaded families:** Arimo
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[#ba9cdc]/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-6 py-3 border border-[#1a1a1a]/10 bg-transparent text-[#1a1a1a] text-xs font-medium tracking-wide hover:bg-[#1a1a1a] hover:text-[#fefae0] hover:border-[#1a1a1a] transition-all duration-500 rounded-sm group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. Services (`services`)
6. Feature grid (`features`)
7. Stats band (`stats`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fefae0;
  --color-text: #1a1a1a;
  --color-border: #fefae0;
  --color-accent: #9a78c1;
  --font-display: "Arimo", sans-serif;
  --font-body: "Arimo", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fefae0',
    ink: '#1a1a1a',
    line: '#fefae0',
    accent: '#9a78c1',
  },
  fontFamily: { display: ['Arimo'], sans: ['Arimo'] },
} }
```

## Do and don't

- **Do:** Set the first line in a large dark sans and the second in lavender italic serif (#9a78c1)
- **Do:** Keep the lilac glow behind the headline's right side only
- **Do:** Use small uppercase tags in lavender above headlines
- **Don't:** Don't use lavender for body copy
- **Don't:** Don't add dark sections to the cream page
- **Don't:** Don't use the italic serif for navigation or buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
