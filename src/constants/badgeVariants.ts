import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  // Base styles
  "inline-flex items-center font-medium font-inter rounded-full transition-colors",
  {
    variants: {
      variant: {
        gray: "bg-[#F2F4F7] text-[#344054]",
        primary: "bg-[#F9F5FF] text-[#6941C6]",
        error: "bg-[#FEF3F2] text-[#B42318]",
        warning: "bg-[#FFFAEB] text-[#B54708]",
        success: "bg-[#ECFDF3] text-[#027A48]",
        "blue-gray": "bg-[#F8F9FC] text-[#363F72]",
        "blue-light": "bg-[#F0F9FF] text-[#026AA2]",
        blue: "bg-[#EFF8FF] text-[#175CD3]",
        indigo: "bg-[#EEF4FF] text-[#3538CD]",
        purple: "bg-[#F4F3FF] text-[#5925DC]",
        pink: "bg-[#FDF2FA] text-[#C11574]",
        rose: "bg-[#FFF1F3] text-[#C01048]",
        orange: "bg-[#FFF6ED] text-[#C4320A]",
      },
      size: {
        sm: "text-xs py-[1px] leading-[18px]",
        md: "text-sm py-[2px] leading-[20px]",
        lg: "text-sm py-[3px] leading-[20px]",
      },
      iconType: {
        none: "px-[8px]",
        dot: "pl-[6px] pr-[8px]",
        country: "pl-[6px] pr-[8px]",
        avatar: "pl-[4px] pr-[8px]",
        left: "pl-[6px] pr-[8px]",
        right: "pl-[8px] pr-[6px]",
        iconOnly: "px-[4px]",
      },
    },
    defaultVariants: {
      variant: "gray",
      size: "md",
      iconType: "none",
    },
  },
);
