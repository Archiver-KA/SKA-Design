# Design system — Photography and Ritual Landing Page Template

`SN-W03737` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A quiet dark page built on a near-black ground [#09090b] with almost no colour. The headline is a large uppercase serif, set over an italic serif subtitle, and the body copy stays in soft grey. Outlined buttons and one pale ivory call-to-action bar fixed to the foot keep the page restrained and gallery-like.

**Mood:** restrained, gallery-like, solemn, monochrome, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffe4e6` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#e7e5e4` · `#a8a29e` · `#27272a` · `#18181b` · `#78716c` · `#09090b` · `#d6d3d1` · `#ffffff` · `#44403c` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_0_4px_#09090b]`, `shadow-[0_-10px_40px_rgba(0,0,0,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-stone-500 text-stone-200 hover:bg-stone-200 hover:text-zinc-950 transition duration-500 font-medium w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Bento grid (`bento-grid`)
4. Footer (`footer`)
5. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffe4e6;
  --color-muted: #a8a29e;
  --color-border: #27272a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffe4e6',
    muted: '#a8a29e',
    line: '#27272a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in an uppercase serif display face with the subtitle in italic
- **Do:** Keep the page monochrome and let photography supply any colour
- **Do:** Use outlined buttons for secondary actions and one solid pale button for the main call to action
- **Don't:** Don't add saturated accent colours to buttons or links
- **Don't:** Don't use sans-serif for headlines
- **Don't:** Don't crowd the hero with extra text or icons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
