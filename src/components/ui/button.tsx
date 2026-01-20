"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "motion/react"
import { cn } from "@/utils"
import { ArrowRightIcon } from "lucide-react"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer select-none relative overflow-hidden",
    {
        variants: {
            variant: {
                default: "bg-white text-black hover:bg-gray-200 border border-transparent shadow-[0_2px_10px_rgba(255,255,255,0.1)] hover:shadow-[0_2px_20px_rgba(255,255,255,0.2)] active:scale-[0.98] transition-all duration-300",
                destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border border-white/20 bg-transparent hover:bg-white/10 hover:border-white/40 text-white transition-all duration-300 active:scale-[0.98]",
                secondary: "bg-neutral-800 hover:bg-foreground text-foreground hover:text-background",
                ghost: "hover:bg-white/10 hover:text-white",
                link: "text-primary underline-offset-4 hover:underline",
                stroke: "border-2 border-current bg-transparent hover:text-background relative overflow-hidden",
                white: "bg-white text-black hover:bg-gray-200",
                shimmer: "bg-neutral-900 text-white border border-white/10"
            },
            size: {
                default: "h-11 px-8 py-2 text-base", // Larger default size
                sm: "h-9 gap-1.5 px-4 text-xs",
                lg: "h-14 px-10 text-lg",
                icon: "size-10",
                "icon-sm": "size-8",
                "icon-lg": "size-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

interface Props extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
