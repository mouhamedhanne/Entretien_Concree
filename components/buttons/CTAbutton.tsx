interface ButtonProps {
  type?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "medium",
  onClick,
  children,
  className = "",
}) => {
  const baseClasses = "rounded transition-colors duration-200 ease-in-out";

  const typeClasses: Record<string, string> = {
    primary: "bg-primary_button hover:bg-primary_button/90",
    secondary:
      "text-secondary_button text-[8px] bg-blue-200 font-bold px-2 py-1 rounded-[4px]",
    outline:
      "bg-transparent border-2 border-primary_button text-primary_button",
  };

  const sizeClasses: Record<string, string> = {
    small: "px-3 py-1",
    medium: "px-4 py-2 text-base",
    large: "px-4 py-2 text-base",
  };

  const classes = `${baseClasses} ${typeClasses[type]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
