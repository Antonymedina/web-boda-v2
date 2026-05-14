# Design Tokens

This file documents the visual variables used by the project. The current goal is a clean editorial base that works directly from `index.html` with relative paths and no build step.

## 1. Colors

| Variable | Value | Intended use |
| --- | --- | --- |
| `--color-black` | `#131313` | Primary text and inverse surface color. |
| `--color-white` | `#f0f0f0` | Main off-white page background and light text on dark surfaces. |
| `--color-gray` | `#5c5c5c` | Secondary text and lower-priority placeholder content. |
| `--color-border-subtle` | `rgba(19, 19, 19, 0.08)` | Soft separators when minimal contrast is needed. |
| `--color-border-inverse-subtle` | `rgba(240, 240, 240, 0.24)` | Soft separators on dark sections and inverse editorial surfaces. |
| `--color-text-inverse` | `var(--color-white)` | Inverse text color for editorial dark surfaces. |

## 2. Typography Foundations

| Variable | Value | Intended use |
| --- | --- | --- |
| `--font-heading` | `"Playfair Display", Georgia, serif` | Editorial heading family. |
| `--font-body` | `"Archivo", Arial, sans-serif` | Navigation, body copy, labels and interface text. |
| `--font-weight-light` | `300` | Light editorial body and eyebrow weight. |
| `--font-weight-regular` | `400` | Standard text weight. |
| `--font-weight-medium` | `500` | Support copy with slightly more emphasis. |
| `--font-weight-semibold` | `600` | Stronger UI emphasis and selected states. |
| `--font-weight-bold` | `700` | Large headings and key editorial titles. |
| `--line-height-heading` | `1.1` | Tight heading rhythm. |
| `--line-height-compact` | `1.2` | Compact rhythm for editorial body copy and meta text. |
| `--line-height-tight` | `var(--line-height-compact)` | Alias used by earlier components. |
| `--line-height-base` | `1.5` | Default paragraph line height. |
| `--measure-reading` | `42rem` | Comfortable maximum measure for centered reading blocks. |
| `--measure-content` | `34rem` | Comfortable maximum width for left-aligned editorial text columns. |

## 3. Reusable Type Scale

These are the semantic sizes intended for future instructions so component requests can reference the scale instead of repeating full specs.

| Name | CSS token(s) | Style |
| --- | --- | --- |
| Heading / Large | `--font-size-heading-lg`, `--font-heading`, `--font-weight-bold`, `--line-height-heading` | Playfair Display, bold, 48px, 110% |
| Heading / Medium | `--font-size-heading-md`, `--font-heading`, `--font-weight-bold`, `--line-height-heading` | Playfair Display, bold, 32px, 110% |
| Heading / Small | `--font-size-heading-sm`, `--font-heading`, `--font-weight-bold`, `--line-height-heading` | Playfair Display, bold, 24px, 110% |
| Body / Large | `--font-size-body-lg`, `--font-body`, `--font-weight-light`, `--line-height-compact` | Archivo, light, 24px, 120% |
| Body / Medium | `--font-size-body-md`, `--font-body`, `--font-weight-light`, `--line-height-compact` | Archivo, light, 18px, 120% |
| Body / Regular | `--font-size-body-sm`, `--font-body`, `--font-weight-light`, `--line-height-compact` | Archivo, light, 16px, 120% |
| Eyebrow / Small | `--font-size-eyebrow`, `--font-body`, `--font-weight-light`, `--line-height-heading` | Archivo, light, 12px, 110%, uppercase |

## 4. Type Size Tokens

| Variable | Value | Intended use |
| --- | --- | --- |
| `--font-size-base` | `16px` | Base body size for the document. |
| `--font-size-heading-lg` | `48px` | Large editorial section titles on desktop. |
| `--font-size-heading-md` | `32px` | Medium editorial titles and key values. |
| `--font-size-heading-sm` | `24px` | Smaller editorial titles such as section subheads in dark and informational layouts. |
| `--font-size-body-lg` | `24px` | Larger body text for high-emphasis editorial copy. |
| `--font-size-body-md` | `18px` | Medium body text, supporting paragraphs and secondary location text. |
| `--font-size-body-sm` | `16px` | Compact body size and metadata labels. |
| `--font-size-body-xs` | `14px` | Small footer copy and compact editorial support text. |
| `--font-size-eyebrow` | `12px` | Small uppercase labels and section eyebrows. |
| `--font-size-sm` | `0.875rem` | Small utility size used by placeholder sections. |
| `--font-size-nav` | `18px` | Header nav and language switcher size. |
| `--font-size-meta-label` | `var(--font-size-body-sm)` | Alias used by the event details labels. |
| `--font-size-detail-value` | `var(--font-size-heading-md)` | Alias used by the event details primary values. |
| `--font-size-detail-extra` | `var(--font-size-body-md)` | Alias used by the event details supporting line. |

