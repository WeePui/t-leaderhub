import { type HTMLAttributes, type ReactNode } from "react";
import "./badge.css";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";
import { badgeVariants } from "@constants/badgeVariants";
// Default images for avatar and country badges
import defaultAvatarBadge from "@assets/images/avatar-badge.png";
import defaultCountryBadge from "@assets/images/country-badge.png";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isDot?: boolean;
  isCountry?: boolean;
  countryImage?: string;
  isAvatar?: boolean;
  avatarImage?: string;
  isIconOnly?: boolean;
}

const Badge = ({
  className,
  variant,
  size,
  iconType,
  leftIcon,
  rightIcon,
  isDot = false,
  isCountry = false,
  countryImage,
  isAvatar = false,
  avatarImage,
  isIconOnly = false,
  children,
  ...props
}: BadgeProps) => {
  // Determine the correct iconType based on props
  const resolvedIconType = () => {
    if (isIconOnly) return "iconOnly";
    if (isDot) return "dot";
    if (isCountry) return "country";
    if (isAvatar) return "avatar";
    if (leftIcon) return "left";
    if (rightIcon) return "right";
    return "none";
  };

  return (
    <span
      className={cn(
        badgeVariants({
          variant,
          size,
          iconType: iconType || resolvedIconType(),
          className,
        }),
        isDot && "badge-dot",
        isDot && variant ? variant : "",
      )}
      {...props}
    >
      {" "}
      {!isIconOnly && isDot && (
        <span className={`badge-dot-icon ${variant || "gray"}`}></span>
      )}
      {!isIconOnly && isCountry && (
        <img
          src={countryImage || defaultCountryBadge}
          alt="Country"
          className="mr-1 h-4 w-4 rounded-full" // 16px size
        />
      )}
      {!isIconOnly && isAvatar && (
        <img
          src={avatarImage || defaultAvatarBadge}
          alt="Avatar"
          className="mr-1 h-4 w-4 rounded-full" // 16px size
        />
      )}
      {!isIconOnly && leftIcon && !isDot && !isCountry && !isAvatar && (
        <span className="mr-1">
          <span className="inline-flex h-3 w-3">{leftIcon}</span> {/* 12px */}
        </span>
      )}
      {isIconOnly ? leftIcon || children : children}
      {!isIconOnly && rightIcon && (
        <span className="ml-1">
          <span className="inline-flex h-3 w-3">{rightIcon}</span> {/* 12px */}
        </span>
      )}
    </span>
  );
};

export { Badge };
