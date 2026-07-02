# Styling Guidelines

## General principles

Prefer CSS modules or plain CSS.

Keep naming semantic.

Prefer Flexbox.

Use Grid when appropriate.

Encourage responsive design.

Explain CSS concepts.

Avoid unnecessary libraries.

Use variables.

Prefer maintainable styling.

## Design

Design should feel professional, intentional and maintainable.

Suggest at least one design improvement and one animation idea when creating a new page. Explain the reasoning behind both. Prefer professional, restrained aesthetics over trendy effects.

Avoid common AI-generated clichés unless explicitly requested:

- excessive glassmorphism
- random gradients
- floating blobs
- giant rounded corners everywhere
- neon colors
- overused shadow effects
- meaningless animations
- stock startup aesthetics

Prefer:

- whitespace
- clear hierarchy
- restrained use of color
- strong typography
- consistent spacing
- accessible contrast

Always explain why styling choices were made.

When suggesting design improvements:

- explain the UX reasoning
- explain visual hierarchy
- explain accessibility considerations

## Design References

When suggesting UI or visual direction, prefer inspiration from:

- Linear (https://linear.app)
- Stripe (https://stripe.com)
- Notion (https://notion.so)
- GitHub (https://github.com)
- Vercel (https://vercel.com)
- Radix UI (https://radix-ui.com)
- Dribbble (https://dribbble.com)
- Mobbin (https://mobbin.com)
- Land-book (https://land-book.com)
- Awwwards (https://www.awwwards.com)
- Pageflows (https://pageflows.com/web/)

Use these as _style references_, not for copying layouts.

If unsure about design direction, align with these principles:

- clean spacing
- neutral colors
- strong typography
- minimal decoration

When unsure, prefer simplicity over visual complexity.

## Color

Do not invent random colors.

Prefer palettes already defined in the project.

If no palette exists:
propose 3 alternatives using:

- https://coolors.co
- https://www.happyhues.co
- https://colorhunt.co

For each palette provide:

- primary
- secondary
- accent
- text
- background
- muted surfaces
- ensure WCAG accessibility contrast

Explain:

- emotional impression, mood of each palette
- accessibility
- intended audience

Avoid:

- pure black (#000000)
- pure white (#FFFFFF)
- oversaturated colors

Prefer:
neutral grays
warm off-whites
accessible contrast ratios

## Styling Units

Prefer relative units over absolute units.

Use:

- rem for typography
- rem for spacing
- % for widths when appropriate
- max-width for content containers
- vh/dvh for viewport-based sections
- em when sizing should scale with the parent

Avoid:

- fixed pixel widths
- large amounts of px-based spacing
- hardcoded heights

Exceptions:

- borders may use px
- hairline separators may use px
- icons can use px when necessary

Layouts:

- use max-width containers
- avoid edge-to-edge content
- consider readability

Border radius:

- subtle by default
- 4px–8px for professional websites
- 12px max unless intentionally playful

Shadows:

- subtle shadows only
- prefer one elevation system throughout the site

Always explain why styling choices were made.

## Typography

- maximum two font families
- establish heading hierarchy
- avoid excessive font sizes
- adjust fonts for responsivity

Prefer:

h1
h2
h3

body

caption

Avoid:

- too many font sizes
- excessive bold text

## UX

Always explain design choices.

Suggest improvements.

Consider:

- readability
- accessibility
- hierarchy
- responsiveness

Avoid generic AI aesthetics.

## Animations

Suggest subtle animations.

Prefer CSS transitions first.

Use Framer Motion only when beneficial.

Animations should improve UX.

Explain timing functions.

Explain transforms.

Keep animations accessible.

Prefer reusable animation utilities.

Do not animate purely for decoration.

Suggest animations only when they improve:

- orientation
- feedback
- hierarchy
- delight

Prefer:

hover states

small scale transforms

opacity transitions

staggered entrances

subtle parallax

microinteractions

Avoid:

continuous movement

large bouncing effects

spinning objects

excessive delays

page-wide motion

Typical timings:

150ms
200ms
250ms
300ms

Hover:

transition:
transform 0.2s ease

Cards:
translateY(-2px)

Buttons:
slight scale
shadow increase

Lists:
staggered fade-in

Navigation:
underline animation

When proposing animations:
explain the UX purpose.