## 5. Spacing

| Variable | Value | Intended use |
| --- | --- | --- |
| `--space-xs` | `0.5rem` | Tight inline spacing. |
| `--space-sm` | `0.75rem` | Small stacked spacing. |
| `--space-md` | `1rem` | Default component gap. |
| `--space-lg` | `1.5rem` | Comfortable gap for text groups and header controls. |
| `--space-xl` | `2rem` | Spacious content separation. |
| `--space-2xl` | `3rem` | Large vertical rhythm and overlay padding. |
| `--space-3xl` | `4.5rem` | Generous section spacing. |
| `--space-4xl` | `6rem` | Large editorial padding blocks. |
| `--space-5xl` | `8rem` | Extra-large desktop padding and section rhythm. |
| `--section-padding-y-light-mobile` | `var(--space-4xl)` | Default vertical padding for editorial light sections on mobile. |
| `--section-padding-y-light-desktop` | `var(--space-5xl)` | Default vertical padding for editorial light sections on desktop. |
| `--section-padding-y-dark-mobile` | `var(--space-4xl)` | Default vertical padding for editorial dark sections on mobile. |
| `--section-padding-y-dark-desktop` | `var(--space-5xl)` | Default vertical padding for editorial dark sections on desktop. |
| `--section-padding-y-compact-mobile` | `var(--space-2xl)` | Compact footer-style vertical spacing on mobile. |
| `--section-padding-y-compact-desktop` | `var(--space-3xl)` | Compact footer-style vertical spacing on desktop. |
| `--content-grid-gap` | `clamp(3rem, 6vw, 5rem)` | Shared gap for balanced editorial two-column grids. |
| `--section-divider-height` | `1px` | Shared subtle horizontal divider thickness. |
| `--accordion-item-padding-y` | `1rem` | Default vertical padding for compact accordion question/answer rows. |

## 6. Layout Widths And Breakpoints

| Variable | Value | Intended use |
| --- | --- | --- |
| `--content-gutter` | `clamp(1rem, 3vw, 2rem)` | Shared horizontal page padding. |
| `--max-content-width` | `1280px` | Maximum desktop width for main content and hero framing. |
| `--desktop-breakpoint` | `800px` | Mobile-to-desktop breakpoint reference. |

## 7. Header

| Variable | Value | Intended use |
| --- | --- | --- |
| `--header-padding-y-mobile` | `1.25rem` | Vertical padding for the compact mobile header. |
| `--header-padding-y-desktop` | `2.5rem` | Vertical padding for the more spacious desktop header. |
| `--logo-width-mobile` | `clamp(170px, 38vw, 290px)` | Mobile logo width. |
| `--logo-width-desktop` | `clamp(300px, 25vw, 440px)` | Desktop logo width. |
| `--mobile-menu-offset` | `0px` | Dynamic offset updated by JavaScript so the fullscreen mobile menu opens below the header. |

## 8. Hero

| Variable | Value | Intended use |
| --- | --- | --- |
| `--hero-margin-top-mobile` | `0px` | Keeps the hero attached to the header on mobile. |
| `--hero-margin-top-desktop` | `2.75rem` | Adds editorial breathing room between desktop header and hero. |
| `--hero-gap-to-summary-mobile` | `4rem` | Vertical gap between hero image and event details on mobile. |
| `--hero-gap-to-summary-desktop` | `4.75rem` | Vertical gap between hero image and event details on desktop. |

## 9. Event Details

