# UI Components Documentation

## Project Structure

The project follows a modular structure:

- `components/ui`: Contains reusable UI components
- `constants`: Contains shared constants like styling variants
- `utils`: Contains utility functions

## Badge Component

The Badge component is a versatile, reusable badge with support for multiple variants, sizes, and icons. It uses the Inter font with font-weight 500.

### Import

```tsx
import { Badge } from "@components/ui/Badge";
```

### Props

| Prop         | Type      | Default | Description                              |
| ------------ | --------- | ------- | ---------------------------------------- |
| variant      | string    | 'gray'  | Badge style variant                      |
| size         | string    | 'md'    | Badge size (sm, md, lg)                  |
| leftIcon     | ReactNode | -       | Icon to display on the left side (12px)  |
| rightIcon    | ReactNode | -       | Icon to display on the right side (12px) |
| isDot        | boolean   | false   | Shows a colored dot before the text      |
| isCountry    | boolean   | false   | Badge with country flag (16px)           |
| countryImage | string    | -       | Custom country image                     |
| isAvatar     | boolean   | false   | Badge with avatar icon (16px)            |
| avatarImage  | string    | -       | Custom avatar image                      |
| isIconOnly   | boolean   | false   | Whether the badge only displays an icon  |
| className    | string    | -       | Additional CSS classes                   |

### Variants

The Badge component supports 13 color variants:

1. `gray` - bg-#F2F4F7, text-#344054
2. `primary` - bg-#F9F5FF, text-#6941C6
3. `error` - bg-#FEF3F2, text-#B42318
4. `warning` - bg-#FFFAEB, text-#B54708
5. `success` - bg-#ECFDF3, text-#027A48
6. `blue-gray` - bg-#F8F9FC, text-#363F72
7. `blue-light` - bg-#F0F9FF, text-#026AA2
8. `blue` - bg-#EFF8FF, text-#175CD3
9. `indigo` - bg-#EEF4FF, text-#3538CD
10. `purple` - bg-#F4F3FF, text-#5925DC
11. `pink` - bg-#FDF2FA, text-#C11574
12. `rose` - bg-#FFF1F3, text-#C01048
13. `orange` - bg-#FFF6ED, text-#C4320A

### Sizes

The Badge component supports 3 sizes:

1. `sm` - Small
2. `md` - Medium (default)
3. `lg` - Large

_Note: `md` and `lg` have the same text size, but different padding._

### Icon Support

The Badge component supports different types of icons:

- **Dot**: A small colored dot with badge text
- **Country**: A 16px country flag icon with text
- **Avatar**: A 16px avatar image with text
- **Left Icon**: A 12px icon on the left side
- **Right Icon**: A 12px icon on the right side
- **Icon Only**: Only showing the icon without text

### Example Usage

```tsx
// Basic badge
<Badge>Default Badge</Badge>

// Badge with variant and size
<Badge variant="primary" size="lg">
  Important
</Badge>

// Badge with dot
<Badge variant="success" isDot>
  Active
</Badge>

// Badge with left icon (12px)
<Badge leftIcon={<User size={12} />}>
  User
</Badge>

// Badge with right icon (12px)
<Badge rightIcon={<ChevronDown size={12} />}>
  Options
</Badge>

// Badge with country flag (16px)
<Badge isCountry countryImage="/path/to/flag.png">
  USA
</Badge>

// Badge with avatar (16px)
<Badge isAvatar avatarImage="/path/to/avatar.png">
  John Doe
</Badge>

// Icon-only badge
<Badge isIconOnly leftIcon={<Check size={12} />} />
```

### Demo

A comprehensive demo of all badge variants, sizes, and styles can be found at `/badge-demo`.

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
