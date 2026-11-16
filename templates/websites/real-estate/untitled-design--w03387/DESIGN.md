# Design system — Untitled Design

`SN-W03387` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en-GB`

## Direction

Light personal profile page on a near-white ground with a very large heavy sans name in muted violet-grey, set at display size. A small red label marks the credential above the name, and an italic grey quotation sits beneath with a thin left rule. Navigation is plain uppercase grey text, so the name and quotation carry the page.

**Mood:** personal, bold, quiet, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fbfbfc` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#f3f4f6` · `#6b7280` · `#4b5563` · `#fbfbfc` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Century Gothic
- **Body:** Century Gothic
- **Loaded families:** Red Hat Display, Century Gothic
- **Scale (largest breakpoint):** h1 128px · h2 14px · h3 48px · body 12px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-12`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-ei-purple text-white px-12 py-5 rounded font-bold text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-opacity-90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Articles (`blog-articles`)
5. About (`about`)
6. Booking form (`booking`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fbfbfc;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --font-display: "Century Gothic", sans-serif;
  --font-body: "Century Gothic", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fbfbfc',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
  },
  fontFamily: { display: ['Century Gothic'], sans: ['Century Gothic'] },
} }
```

## Do and don't

- **Do:** Set the name at display size in heavy sans with a tight line gap.
- **Do:** Use the red label only for the one credential line above the name.
- **Do:** Set the quotation in italic grey with a thin left rule.
- **Don't:** Don't add imagery beside the name; the right side stays open.
- **Don't:** Don't set navigation in the display weight.
- **Don't:** Don't use the red anywhere beyond the label.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