| Variable | Value | Intended use |
| --- | --- | --- |
| `--font-size-meta-label` | `var(--font-size-body-sm)` | Event detail labels in uppercase. |
| `--font-size-detail-value` | `var(--font-size-heading-md)` | Event detail main values such as date, hotel and time. |
| `--font-size-detail-extra` | `var(--font-size-body-md)` | Secondary location line under the main venue name. |
| `--line-height-tight` | `var(--line-height-compact)` | Compact rhythm used by the event details block. |

## 10. Details List Pattern

These roles are intended for reusable information stacks such as wedding details, schedule entries or future FAQ metadata blocks.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Details List / Label | Eyebrow / Small | Uppercase item labels such as date, time, location or contact headings. |
| Details List / Value | Body / Large + Semibold | Primary factual values like venue name, contact name, time or date. |
| Details List / Meta | Body / Regular + Medium | Supporting secondary lines such as addresses, notes or phone numbers. |

## 11. Dark Editorial Section

Use this pattern for full-width dark sections with centered editorial pacing and generous breathing room.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Dark Editorial Section / Surface | `--color-black` | Full-width dark background. |
| Dark Editorial Section / Text | `--color-text-inverse` | Inverse text on dark sections. |
| Dark Editorial Section / Padding Mobile | `--section-padding-y-dark-mobile` | Vertical rhythm on mobile. |
| Dark Editorial Section / Padding Desktop | `--section-padding-y-dark-desktop` | Vertical rhythm on desktop. |
| Dark Editorial Section / Reading Width | `--measure-reading`, `--measure-content` | Centered header copy and controlled detail columns. |

## 12. Light Editorial Section

Use this pattern for full-width light sections with left-aligned editorial pacing and generous breathing room.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Light Editorial Section / Surface | `--color-white` | Full-width light background. |
| Light Editorial Section / Text | `--color-black` | Primary text color on light sections. |
| Light Editorial Section / Padding Mobile | `--section-padding-y-light-mobile` | Vertical rhythm on mobile. |
| Light Editorial Section / Padding Desktop | `--section-padding-y-light-desktop` | Vertical rhythm on desktop. |
| Light Editorial Section / Reading Width | `--measure-reading`, `--measure-content` | Controlled widths for headers, narrative grids and media blocks. |

## 13. Editorial Two-Column Grid

Use this pattern for balanced narrative content, schedules or parallel information blocks on desktop while collapsing naturally to one column on mobile.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Editorial Two-Column Grid / Columns | `repeat(2, minmax(0, 1fr))` | Equal-width columns for paired editorial content. |
| Editorial Two-Column Grid / Gap | `--content-grid-gap` | Shared column spacing for balanced layouts. |

## 14. Timeline List

Use this pattern for chronological event sections while preserving the natural reading order in the DOM.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Timeline List / Time | Eyebrow / Small | Compact time markers such as 16h or 21:30h. |
| Timeline List / Title | Heading / Small | Event labels like ceremony, dinner or cake. |
| Timeline List / Body | Body / Regular | Supporting description beneath each event. |
| Timeline List / Structure | Ordered list in chronological DOM order | Semantic event progression for screen readers and mobile layouts. |
| Timeline List / Desktop Layout | Editorial Two-Column Grid | Two-column desktop presentation while keeping one-column mobile flow. |

## 15. Inline Emphasis

Use controlled inline emphasis inside body copy when specific words need visual stress without relying on color alone.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Inline Emphasis | `strong.text-emphasis`, `--font-weight-semibold` | Semibold underlined emphasis inside translated sentences. |

## 16. Editorial Note

Use this pattern for secondary editorial notes inside timeline entries or other light editorial information blocks.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Editorial Note | `--font-size-body-xs`, `--font-body`, `--font-weight-light`, `--line-height-compact`, `--color-gray` | Archivo light, 14px, 120%, for soft secondary guidance inside editorial sections or schedule events. |

## 17. Note / Italic

Use this pattern for explanatory notes or soft instructions that should feel secondary but still readable.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Note / Italic | `--font-size-body-sm`, `--font-body`, `--font-weight-light`, `--line-height-heading`, `--color-gray` | Archivo light italic, 16px, 110%, for menu notes and similar secondary guidance. |

## 18. Section Divider

Use this pattern for subtle separation between light sections without introducing visible card edges or heavy rules.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Section Divider / Thickness | `--section-divider-height` | Shared 1px editorial divider thickness. |
| Section Divider / Color | `--color-border-subtle` | Very soft horizontal rule on `--color-white` surfaces. |

