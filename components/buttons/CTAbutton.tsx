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
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline:
      "bg-transparent border-2 border-primary_button text-primary_button hover:bg-blue-500 hover:text-white",
  };

  const sizeClasses: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-4 py-2 text-lg",
  };

  const classes = `${baseClasses} ${typeClasses[type]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
