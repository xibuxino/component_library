import { cva } from "class-variance-authority";

export const toastWrapper = cva("shadow-lg relative cursor-default", {
  variants: {
    variant: ["bold", "light"],
    color: ["default", "blue", "purple", "green"],
    size: {
      sm: "px-5 py-3 rounded-md w-sm",
      md: "px-6 py-4 rounded-lg w-md",
      lg: "px-7 py-5 rounded-xl w-lg ",
    },
  },
  compoundVariants: [
    {
      variant: "bold",
      color: "default",
      class: "bg-zinc-800 text-zinc-800",
    },
    {
      variant: "bold",
      color: "blue",
      class: "bg-blue-800 text-blue-800",
    },
    {
      variant: "bold",
      color: "purple",
      class: "bg-fuchsia-700 text-fuchsia-700",
    },
    {
      variant: "bold",
      color: "green",
      class: "bg-emerald-700 text-emerald-700",
    },
    {
      variant: "light",
      color: "default",
      class: "bg-white text-white",
    },
    {
      variant: "light",
      color: "blue",
      class: "bg-blue-200 text-blue-200",
    },
    {
      variant: "light",
      color: "purple",
      class: "bg-fuchsia-100 text-fuchsia-100",
    },
    {
      variant: "light",
      color: "green",
      class: "bg-emerald-100 text-emerald-100",
    },
  ],
  defaultVariants: {
    variant: "bold",
    color: "default",
    size: "md",
  },
});

export const toastTitle = cva("col-start-2 font-medium col-end-3 row-1", {
  variants: {
    variant: ["bold", "light"],
    color: ["default", "blue", "purple", "green"],
    size: {
      sm: "text-lg",
      md: "text-xl ",
      lg: "text-2xl ",
    },
  },
  compoundVariants: [
    {
      variant: "bold",
      color: "default",
      class: "text-white",
    },
    {
      variant: "bold",
      color: "blue",
      class: "text-white",
    },
    {
      variant: "bold",
      color: "purple",
      class: "text-white",
    },
    {
      variant: "bold",
      color: "green",
      class: "text-white",
    },
    {
      variant: "light",
      color: "default",
      class: "text-zinc-800",
    },
    {
      variant: "light",
      color: "blue",
      class: "text-blue-900",
    },
    {
      variant: "light",
      color: "purple",
      class: "text-fuchsia-800",
    },
    {
      variant: "light",
      color: "green",
      class: "text-green-900",
    },
  ],
  defaultVariants: {
    variant: "bold",
    color: "default",
    size: "md",
  },
});
export const toastDescription = cva("col-start-2 col-end-3 row-2", {
  variants: {
    variant: ["bold", "light"],
    color: ["default", "blue", "purple", "green"],
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  compoundVariants: [
    {
      variant: "bold",
      color: "default",
      class: "text-zinc-50",
    },
    {
      variant: "bold",
      color: "blue",
      class: "text-blue-50",
    },
    {
      variant: "bold",
      color: "purple",
      class: "text-fuchsia-50",
    },
    {
      variant: "bold",
      color: "green",
      class: "text-green-50",
    },
    {
      variant: "light",
      color: "default",
      class: "text-zinc-700",
    },
    {
      variant: "light",
      color: "blue",
      class: "text-blue-800",
    },
    {
      variant: "light",
      color: "purple",
      class: "text-fuchsia-700",
    },
    {
      variant: "light",
      color: "green",
      class: "text-green-800",
    },
  ],
  defaultVariants: {
    variant: "bold",
    color: "default",
    size: "md",
  },
});

export const toastIconColor = cva("opacity-75", {
  variants: {
    variant: ["bold", "light"],
    color: ["default", "blue", "purple", "green"],
  },
  compoundVariants: [
    {
      variant: "bold",
      color: "default",
      class: "text-zinc-50",
    },
    {
      variant: "bold",
      color: "blue",
      class: "text-blue-50",
    },
    {
      variant: "bold",
      color: "purple",
      class: "text-fuchsia-50",
    },
    {
      variant: "bold",
      color: "green",
      class: "text-green-50",
    },
    {
      variant: "light",
      color: "default",
      class: "text-zinc-700",
    },
    {
      variant: "light",
      color: "blue",
      class: "text-blue-800",
    },
    {
      variant: "light",
      color: "purple",
      class: "text-fuchsia-700",
    },
    {
      variant: "light",
      color: "green",
      class: "text-green-800",
    },
  ],
  defaultVariants: {
    variant: "bold",
    color: "default",
  },
});

export const toastTail = cva(
  "drop-shadow-[0px_5px_2px_rgba(0,0,0,0.075)] absolute",
  {
    variants: {
      tail: {
        left: "left-12",
        center: "left-1/2 -translate-x-1/2",
        right: "right-12",
        none: "hidden",
      },
      size: {
        sm: "w-8 h-8 -bottom-5",
        md: "w-10 h-10 -bottom-7",
        lg: "w-12 h-12 -bottom-8",
      },
    },

    defaultVariants: {
      tail: "left",
      size: "md",
    },
  }
);

export const toastMainIcon = cva("w-[2em] mt-[0.15em]", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const toastCloseIcon = cva("w-[1em] mt-[0.3em] cursor-pointer", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },

  defaultVariants: {
    size: "md",
  },
});
