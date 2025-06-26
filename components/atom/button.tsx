import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonVariants = cva(
  cn(
    "font-semibold",
    "flex items-center justify-center gap-2",
    "px-4",
    "cursor-pointer",
    "not-disabled:hover:brightness-95",
    "focus-visible:outline focus-visible:outline-primary focus-visible: outline-offset-2",
    "disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 disabled:shadow-none"
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "bg-primary text-primary-foreground shadow-lg",
          "not-disabled:active:scale-95 active:shadow-none"
        ),
        secondary: cn(
          "bg-secondary text-secondary-foreground",
          "not-disabled:active:scale-95 active:shadow-none"
        ),
        text: cn(
          "bg-transparent text-secondary-foreground",
          "not-disabled:hover:bg-gray-50",
          "not-disabled:active:scale-95 active:shadow-none"
        ),
        link: "hover:underline p-0"
      },
      size: {
        sm: "h-8 rounded-sm [&_svg:not([class*='size-'])]:size-3",
        md: "h-9 rounded-md [&_svg:not([class*='size-'])]:size-4",
        lg: "h-10 rounded-lg [&_svg:not([class*='size-'])]:size-5",
        "icon-sm":
          "size-8 p-0 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-md":
          "size-9 p-0 rounded-full [&_svg:not([class*='size-'])]:size-4",
        "icon-lg":
          "size-10 p-0 rounded-full [&_svg:not([class*='size-'])]:size-5"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
type ButtonComponentProps = ComponentProps<"button">;

type ButtonProps = ButtonComponentProps & ButtonVariantProps;

export default function Button({
  variant,
  size,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  );
}