## 19. Arrow List

Use this pattern for editorial food lists or similar semantic lists where the arrow is decorative rather than part of the translated content.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Arrow List / Structure | Semantic `<ul>` with bullets removed | Keeps assistive semantics while avoiding native bullets. |
| Arrow List / Marker | `.arrow-list__item::before` | Visual `→` marker added in CSS instead of inside i18n strings. |
| Arrow List / Body | Body / Regular | Multi-line list items with consistent wrapping and indentation. |

## 20. Small Editorial Footer

Use this pattern for compact closing copy after the main sections have finished.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Small Editorial Footer / Copy | `--font-size-body-xs`, `--font-body`, `--font-weight-light`, `--line-height-compact` | Small 14px footer copy with restrained emphasis. |
| Small Editorial Footer / Mobile Padding | `--section-padding-y-compact-mobile` | Compact but breathable mobile footer spacing. |
| Small Editorial Footer / Desktop Padding | `--section-padding-y-compact-desktop` | Compact but breathable desktop footer spacing. |
| Small Editorial Footer / Layout | Horizontal on desktop, stacked and centered on mobile | Closing signature pattern that does not compete with section content. |

## 21. Dark Accordion / FAQ

Use this pattern for accessible dark disclosure lists such as FAQ sections that need one active item at a time.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Dark Accordion / Surface | `--color-black` | Full-width dark background shared with other inverse editorial sections. |
| Dark Accordion / Text | `--color-text-inverse` | Inverse text for both question and answer copy. |
| Dark Accordion / Divider | `--color-border-inverse-subtle`, `--section-divider-height` | Subtle separation between accordion items on dark surfaces. |
| Dark Accordion / Padding | `--section-padding-y-dark-mobile`, `--section-padding-y-dark-desktop` | Section-level vertical rhythm around the FAQ block. |

## 22. Accordion Item

Use this pattern for interactive question-and-answer rows inside editorial accordions.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Accordion Item / Question | Body / Medium | Clickable question row text with clear prominence. |
| Accordion Item / Answer | Body / Regular | Supporting answer copy revealed below the question. |
| Accordion Item / Row Padding | `--accordion-item-padding-y` | Comfortable vertical rhythm for both question and answer states. |
| Accordion Item / Icon | `+` / `−` derived from `aria-expanded` | Lightweight disclosure signal without extra icon assets. |

## 23. Inverse Section Divider

Use this pattern for subtle horizontal rules inside dark editorial layouts.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Inverse Section Divider | `--color-border-inverse-subtle`, `--section-divider-height` | Soft 1px divider that remains visible against `--color-black`. |

## 24. Z-index

| Variable | Value | Intended use |
| --- | --- | --- |
| `--z-header` | `100` | Header stacking context. |
| `--z-mobile-menu` | `200` | Fullscreen mobile menu overlay. |

## 25. Motion

| Variable | Value | Intended use |
| --- | --- | --- |
| `--motion-duration-base` | `0.6s` | Base duration for the reveal effect. |
| `--motion-ease-standard` | `ease` | Standard easing for subtle fades and shifts. |
| `--motion-distance-reveal` | `1rem` | Vertical offset used before an element becomes visible. |
| `--motion-duration-accordion` | `420ms` | Subtle, premium opening and closing timing for editorial accordions. |
| `--motion-ease-accordion` | `cubic-bezier(0.22, 1, 0.36, 1)` | Smooth luxury easing for accordion expansion, collapse and icon motion. |
| `--motion-distance-accordion` | `0.35rem` | Small vertical offset for answer text as it fades into view. |

## 26. Accordion Motion

Use this pattern for accessible accordions that need restrained movement without feeling abrupt.

| Pattern role | Reuses | Intended use |
| --- | --- | --- |
| Accordion Motion / Height | `--motion-duration-accordion`, `--motion-ease-accordion` | Smooth expansion and collapse of the answer panel. |
| Accordion Motion / Content | `--motion-distance-accordion`, `--motion-duration-accordion`, `--motion-ease-accordion` | Small fade-and-rise treatment for the answer text. |
| Accordion Motion / Reduced Motion | Existing `prefers-reduced-motion` handling | Immediate state changes when motion should be minimized. |
