import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,box-shadow,background-color,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone/50",
  {
    variants: {
      variant: {
        primary:
          "bg-bone text-bone-fg shadow-[0_0_0_1px_rgba(12,12,11,0.2)] hover:opacity-90",
        ghost:
          "bg-transparent text-ink shadow-[inset_0_0_0_1px_rgba(236,234,227,0.14)] hover:bg-inset",
        quiet: "bg-transparent text-muted hover:text-ink",
        danger:
          "bg-transparent text-ember shadow-[inset_0_0_0_1px_rgba(196,92,62,0.45)] hover:bg-ember/10",
      },
      size: {
        sm: "h-9 rounded-sm px-3 text-sm",
        md: "h-11 rounded-md px-4 text-sm",
        lg: "h-12 rounded-md px-5 text-base",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
