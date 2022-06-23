import styles from "./button.module.css";
import cn from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary";
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  label: string;
  href?: string;
  children?: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  backgroundColor,
  label,
  className,
  href,
  children,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    [styles["-button--primary"]]: variant === "primary",
    [styles["-button--secondary"]]: variant === "secondary",
  };

  return (
    <a
      href={href}
      type="button"
      className={cn(className, styles["-button"], variantClasses)}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      {children}
    </a>
  );
};
