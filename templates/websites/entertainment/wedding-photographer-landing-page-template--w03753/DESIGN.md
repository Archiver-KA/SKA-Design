# Design system — Wedding Photographer Landing Page Template

`SN-W03753` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome hero over a vertical grey gradient, running from charcoal at the top to pale grey, with a near-black band below. The headline is a large sans-serif in which the first letter of each word is set apart in a lighter tone. Buttons are solid black with white labels, and the nav uses a white contact pill, so the page is atmospheric and gallery-like.

**Mood:** monochrome, atmospheric, understated, gallery-like, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#78716c` · `#000000` · `#ffffff` · `#f5f5f4` · `#57534e` · `#0c0a09` · `#292524` · `#1c1917` · `#44403c` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-1`

**Primary button**

```html
<a class="px-6 py-3 text-xs font-medium rounded-full transition-all bg-black text-white hover:bg-stone-800 tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Gallery / portfolio (`gallery-portfolio`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #292524;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#292524',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large sans-serif, with the initial letter of each word set apart
- **Do:** Keep buttons solid black with white labels over the grey gradient
- **Do:** Use the gradient as the only background texture in the hero
- **Don't:** Don't add a colour accent to buttons or the navigation
- **Don't:** Don't place text in the mid-grey tones of the gradient without contrast
- **Don't:** Don't add outlines or borders around the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
