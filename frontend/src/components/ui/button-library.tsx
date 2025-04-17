import { cn } from "../../lib/utils";
import { Button as BaseButton } from "./button";
import { ComponentPropsWithoutRef } from "react";

interface CustomButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseButton>, "variant"> {
  customVariant?: "default" | "primary" | "secondary" | "disabled" | "gradient";
}

export const CustomButton = ({
  className,
  customVariant = "default",
  disabled,
  children,
  ...props
}: CustomButtonProps) => {
  return (
    <BaseButton
      className={cn(
        "transition-all duration-200 rounded-full font-medium",
        customVariant === "primary" &&
          "bg-indigo-600 hover:bg-indigo-700 text-white",
        customVariant === "secondary" &&
          "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm",
        customVariant === "disabled" &&
          "bg-gray-700 text-gray-400 cursor-not-allowed",
        customVariant === "gradient" &&
          "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:opacity-90 text-white",
        className
      )}
      disabled={customVariant === "disabled" || disabled}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
