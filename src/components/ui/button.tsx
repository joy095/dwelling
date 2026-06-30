import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-visible:ring-dwelling-gold/50 inline-flex items-center justify-center rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-pressed:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-dwelling-charcoal hover:bg-dwelling-warm hover:shadow-dwelling-charcoal/20 dark:bg-dwelling-gold dark:text-dwelling-charcoal dark:hover:bg-dwelling-goldLight text-white hover:shadow-lg",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border-dwelling-charcoal text-dwelling-charcoal hover:bg-dwelling-charcoal dark:border-dwelling-gold dark:text-dwelling-gold dark:hover:bg-dwelling-gold dark:hover:text-dwelling-charcoal border-2 bg-transparent hover:text-white",
        secondary:
          "bg-dwelling-sand text-dwelling-warm hover:bg-dwelling-stone dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
        ghost:
          "hover:bg-dwelling-sand text-dwelling-warm dark:text-white/80 dark:hover:bg-white/10",
        link: "text-dwelling-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
