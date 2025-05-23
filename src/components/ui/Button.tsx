import React, {
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";
import "./button.css";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-150 border focus:outline-none disabled:opacity-65 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#1293FE] hover:bg-[#0A58CA] text-white active:bg-[#0A58CA] active:shadow-[0px_0px_0px_4px_#D3D4D580] border-[#1293FE] hover:border-[#0A58CA] active:border-[#0A58CA] disabled:bg-[#0D6EFD] disabled:border-[#0D6EFD]",
        secondary:
          "bg-[#6C757D] hover:bg-[#565E64] text-white active:bg-[#565E64] active:shadow-[0px_0px_0px_4px_#828A9180] border-[#6C757D] hover:border-[#565E64] active:border-[#565E64] disabled:bg-[#6C757D] disabled:border-[#6C757D]",
        "outline-primary":
          "bg-white hover:bg-[#0D6EFD] hover:text-white text-[#0D6EFD] active:bg-[#0D6EFD] active:text-white active:shadow-[0px_0px_0px_4px_#0D6EFD40] border-[#0D6EFD] disabled:bg-white disabled:text-[#0D6EFD] disabled:border-[#0D6EFD]",
        "outline-secondary":
          "bg-white hover:bg-[#6C757D] hover:text-white text-[#6C757D] active:bg-[#6C757D] active:text-white active:shadow-[0px_0px_0px_4px_#6C757D80] border-[#6C757D] disabled:bg-white disabled:text-[#6C757D] disabled:border-[#6C757D]",
        link: "bg-transparent text-[#1293FE] hover:text-[#0A58CA] active:text-[#0A58CA] active:border-[#FFFFFF00] border-transparent disabled:text-[#6C757D] p-0 h-auto",
        success:
          "bg-[#198754] hover:bg-[#146C43] text-white active:bg-[#146C43] active:shadow-[0px_0px_0px_4px_#3C996E80] border-[#198754] hover:border-[#146C43] active:border-[#146C43] disabled:bg-[#198754] disabled:border-[#198754]",
        danger:
          "bg-[#DC3545] hover:bg-[#B02A37] text-white active:bg-[#B02A37] active:shadow-[0px_0px_0px_4px_#E1536180] border-[#DC3545] hover:border-[#B02A37] active:border-[#B02A37] disabled:bg-[#DC3545] disabled:border-[#DC3545]",
        info: "bg-[#0DCAF0] hover:bg-[#31D2F2] text-black active:bg-[#31D2F2] active:shadow-[0px_0px_0px_4px_#0BACCC80] border-[#0DCAF0] hover:border-[#31D2F2] active:border-[#31D2F2] disabled:bg-[#0DCAF0] disabled:border-[#0DCAF0]",
        light:
          "bg-[#F8F9FA] hover:bg-[#F9FAFB] text-black active:bg-[#F9FAFB] active:shadow-[0px_0px_0px_4px_#D3D4D580] border-[#F8F9FA] hover:border-[#F9FAFB] active:border-[#F9FAFB] disabled:bg-[#F8F9FA] disabled:border-[#F8F9FA]",
        warning:
          "bg-[#FFC107] hover:bg-[#FFCD39] text-black active:bg-[#FFCD39] active:shadow-[0px_0px_0px_4px_#D9A40680] border-[#FFC107] hover:border-[#FFCD39] active:border-[#FFCD39] disabled:bg-[#FFC107] disabled:border-[#FFC107]",
        dark: "bg-[#212529] hover:bg-[#1A1E21] text-white active:bg-[#1A1E21] active:shadow-[0px_0px_0px_4px_#42464980] border-[#212529] hover:border-[#1A1E21] active:border-[#1A1E21] disabled:bg-[#212529] disabled:border-[#212529]",
        "outline-success":
          "bg-white hover:bg-[#198754] hover:text-white text-[#198754] active:bg-[#198754] active:text-white active:shadow-[0px_0px_0px_4px_#19875480] border-[#198754] disabled:bg-white disabled:text-[#198754] disabled:border-[#198754]",
        "outline-danger":
          "bg-white hover:bg-[#DC3545] hover:text-white text-[#DC3545] active:bg-[#DC3545] active:text-white active:shadow-[0px_0px_0px_4px_#DC354580] border-[#DC3545] disabled:bg-white disabled:text-[#DC3545] disabled:border-[#DC3545]",
        "outline-dark":
          "bg-white hover:bg-[#212529] hover:text-white text-black active:bg-[#212529] active:text-white active:shadow-[0px_0px_0px_4px_#21252980] border-[#212529] disabled:bg-white disabled:text-black disabled:border-[#212529]",
        "outline-info":
          "bg-white hover:bg-[#0DCAF0] hover:text-black text-[#0DCAF0] active:bg-[#0DCAF0] active:text-black active:shadow-[0px_0px_0px_4px_#0DCAF080] border-[#0DCAF0] disabled:bg-white disabled:text-[#0DCAF0] disabled:border-[#0DCAF0]",
        "outline-warning":
          "bg-white hover:bg-[#FFC107] hover:text-black text-[#FFC107] active:bg-[#FFC107] active:text-black active:shadow-[0px_0px_0px_4px_#FFC10780] border-[#FFC107] disabled:bg-white disabled:text-[#FFC107] disabled:border-[#FFC107]",
      },
      size: {
        small: "py-1 px-2 text-xs",
        medium: "py-1.5 px-3 text-sm",
        large: "py-2 px-4 text-base",
      },
      isIconOnly: {
        true: "p-2",
      },
      isAnimated: {
        true: "button-animated",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      isIconOnly: false,
      isAnimated: false,
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isIconOnly,
      isAnimated,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            isIconOnly,
            isAnimated,
            className,
          }),
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}

        {!isIconOnly && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {isIconOnly ? leftIcon || children : children}
        {!isIconOnly && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
