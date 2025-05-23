# UI Components Documentation

## Button Component

The Button component is a versatile, reusable button with support for multiple variants, sizes, icons, loading states, and animations.

### Import

```tsx
import { Button } from "@components/ui/Button";
```

### Props

| Prop       | Type      | Default   | Description                              |
| ---------- | --------- | --------- | ---------------------------------------- |
| variant    | string    | 'primary' | Button style variant                     |
| size       | string    | 'medium'  | Button size                              |
| leftIcon   | ReactNode | -         | Icon to display on the left side         |
| rightIcon  | ReactNode | -         | Icon to display on the right side        |
| isIconOnly | boolean   | false     | Whether the button only displays an icon |
| isLoading  | boolean   | false     | Whether to show a loading spinner        |
| isAnimated | boolean   | false     | Whether to apply hover animation         |
| disabled   | boolean   | false     | Whether the button is disabled           |
| className  | string    | -         | Additional CSS classes                   |

### Variants

The Button component supports 16 variants:

1. `primary` - Main call-to-action button
2. `secondary` - Secondary action button
3. `outline-primary` - Outlined version of primary button
4. `outline-secondary` - Outlined version of secondary button
5. `link` - Button that looks like a link
6. `success` - Green button for success states
7. `danger` - Red button for destructive actions
8. `info` - Blue button for informational actions
9. `light` - Light colored button
10. `warning` - Yellow button for warnings
11. `dark` - Dark button
12. `outline-success` - Outlined version of success button
13. `outline-danger` - Outlined version of danger button
14. `outline-dark` - Outlined version of dark button
15. `outline-info` - Outlined version of info button
16. `outline-warning` - Outlined version of warning button

### Sizes

The Button component supports 3 sizes:

1. `small` - Small button
2. `medium` - Medium button (default)
3. `large` - Large button

### Example Usage

```tsx
// Basic button
<Button>Default Button</Button>

// Button with variant and size
<Button variant="outline-primary" size="large">
  Large Outline Button
</Button>

// Button with icons
<Button leftIcon={<Heart size={16} />}>
  With Left Icon
</Button>

<Button rightIcon={<ArrowRight size={16} />}>
  With Right Icon
</Button>

// Icon-only button
<Button isIconOnly>
  <Heart size={16} />
</Button>

// Loading button
<Button isLoading>Loading</Button>

// Animated button
<Button isAnimated>Hover for Animation</Button>

// Disabled button
<Button disabled>Disabled</Button>
```

### Demo

A comprehensive demo of all button variants, sizes, and states can be found at `/button-demo`.
